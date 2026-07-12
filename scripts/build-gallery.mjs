// HeiGe-Design 画廊生成器：读 50 套 DESIGN.md 的 tokens，token 驱动渲染 on-brand 预览瓷砖。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const yaml = require('js-yaml');

const ROOT = path.resolve(process.argv[2] || path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'));
const SYS = path.join(ROOT, 'systems');
const SITE = path.join(ROOT, 'site');
fs.mkdirSync(SITE, { recursive: true });

// slug → {family, cn}（来自 aesthetic-atlas）
const META = {
  'forge-anvil':['凶悍工业','熔炉'],'rebar-concrete':['凶悍工业','钢筋'],'riot-press':['凶悍工业','暴走印刷'],'ironclad-ledger':['凶悍工业','铁账'],'brut-signal':['凶悍工业','呐喊'],
  'nocturne-teal':['暗色科技','深空电青'],'aurora-mesh':['暗色科技','极光'],'carbon-lime':['暗色科技','碳黑电绿'],'midnight-trust':['暗色科技','午夜蓝'],'obsidian-flux':['暗色科技','黑曜流光'],'void-hud':['暗色科技','虚空仪表'],
  'sermon-serif':['优雅编辑','布道'],'noir-vermilion':['优雅编辑','玄墨绛红'],'broadsheet':['优雅编辑','大报'],'atelier-bone':['优雅编辑','象牙工坊'],'manifesto-ink':['优雅编辑','墨宣言'],
  'helvetic-ledger':['瑞士纪律','账本'],'grid-bureau':['瑞士纪律','制表局'],'datum-signal':['瑞士纪律','数点'],'akkurat-mono':['瑞士纪律','精准等宽'],
  'synthwave-drive':['复古未来','合成波'],'y2k-chrome':['复古未来','千禧金属'],'arcade-crt':['复古未来','街机荧光'],'vaporwave-marble':['复古未来','蒸汽石膏'],'cassette-futurism':['复古未来','磁带未来'],
  'clayfield':['有机自然','陶土'],'morandi-still':['有机自然','莫兰迪静物'],'linen-fold':['有机自然','亚麻褶'],'harvest-warm':['有机自然','丰收'],
  'boing-candy':['玩味玩具','弹跳糖'],'jelly-pop':['玩味玩具','果冻'],'sticker-club':['玩味玩具','贴纸俱乐部'],'doodle-note':['玩味玩具','涂鸦本'],
  'wenkai-warm':['温暖人文','文楷暖'],'hearth-story':['温暖人文','炉边'],'almanac-folk':['温暖人文','民历'],'coffee-house':['温暖人文','咖啡馆'],
  'soundwave-wrapped':['张扬极繁','声浪'],'acg-stellar':['张扬极繁','二次元星轨'],'collage-riot':['张扬极繁','拼贴暴动'],'neon-market':['张扬极繁','霓虹夜市'],
  'onyx-gold':['奢侈高定','玄金'],'champagne-silk':['奢侈高定','香槟丝绸'],'monogram-noir':['奢侈高定','字母黑'],'marble-vein':['奢侈高定','大理石纹'],
  'moxi-void':['东方新中式','水墨留白'],'gugong-red':['东方新中式','故宫红金'],'song-celadon':['东方新中式','宋瓷极简'],'guochao-cyber':['东方新中式','赛博国潮'],'dunhuang-mineral':['东方新中式','敦煌矿彩'],
};
const FAMILY_ORDER = ['凶悍工业','暗色科技','优雅编辑','瑞士纪律','复古未来','有机自然','玩味玩具','温暖人文','张扬极繁','奢侈高定','东方新中式'];

// —— 工具 ——
function luminance(hex){
  const m = String(hex||'').replace('#','').match(/[0-9a-f]{2}/gi); if(!m||m.length<3) return 1;
  const [r,g,b] = m.map(h=>{const c=parseInt(h,16)/255; return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);});
  return 0.2126*r+0.7152*g+0.0722*b;
}
function pick(colors, keys){ for(const k of keys){ if(colors[k]) return colors[k]; } return null; }
function firstFF(typ, includes){
  const k = Object.keys(typ||{}).find(k=>includes.some(s=>k.toLowerCase().includes(s)));
  return k ? (typ[k].fontFamily||'') : '';
}
function anyFF(typ){ const k=Object.keys(typ||{})[0]; return k?(typ[k].fontFamily||''):''; }
function esc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

const systems = [];
for (const slug of Object.keys(META)) {
  const file = path.join(SYS, slug, 'DESIGN.md');
  if (!fs.existsSync(file)) { console.warn('缺文件', slug); continue; }
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  let fm = {};
  try { fm = yaml.load(m ? m[1] : '') || {}; } catch(e){ console.warn('YAML解析失败', slug, e.message); }
  const colors = fm.colors || {}, typ = fm.typography || {}, rounded = fm.rounded || {};
  const [family, cn] = META[slug];

  const bg = pick(colors,['canvas','surface','bg','base','paper','canvas-dark','canvas-light']) || '#ffffff';
  const ink = pick(colors,['ink','body','text','foreground','on-canvas','ink-primary']) || (luminance(bg)<0.4?'#eee':'#111');
  const primary = pick(colors,['primary','brand','accent','signal']) || ink;
  const onPrimary = pick(colors,['on-primary','on-accent']) || (luminance(primary)<0.45?'#fff':'#111');
  const accent = pick(colors,['accent','accent-1','secondary','highlight','glow','seal-red','gold']) || primary;
  const surface = pick(colors,['surface','card','elevated','surface-1']) || bg;
  const muted = pick(colors,['muted','ink-mute','subtle','ink-secondary','caption']) || ink;
  const hairline = pick(colors,['hairline','border','line','divider','rule']) || muted;
  const dark = luminance(bg) < 0.42;

  const displayFF = firstFF(typ,['display','hero','title-lg','h1']) || anyFF(typ) || 'sans-serif';
  const bodyFF = firstFF(typ,['body']) || anyFF(typ) || 'sans-serif';
  const monoFF = firstFF(typ,['mono','number','tabular','code','data']) || '';
  const dispRole = Object.keys(typ).find(k=>/display|hero/i.test(k));
  const dispWeight = dispRole ? (typ[dispRole].fontWeight||700) : 700;
  const dispLS = dispRole ? (typ[dispRole].letterSpacing||'0') : '0';
  const radius = rounded.md || rounded.lg || rounded.sm || '8px';

  // 调色板：去重取前 7
  const palette = [...new Set(Object.values(colors))].filter(c=>/^#/.test(c)).slice(0,7);

  systems.push({ slug, family, cn, name: fm.name||slug, bg, ink, primary, onPrimary, accent, surface, muted, hairline, dark, displayFF, bodyFF, monoFF, dispWeight, dispLS, radius, palette,
    tags: (fm.description||'').slice(0,0) });
}

// manifest
fs.writeFileSync(path.join(ROOT,'manifest.json'), JSON.stringify(systems.map(s=>({slug:s.slug,family:s.family,cn:s.cn,name:s.name,primary:s.primary,bg:s.bg,dark:s.dark,palette:s.palette})),null,2));

// —— Google Fonts：覆盖常用族 ——
const FONTS = ['Inter:wght@300;400;500;600;700;800','Space+Grotesk:wght@400;500;700','Archivo:wght@400;600;800','Archivo+Black','Anton','Bebas+Neue','Oswald:wght@500;700','Playfair+Display:wght@400;600;700;900','Cormorant:wght@400;600;700','Cormorant+Garamond:wght@400;600;700','EB+Garamond:wght@400;600','Fraunces:wght@400;600;900','DM+Serif+Display','Manrope:wght@400;600;800','Sora:wght@400;600;800','Sohne','Syne:wght@600;800','Space+Mono:wght@400;700','JetBrains+Mono:wght@400;600;800','IBM+Plex+Mono:wght@400;600','IBM+Plex+Sans:wght@400;600','IBM+Plex+Serif:wght@400;600','Chakra+Petch:wght@500;700','Press+Start+2P','VT323','Baloo+2:wght@500;700;800','Fredoka:wght@500;600;700','Noto+Serif+SC:wght@400;600;900','Noto+Sans+SC:wght@400;500;700;900','LXGW+WenKai+TC','ZCOOL+KuaiLe','ZCOOL+XiaoWei','Ma+Shan+Zheng','Long+Cang','Zhi+Mang+Xing'];
const fontsLink = `https://fonts.googleapis.com/css2?${FONTS.map(f=>'family='+f).join('&')}&display=swap`;

function tile(s){
  const specimen = s.dark ? s.accent : s.primary;
  return `<article class="tile ${s.dark?'is-dark':'is-light'}" data-family="${esc(s.family)}" data-slug="${s.slug}"
    style="--bg:${s.bg};--ink:${s.ink};--pri:${s.primary};--onpri:${s.onPrimary};--acc:${s.accent};--surf:${s.surface};--muted:${s.muted};--line:${s.hairline};--r:${s.radius};--dff:${esc(s.displayFF)};--bff:${esc(s.bodyFF)};--mff:${esc(s.monoFF||s.bodyFF)}">
    <div class="tile-top">
      <span class="fam">${esc(s.family)}</span>
      <span class="slug">${s.slug}</span>
    </div>
    <div class="specimen">
      <div class="disp" style="font-weight:${s.dispWeight};letter-spacing:${s.dispLS}">${esc(s.cn)}</div>
      <div class="lat">Ag ${s.slug.split('-')[0]} 视觉设定集</div>
    </div>
    <div class="pal">${s.palette.map(c=>`<i style="background:${c}"></i>`).join('')}</div>
    <div class="mini">
      <div class="chip">${s.monoFF? '<span class="mono" style="color:'+specimen+'">01 · 2,480.00</span>':'<span class="body">一份设定集，驱动界面与演示</span>'}</div>
      <button class="btn">Start</button>
    </div>
    <div class="tile-foot"><span class="nm">${esc(s.name)}</span></div>
  </article>`;
}

const chips = ['全部',...FAMILY_ORDER];
const grouped = FAMILY_ORDER.map(f=>({f, items: systems.filter(s=>s.family===f)}));

const html = `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>HeiGe·Design — 视觉设定集库</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${fontsLink}" rel="stylesheet">
<style>
:root{--shell:#0a0b0d;--shell2:#111318;--edge:#20242c;--fg:#e8ecf2;--dim:#8b93a2;--brand:#c8ff00}
*{box-sizing:border-box}
html,body{margin:0;background:var(--shell);color:var(--fg);font-family:Inter,-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif;-webkit-font-smoothing:antialiased}
.wrap{max-width:1400px;margin:0 auto;padding:0 32px}
header{padding:56px 0 24px;border-bottom:1px solid var(--edge)}
.ey{font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.28em;text-transform:uppercase;color:var(--brand)}
h1{margin:14px 0 6px;font-size:clamp(34px,5vw,58px);font-weight:800;letter-spacing:-.03em;line-height:1}
h1 .dot{color:var(--brand)}
.lead{color:var(--dim);font-size:16px;line-height:1.7;max-width:820px;margin:14px 0 0}
.lead b{color:var(--fg);font-weight:600}
.stat{display:flex;gap:28px;margin-top:22px;font-family:"Space Mono",monospace;font-size:12.5px;color:var(--dim);flex-wrap:wrap}
.stat b{color:var(--fg)}
.filters{position:sticky;top:0;z-index:5;background:rgba(10,11,13,.86);border-bottom:1px solid var(--edge);padding:14px 0;margin-bottom:28px;backdrop-filter:none}
.filters .wrap{display:flex;gap:9px;flex-wrap:wrap}
.chip{font-size:13px;padding:7px 14px;border:1px solid var(--edge);border-radius:999px;color:var(--dim);cursor:pointer;background:transparent;font-family:inherit;transition:.15s}
.chip:hover{color:var(--fg);border-color:#39404b}
.chip.on{background:var(--fg);color:#0a0b0d;border-color:var(--fg);font-weight:600}
.famhead{grid-column:1/-1;display:flex;align-items:baseline;gap:14px;margin:26px 0 4px;padding-top:14px;border-top:1px solid var(--edge)}
.famhead h2{font-size:20px;font-weight:700;letter-spacing:-.01em;margin:0}
.famhead .n{font-family:"Space Mono",monospace;font-size:12px;color:var(--dim)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;padding-bottom:80px}
.tile{border-radius:16px;overflow:hidden;border:1px solid var(--edge);background:var(--bg);color:var(--ink);
  font-family:var(--bff);padding:22px;min-height:280px;display:flex;flex-direction:column;gap:16px;position:relative;transition:transform .18s,box-shadow .18s}
.tile:hover{transform:translateY(-4px);box-shadow:0 18px 50px rgba(0,0,0,.45)}
.tile-top{display:flex;justify-content:space-between;align-items:center;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;opacity:.72}
.tile .slug{font-family:var(--mff);opacity:.6}
.specimen{flex:1;display:flex;flex-direction:column;justify-content:center;gap:8px}
.specimen .disp{font-family:var(--dff);font-size:46px;line-height:1.02;color:var(--ink)}
.specimen .lat{font-family:var(--mff);font-size:12px;color:var(--muted);letter-spacing:.02em}
.pal{display:flex;gap:0;border-radius:8px;overflow:hidden;height:26px;border:1px solid var(--line)}
.pal i{flex:1;display:block}
.mini{display:flex;align-items:center;justify-content:space-between;gap:12px}
.mini .chip{border:none;padding:0;background:none;cursor:default;font-size:12.5px;color:var(--muted);font-family:var(--bff)}
.mini .mono{font-family:var(--mff);font-weight:600}
.btn{font-family:var(--bff);font-weight:600;font-size:13px;background:var(--pri);color:var(--onpri);border:none;border-radius:var(--r);padding:9px 18px;cursor:pointer}
.tile-foot{border-top:1px solid var(--line);padding-top:12px;font-size:11px;font-family:var(--mff);color:var(--muted);opacity:.75;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
footer{border-top:1px solid var(--edge);padding:40px 0 70px;color:var(--dim);font-size:13px;line-height:1.7}
footer b{color:var(--fg)}
</style></head>
<body>
<div class="wrap">
<header>
  <div class="ey">HeiGe · Design System Atlas</div>
  <h1>视觉设定集库<span class="dot">.</span></h1>
  <p class="lead">${systems.length} 套原创品牌设定集，一份 <b>DESIGN.md</b> 同时驱动界面与演示。从 <b>HeiGe-UI 界面锻造</b> 与 <b>HeiGe-PPT 演讲锻造</b>共用的视觉基因里长出来，兼容 Google design.md 标准（全过 lint），内容 100% 原创。</p>
  <div class="stat"><span><b>${systems.length}</b> 套系统</span><span><b>11</b> 个气质家族</span><span><b>0</b> lint error</span><span>UI + Deck 融合</span><span>含独家 <b>东方新中式</b> 家族</span></div>
</header>
</div>
<div class="filters"><div class="wrap">${chips.map((c,i)=>`<button class="chip ${i===0?'on':''}" data-f="${c}">${c}</button>`).join('')}</div></div>
<div class="wrap">
<div class="grid" id="grid">
${grouped.map(g=>`<div class="famhead" data-family="${g.f}"><h2>${g.f}</h2><span class="n">${String(g.items.length).padStart(2,'0')} 套</span></div>\n`+g.items.map(tile).join('\n')).join('\n')}
</div>
</div>
<div class="wrap"><footer>
  <b>HeiGe·Design</b> — 给 AI 一张视觉角色卡。50 套原创设定集，覆盖西方设计正典 + 独家东方新中式家族。<br>
  署名 HeiGe，MIT，无致谢。基于 HeiGe-UI / HeiGe-PPT 演化而来。
</footer></div>
<script>
const chips=[...document.querySelectorAll('.chip')],grid=document.getElementById('grid');
chips.forEach(c=>c.onclick=()=>{chips.forEach(x=>x.classList.remove('on'));c.classList.add('on');const f=c.dataset.f;
  grid.querySelectorAll('.tile').forEach(t=>t.style.display=(f==='全部'||t.dataset.family===f)?'':'none');
  grid.querySelectorAll('.famhead').forEach(h=>h.style.display=(f==='全部'||h.dataset.family===f)?'':'none');});
</script>
</body></html>`;

fs.writeFileSync(path.join(SITE,'index.html'), html);
console.log('生成完成：', systems.length, '套 →', path.join(SITE,'index.html'));
console.log('manifest →', path.join(ROOT,'manifest.json'));
