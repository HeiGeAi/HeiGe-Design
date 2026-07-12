// 能力6 URL→DESIGN.md 自研提取器：playwright 读 CSSOM 计算样式，聚类合成 HeiGe 设定集草稿。不依赖任何付费 API。
// 用法：node ingest.mjs <url> [slug]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// 自动探测 playwright 的 chromium（跨平台 + 跨版本），找不到就提示用户装
function findChrome(){
  if (process.env.HEIGE_CHROME && fs.existsSync(process.env.HEIGE_CHROME)) return process.env.HEIGE_CHROME;
  const cache = path.join(process.env.HOME || process.env.USERPROFILE || '', 'Library/Caches/ms-playwright');
  const alt = path.join(process.env.HOME || '', '.cache/ms-playwright'); // linux
  for (const base of [cache, alt]) {
    if (!fs.existsSync(base)) continue;
    const dirs = fs.readdirSync(base).filter(d => /^chromium(_headless_shell)?-\d+/.test(d)).sort().reverse();
    for (const d of dirs) {
      const hits = [];
      const walk = p => { for (const e of fs.readdirSync(p, { withFileTypes: true })) {
        const fp = path.join(p, e.name);
        if (e.isDirectory()) walk(fp);
        else if (/^(chrome-headless-shell|Chromium|chrome)$/.test(e.name)) hits.push(fp);
      } };
      try { walk(path.join(base, d)); } catch {}
      if (hits.length) return hits[0];
    }
  }
  return null;
}
const CHROME = findChrome();
if (!CHROME) { console.error('未找到 chromium。请先安装：npx playwright install chromium（或设 HEIGE_CHROME 指向可执行文件）'); process.exit(1); }
const url = process.argv[2];
if (!url) { console.error('用法: node ingest.mjs <url> [slug]'); process.exit(1); }
const host = new URL(url).hostname.replace(/^www\./, '');
const slug = process.argv[3] || host.replace(/[^a-z0-9]+/gi, '-');

// —— 颜色工具 ——
const toHex = (r,g,b)=>'#'+[r,g,b].map(x=>Math.max(0,Math.min(255,x|0)).toString(16).padStart(2,'0')).join('');
function parseColor(s){ const m=String(s).match(/rgba?\(([^)]+)\)/); if(!m) return null;
  const p=m[1].split(',').map(x=>parseFloat(x)); if(p.length>=4&&p[3]===0) return null; return {r:p[0],g:p[1],b:p[2],hex:toHex(p[0],p[1],p[2])}; }
function lum({r,g,b}){ const f=c=>{c/=255;return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);}; return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b); }
function sat({r,g,b}){ const mx=Math.max(r,g,b)/255,mn=Math.min(r,g,b)/255; return mx===0?0:(mx-mn)/mx; }
function contrast(a,b){ const L1=lum(a),L2=lum(b); return (Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05); }

const raw = await (async()=>{
  const browser = await chromium.launch({ headless:true, executablePath: CHROME });
  try{
    const page = await browser.newPage({ viewport:{width:1440,height:1000} });
    await page.goto(url, { waitUntil:'load', timeout:45000 });
    await page.waitForTimeout(1500);
    return await page.evaluate(()=>{
      const els=[...document.querySelectorAll('body *')].slice(0,4000);
      const bg={},txt={},bord={},rad={},padv={},fam={},btnFam={},dispFam={};
      let bodyFont='', maxArea=0, bodySize=16;
      for(const el of els){
        const r=el.getBoundingClientRect(); const area=r.width*r.height;
        if(area<40||r.width<2) continue;
        const cs=getComputedStyle(el);
        const add=(o,k,w=1)=>{ if(k) o[k]=(o[k]||0)+w; };
        add(bg, cs.backgroundColor, area);
        add(txt, cs.color, 1);
        if(cs.borderTopWidth!=='0px') add(bord, cs.borderTopColor, 1);
        if(cs.borderTopLeftRadius!=='0px') add(rad, cs.borderTopLeftRadius, 1);
        add(padv, cs.paddingTop, 1);
        const tag=el.tagName.toLowerCase();
        add(fam, cs.fontFamily, 1);
        if(tag==='button'||el.getAttribute('role')==='button'||/btn|button/i.test(el.className||'')) add(btnFam,cs.fontFamily,1);
        const fs=parseFloat(cs.fontSize)||0;
        if(/^h[1-3]$/.test(tag)||fs>=32){ add(dispFam,cs.fontFamily,fs); }
        if(tag==='p'||tag==='body'){ bodyFont=cs.fontFamily; bodySize=fs||bodySize; }
      }
      const bodyCS=getComputedStyle(document.body);
      return { bg,txt,bord,rad,padv,fam,btnFam,dispFam,
        bodyFont: bodyFont||bodyCS.fontFamily, bodySize,
        pageBg: bodyCS.backgroundColor, pageColor: bodyCS.color, title: document.title };
    });
  } finally { await browser.close(); }
})();

const top=(o,n=8)=>Object.entries(o).sort((a,b)=>b[1]-a[1]).slice(0,n).map(([k])=>k);
const colorsFrom=(o)=>top(o,14).map(parseColor).filter(Boolean);

const bgs=colorsFrom(raw.bg), txts=colorsFrom(raw.txt), bords=colorsFrom(raw.bord);
const canvas = parseColor(raw.pageBg) || bgs[0] || {hex:'#ffffff',r:255,g:255,b:255};
const dark = lum(canvas) < 0.42;
const ink = parseColor(raw.pageColor) || txts.find(c=>contrast(c,canvas)>=4.5) || {hex: dark?'#eaeaea':'#111111'};
// 强调色：饱和度高、且与 canvas 有对比
// 强调色：按 饱和度×出现频次 打分，排除近黑近白，取最抢眼的一个
function scoredAccents(){
  const pool=new Map();
  for(const [o,w] of [[raw.bg,1.2],[raw.txt,1.0],[raw.bord,0.8]]){
    for(const [k,cnt] of Object.entries(o)){ const c=parseColor(k); if(!c) continue;
      const s=sat(c); if(s<0.28) continue; const L=lum(c); if(L<0.03||L>0.96) continue;
      pool.set(c.hex, (pool.get(c.hex)||0) + s*Math.log(1+cnt)*w); }
  }
  return [...pool.entries()].sort((a,b)=>b[1]-a[1]).map(([hex])=>({hex, ...parseColor(hex)}));
}
const accent = scoredAccents();
const primary = accent[0] || ink;
const surface = bgs.find(c=>c.hex!==canvas.hex && Math.abs(lum(c)-lum(canvas))<0.25) || bgs[1] || canvas;
const muted = txts.find(c=>c.hex!==ink.hex && contrast(c,canvas)>=3) || ink;
const hairline = bords[0] || muted;
// 圆角：pill 会算成天文数字，过滤到 2..64px 取最常见；否则默认 8px
const radius = top(raw.rad,8).map(r=>parseFloat(r)).filter(v=>v>=2&&v<=64).map(v=>Math.round(v)+'px')[0] || '8px';
const clean=(f)=>String(f||'').split(',').map(s=>s.trim().replace(/^["']|["']$/g,'')).filter(Boolean);
const dispStack = clean(top(raw.dispFam,1)[0]||raw.bodyFont);
const bodyStack = clean(raw.bodyFont);
const CNSANS='"Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
const ff=(stack)=>[...new Set([...stack,'system-ui'])].map(f=>/\s/.test(f)?`'${f}'`:f).join(', ')+', '+CNSANS;
const onPrimary = contrast({r:255,g:255,b:255},primary) >= contrast({r:17,g:17,b:17},primary) ? '#ffffff' : '#111111';

const design = `---
version: alpha
name: ${slug}-extracted
description: Draft design system extracted from ${url} by HeiGe-Design ingest (playwright CSSOM). Review and refine before use — extracted tokens are approximate, not ground truth.

colors:
  primary: "${primary.hex}"
  on-primary: "${onPrimary}"
  ink: "${ink.hex}"
  canvas: "${canvas.hex}"
  surface: "${surface.hex}"
  muted: "${muted.hex}"
  hairline: "${hairline.hex}"

typography:
  display-xl:
    fontFamily: "${ff(dispStack)}"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  body-md:
    fontFamily: "${ff(bodyStack)}"
    fontSize: ${Math.round(raw.bodySize)||16}px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  button:
    fontFamily: "${ff(bodyStack)}"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0

rounded:
  sm: 6px
  md: ${radius}
  pill: 9999px

spacing:
  sm: 8px
  md: 16px
  lg: 24px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  body-text:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 0px
---

## Overview

Draft design system extracted from **${url}** (${raw.title || host}). Base canvas is ${dark?'dark':'light'} (\`${canvas.hex}\`), ink \`${ink.hex}\`, with \`${primary.hex}\` acting as the primary accent. This is an **approximate extraction** from computed CSS, not the site's real design system — treat it as a starting draft, then refine tokens, add the brand's rationale, and run \`heige-design lint ${slug}\`.

## Colors
- **Primary** (\`${primary.hex}\`): main accent / CTA.
- **Ink** (\`${ink.hex}\`): body text.
- **Canvas** (\`${canvas.hex}\`) / **Surface** (\`${surface.hex}\`): page and card backgrounds.
- **Muted** (\`${muted.hex}\`): secondary text. **Hairline** (\`${hairline.hex}\`): borders.

## Typography
Display stack extracted as \`${dispStack.join(', ')||'—'}\`; body \`${bodyStack.join(', ')||'—'}\`. 中文字体栈已补系统兜底，中文不用日文字体。

## Do's and Don'ts
### Don't
- 不碰紫蓝俗套渐变(#667eea→#764ba2)。
- 不做居中卡片三件套。
- 中文不用日文字体渲染。
- 不动画化阴影。

## Anti-Slop Pledge
这是自动提取的草稿，需人工补齐设计理由和签名时刻后才算成品。
`;

const outDir = path.join(ROOT, 'ingested', slug);
fs.mkdirSync(outDir, { recursive:true });
const outFile = path.join(outDir, 'DESIGN.md');
fs.writeFileSync(outFile, design);
console.log('提取完成 →', outFile);
console.log(`主色 ${primary.hex} | canvas ${canvas.hex}(${dark?'dark':'light'}) | ink ${ink.hex} | 圆角 ${radius}`);
// 顺手 lint
try{
  const BIN=path.join(ROOT,'node_modules','.bin','design.md');
  const out=execFileSync(BIN,['lint',outFile],{encoding:'utf8'});
  const e=(out.match(/"severity": "error"/g)||[]).length, w=(out.match(/"severity": "warning"/g)||[]).length;
  console.log(`lint: ${e} error / ${w} warning`);
}catch(e){ console.log('lint:', String(e.message).split('\n')[0]); }
