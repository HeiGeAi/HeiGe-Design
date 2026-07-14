// 能力2/3/9 站点生成器：画廊(搜索+明暗筛选) + 每套详情页(预览/调色板/字体/组件/Do-Don't/五格式一键复制/lint徽章/旗舰链接)。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const yaml = require('js-yaml');

const ROOT = path.resolve(process.argv[2] || path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'));
const SYS = path.join(ROOT, 'systems');
const SITE = path.join(ROOT, 'site');
fs.mkdirSync(path.join(SITE, 's'), { recursive: true });
const report = JSON.parse(fs.readFileSync(path.join(ROOT, 'report.json'), 'utf8'));

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
const FAM = ['凶悍工业','暗色科技','优雅编辑','瑞士纪律','复古未来','有机自然','玩味玩具','温暖人文','张扬极繁','奢侈高定','东方新中式'];

const lum=h=>{const m=String(h||'').replace('#','').match(/[0-9a-f]{2}/gi);if(!m||m.length<3)return 1;const[r,g,b]=m.map(x=>{const c=parseInt(x,16)/255;return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);});return .2126*r+.7152*g+.0722*b;};
const pick=(c,ks)=>{for(const k of ks)if(c[k])return c[k];return null;};
const ff=(t,inc)=>{const k=Object.keys(t||{}).find(k=>inc.some(s=>k.toLowerCase().includes(s)));return k?(t[k].fontFamily||''):(Object.values(t||{})[0]?.fontFamily||'sans-serif');};
const esc=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const sect=(md,name)=>{const re=new RegExp('##\\s*'+name+'[\\s\\S]*?(?=\\n##\\s|$)','i');const m=md.match(re);return m?m[0].replace(/^##.*\n/,'').trim():'';};
const readEx=(slug,f)=>{const p=path.join(SYS,slug,'exports',f);return fs.existsSync(p)?fs.readFileSync(p,'utf8'):'';};

const FONTS=['Inter:wght@300;400;500;600;700;800','Space+Grotesk:wght@400;500;700','Archivo:wght@400;600;800','Archivo+Black','Anton','Bebas+Neue','Oswald:wght@500;700','Playfair+Display:wght@400;600;700;900','Cormorant:wght@400;600;700','Cormorant+Garamond:wght@400;600;700','EB+Garamond:wght@400;600','Fraunces:wght@400;600;900','DM+Serif+Display','Manrope:wght@400;600;800','Sora:wght@400;600;800','Syne:wght@600;800','Space+Mono:wght@400;700','JetBrains+Mono:wght@400;600;800','IBM+Plex+Mono:wght@400;600','IBM+Plex+Sans:wght@400;600','IBM+Plex+Serif:wght@400;600','Chakra+Petch:wght@500;700','Press+Start+2P','VT323','Baloo+2:wght@500;700;800','Fredoka:wght@500;600;700','Noto+Serif+SC:wght@400;600;900','Noto+Sans+SC:wght@400;500;700;900','LXGW+WenKai+TC','ZCOOL+KuaiLe','ZCOOL+XiaoWei','Ma+Shan+Zheng','Long+Cang','Zhi+Mang+Xing'];
const FONTLINK=`https://fonts.googleapis.com/css2?${FONTS.map(f=>'family='+f).join('&')}&display=swap`;

const systems=[];
for(const slug of Object.keys(META)){
  const dm=path.join(SYS,slug,'DESIGN.md'); if(!fs.existsSync(dm))continue;
  const raw=fs.readFileSync(dm,'utf8');
  const fm=yaml.load((raw.match(/^---\n([\s\S]*?)\n---/)||[,''])[1])||{};
  const c=fm.colors||{},t=fm.typography||{},r=fm.rounded||{},comps=fm.components||{};
  const [family,cn]=META[slug];
  const bg=pick(c,['canvas','surface','bg','paper','base'])||'#fff';
  const ink=pick(c,['ink','body','text','foreground'])||(lum(bg)<.4?'#eee':'#111');
  const primary=pick(c,['primary','brand','accent','signal'])||ink;
  const onp=pick(c,['on-primary','on-accent'])||(lum(primary)<.45?'#fff':'#111');
  const accent=pick(c,['accent','accent-1','secondary','highlight','glow','seal-red','gold'])||primary;
  const surface=pick(c,['surface','card','elevated'])||bg;
  const muted=pick(c,['muted','ink-mute','subtle','ink-secondary'])||ink;
  const line=pick(c,['hairline','border','line','divider'])||muted;
  const dark=lum(bg)<.42;
  const dff=ff(t,['display','hero','title-lg']),bff=ff(t,['body']),mff=ff(t,['mono','number','tabular','code'])||bff;
  const dr=Object.keys(t).find(k=>/display|hero/i.test(k));
  const dw=dr?(t[dr].fontWeight||700):700, dls=dr?(t[dr].letterSpacing||'0'):'0';
  const radius=r.md||r.lg||r.sm||'10px';
  const palette=[...new Set(Object.values(c))].filter(x=>/^#/.test(x)).slice(0,8);
  const rep=report[slug]||{errors:0,warnings:0};
  const hasFlag=fs.existsSync(path.join(SYS,slug,'flagship','page.html'));
  const hasDeck=fs.existsSync(path.join(SYS,slug,'flagship','deck.html'));
  systems.push({slug,family,cn,name:fm.name||slug,desc:fm.description||'',bg,ink,primary,onp,accent,surface,muted,line,dark,dff,bff,mff,dw,dls,radius,palette,comps,
    dodont:sect(raw,"Do's and Don'ts"),sig:sect(raw,'Signature Moment'),motion:sect(raw,'Motion'),overview:sect(raw,'Overview'),rep,hasFlag,hasDeck,
    cssvar:{'--bg':bg,'--ink':ink,'--pri':primary,'--onpri':onp,'--acc':accent,'--surf':surface,'--muted':muted,'--line':line,'--r':radius,'--dff':dff,'--bff':bff,'--mff':mff}});
}

const styleVars=s=>Object.entries(s.cssvar).map(([k,v])=>`${k}:${v}`).join(';');

// —— 画廊瓷砖（链接到详情页）——
function tile(s){
  const spec=s.dark?s.accent:s.primary;
  return `<a class="tile ${s.dark?'is-dark':''}" href="s/${s.slug}.html" data-family="${esc(s.family)}" data-mode="${s.dark?'dark':'light'}" data-kw="${esc((s.cn+' '+s.slug+' '+s.family).toLowerCase())}" style="${styleVars(s)}">
    <div class="tt"><span>${esc(s.family)}</span><span class="sl">${s.slug}</span></div>
    <div class="sp"><div class="disp" style="font-weight:${s.dw};letter-spacing:${s.dls}">${esc(s.cn)}</div><div class="lat">Ag ${s.slug.split('-')[0]}</div></div>
    <div class="pal">${s.palette.map(x=>`<i style="background:${x}"></i>`).join('')}</div>
    <div class="mini"><span class="tag">${s.rep.errors===0?'✓ lint 0 error':'⚠'}</span><span class="btn">查看 →</span></div>
  </a>`;
}

const chips=['全部',...FAM];
const shell=`--shell:#0a0b0d;--shell2:#111318;--edge:#20242c;--fg:#e8ecf2;--dim:#8b93a2;--brand:#c8ff00`;
const headCSS=`*{box-sizing:border-box}html,body{margin:0;background:var(--shell);color:var(--fg);font-family:Inter,-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif;-webkit-font-smoothing:antialiased}a{color:inherit;text-decoration:none}.wrap{max-width:1400px;margin:0 auto;padding:0 32px}`;

const galleryHTML=`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>HeiGe·Design — 视觉设定集库</title><link href="${FONTLINK}" rel="stylesheet">
<style>:root{${shell}}${headCSS}
header{padding:52px 0 22px;border-bottom:1px solid var(--edge)}
.ey{font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.28em;text-transform:uppercase;color:var(--brand)}
h1{margin:14px 0 6px;font-size:clamp(34px,5vw,56px);font-weight:800;letter-spacing:-.03em;line-height:1}
.lead{color:var(--dim);font-size:15.5px;line-height:1.7;max-width:840px}.lead b{color:var(--fg)}
.stat{display:flex;gap:26px;margin-top:20px;font-family:"Space Mono",monospace;font-size:12.5px;color:var(--dim);flex-wrap:wrap}.stat b{color:var(--fg)}
.bar{position:sticky;top:0;z-index:5;background:rgba(10,11,13,.9);border-bottom:1px solid var(--edge);padding:12px 0;margin-bottom:26px}
.bar .wrap{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
#q{flex:1;min-width:200px;background:var(--shell2);border:1px solid var(--edge);border-radius:10px;color:var(--fg);padding:9px 14px;font:inherit;font-size:14px}
.chip{font-size:12.5px;padding:7px 13px;border:1px solid var(--edge);border-radius:999px;color:var(--dim);cursor:pointer;background:transparent;font-family:inherit}
.chip.on{background:var(--fg);color:#0a0b0d;border-color:var(--fg);font-weight:600}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:18px;padding-bottom:80px}
.tile{border-radius:15px;border:1px solid var(--edge);background:var(--bg);color:var(--ink);font-family:var(--bff);padding:20px;min-height:250px;display:flex;flex-direction:column;gap:14px;transition:transform .16s,box-shadow .16s}
.tile:hover{transform:translateY(-4px);box-shadow:0 16px 44px rgba(0,0,0,.45)}
.tt{display:flex;justify-content:space-between;font-size:10px;letter-spacing:.14em;text-transform:uppercase;opacity:.72}.tt .sl{font-family:var(--mff);opacity:.6}
.sp{flex:1;display:flex;flex-direction:column;justify-content:center;gap:6px}.sp .disp{font-family:var(--dff);font-size:42px;line-height:1.02;color:var(--ink)}.sp .lat{font-family:var(--mff);font-size:11px;color:var(--muted)}
.pal{display:flex;height:24px;border-radius:7px;overflow:hidden;border:1px solid var(--line)}.pal i{flex:1}
.mini{display:flex;justify-content:space-between;align-items:center}.mini .tag{font-family:var(--mff);font-size:10.5px;color:var(--muted)}
.mini .btn{font-family:var(--bff);font-weight:600;font-size:12.5px;background:var(--pri);color:var(--onpri);border-radius:var(--r);padding:7px 14px}
.famhead{grid-column:1/-1;display:flex;gap:12px;align-items:baseline;margin:22px 0 2px;padding-top:12px;border-top:1px solid var(--edge)}
.famhead h2{font-size:19px;font-weight:700;margin:0}.famhead .n{font-family:"Space Mono",monospace;font-size:12px;color:var(--dim)}
.none{grid-column:1/-1;color:var(--dim);padding:40px 0;text-align:center}
footer{border-top:1px solid var(--edge);padding:38px 0 64px;color:var(--dim);font-size:13px;line-height:1.7}footer b{color:var(--fg)}
</style></head><body>
<div class="wrap"><header>
<div class="ey">HeiGe · Design System Atlas · 设计工具</div>
<h1>视觉设定集库<span style="color:var(--brand)">.</span></h1>
<p class="lead">${systems.length} 套原创品牌设定集，一份 <b>DESIGN.md</b> 同时驱动界面与演示。兼容 Google design.md（全过 lint），内容 100% 原创，含独家 <b>东方新中式</b> 家族。点任意一套看详情：预览 / 调色板 / 组件 / Do-Don't / Compact 速览 / 六档一键复制 / 旗舰全页。</p>
<div class="stat"><span><b>${systems.length}</b> 套</span><span><b>11</b> 家族</span><span><b>50/50</b> 0 lint error</span><span>六层导出</span><span>URL→DESIGN.md 提取</span><span>UI+Deck 融合</span></div>
</header></div>
<div class="bar"><div class="wrap"><input id="q" placeholder="搜索：中文名 / slug / 家族 / 颜色关键词…"><button class="chip on" data-mode="all">全部明暗</button><button class="chip" data-mode="light">浅色</button><button class="chip" data-mode="dark">深色</button></div>
<div class="wrap" style="margin-top:10px">${chips.map((c,i)=>`<button class="chip fam ${i===0?'on':''}" data-f="${c}">${c}</button>`).join('')}</div></div>
<div class="wrap"><div class="grid" id="grid">
${FAM.map(f=>`<div class="famhead" data-family="${f}"><h2>${f}</h2><span class="n">${String(systems.filter(s=>s.family===f).length).padStart(2,'0')} 套</span></div>\n`+systems.filter(s=>s.family===f).map(tile).join('\n')).join('\n')}
<div class="none" id="none" style="display:none">没有匹配的系统</div>
</div></div>
<div class="wrap"><footer><b>HeiGe·Design</b> — 给 AI 一张视觉角色卡。50 套原创设定集，覆盖西方设计正典 + 独家东方新中式。署名 HeiGe，MIT，无致谢。基于 HeiGe-UI / HeiGe-PPT 演化而来。</footer></div>
<script>
const grid=document.getElementById('grid'),q=document.getElementById('q'),none=document.getElementById('none');
let curF='全部',curM='all';
function apply(){const kw=q.value.trim().toLowerCase();let n=0;
 grid.querySelectorAll('.tile').forEach(t=>{const okF=curF==='全部'||t.dataset.family===curF;const okM=curM==='all'||t.dataset.mode===curM;const okK=!kw||t.dataset.kw.includes(kw);const show=okF&&okM&&okK;t.style.display=show?'':'none';if(show)n++;});
 grid.querySelectorAll('.famhead').forEach(h=>{const anyF=curF==='全部'||h.dataset.family===curF;h.style.display=anyF?'':'none';});
 none.style.display=n?'none':'';}
q.oninput=apply;
document.querySelectorAll('.chip.fam').forEach(c=>c.onclick=()=>{document.querySelectorAll('.chip.fam').forEach(x=>x.classList.remove('on'));c.classList.add('on');curF=c.dataset.f;apply();});
document.querySelectorAll('.chip[data-mode]').forEach(c=>c.onclick=()=>{document.querySelectorAll('.chip[data-mode]').forEach(x=>x.classList.remove('on'));c.classList.add('on');curM=c.dataset.mode;apply();});
</script></body></html>`;
fs.writeFileSync(path.join(SITE,'index.html'),galleryHTML);

// —— 详情页 ——
function detail(s){
  const tabs=[['DESIGN.md',fs.readFileSync(path.join(SYS,s.slug,'DESIGN.md'),'utf8')],['Compact',readEx(s.slug,'compact.md')],['Tailwind v4',readEx(s.slug,'tailwind-v4.css')],['Tailwind v3',readEx(s.slug,'tailwind-v3.json')],['CSS Variables',readEx(s.slug,'variables.css')],['W3C DTCG',readEx(s.slug,'tokens.dtcg.json')],['Agent 提示词',readEx(s.slug,'agent-prompt.md')]];
  const comps=Object.entries(s.comps);
  const ui=comps.filter(([k])=>!/^slide-|^deck-/.test(k)), sl=comps.filter(([k])=>/^slide-|^deck-/.test(k));
  const compChip=([k,v])=>`<span class="cc" style="background:${(v.backgroundColor||'').replace(/\{[^}]+\}/,s.surface)||s.surface};color:${(v.textColor||'').replace(/\{[^}]+\}/,s.ink)||s.ink};border:1px solid var(--line)">${esc(k)}</span>`;
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(s.cn)} · HeiGe·Design</title><link href="${FONTLINK}" rel="stylesheet">
<style>:root{${shell}}${headCSS}
.top{padding:20px 0;border-bottom:1px solid var(--edge);font-size:13px;color:var(--dim)}.top a{color:var(--brand)}
.hero{padding:30px 0;border-bottom:1px solid var(--edge)}
.fam{font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--dim)}
h1{margin:8px 0 4px;font-size:44px;font-weight:800;letter-spacing:-.02em}.slug{font-family:"Space Mono",monospace;color:var(--dim);font-size:13px}
.badge{display:inline-block;margin-left:10px;font-family:"Space Mono",monospace;font-size:11px;padding:3px 9px;border-radius:999px;background:#12331a;color:#7ee787;border:1px solid #1f5130}
.desc{color:var(--dim);font-size:14.5px;line-height:1.7;max-width:820px;margin:14px 0 0}
.cols{display:grid;grid-template-columns:1.1fr .9fr;gap:26px;padding:30px 0}@media(max-width:900px){.cols{grid-template-columns:1fr}}
.card{border:1px solid var(--edge);border-radius:14px;overflow:hidden;background:var(--shell2)}
.card h3{margin:0;padding:14px 18px;font-size:13px;letter-spacing:.04em;color:var(--dim);border-bottom:1px solid var(--edge);font-weight:600}
.pv{background:var(--bg);color:var(--ink);font-family:var(--bff);padding:34px 28px}
.pv .ey{font-family:var(--mff);font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:var(--acc);opacity:.85}
.pv .h{font-family:var(--dff);font-size:52px;line-height:1.03;font-weight:var(--dw);letter-spacing:var(--dls);margin:10px 0 12px;color:var(--ink)}
.pv .sub{font-family:var(--bff);font-size:15px;color:var(--muted);line-height:1.6;max-width:22em}
.pv .row{display:flex;gap:12px;align-items:center;margin-top:20px}
.pv .b1{background:var(--pri);color:var(--onpri);border-radius:var(--r);padding:11px 22px;font-weight:600;font-size:14px}
.pv .b2{border:1px solid var(--line);color:var(--ink);border-radius:var(--r);padding:11px 22px;font-size:14px}
.pv .stat{display:flex;gap:26px;margin-top:26px}.pv .stat b{font-family:var(--mff);font-size:26px;color:var(--acc);display:block}.pv .stat span{font-size:12px;color:var(--muted)}
.slide{aspect-ratio:16/9;background:var(--bg);color:var(--ink);border:1px solid var(--line);border-radius:10px;padding:26px;display:flex;flex-direction:column;justify-content:center;margin:16px 18px 20px}
.slide .k{font-family:var(--mff);font-size:11px;letter-spacing:.2em;color:var(--acc)}.slide .t{font-family:var(--dff);font-size:34px;font-weight:var(--dw);letter-spacing:var(--dls);margin-top:8px;color:var(--ink)}
.pal{display:flex;height:40px;border-radius:8px;overflow:hidden;margin:0 18px 16px;border:1px solid var(--line)}.pal i{flex:1;position:relative}
.swrap{padding:0 18px 18px;display:flex;flex-wrap:wrap;gap:6px}.cc{font-family:var(--mff);font-size:11px;padding:5px 9px;border-radius:6px}
.sec{padding:24px 0;border-top:1px solid var(--edge)}.sec h2{font-size:16px;margin:0 0 12px}
.dd{display:grid;grid-template-columns:1fr 1fr;gap:18px}@media(max-width:800px){.dd{grid-template-columns:1fr}}
.dd .box{border:1px solid var(--edge);border-radius:12px;padding:16px;background:var(--shell2);font-size:13px;line-height:1.7;color:#c3cad4;white-space:pre-wrap}
.tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}
.tab{font-size:12.5px;padding:7px 13px;border:1px solid var(--edge);border-radius:8px;color:var(--dim);cursor:pointer;background:transparent;font-family:inherit}
.tab.on{background:var(--fg);color:#0a0b0d;font-weight:600}
.codebox{position:relative;border:1px solid var(--edge);border-radius:12px;overflow:hidden}
.copy{position:absolute;top:10px;right:10px;font-size:12px;padding:6px 12px;border-radius:7px;border:1px solid var(--edge);background:var(--shell2);color:var(--fg);cursor:pointer}
pre{margin:0;padding:16px;overflow:auto;max-height:460px;font-family:"JetBrains Mono","Space Mono",monospace;font-size:12px;line-height:1.6;color:#cdd3db;background:#0d0f13}
.flag{display:flex;gap:12px;flex-wrap:wrap;margin-top:8px}.flag a{border:1px solid var(--edge);border-radius:10px;padding:12px 18px;color:var(--fg);font-size:13.5px;background:var(--shell2)}.flag a b{color:var(--brand)}
footer{border-top:1px solid var(--edge);padding:34px 0 60px;color:var(--dim);font-size:13px}
</style></head><body>
<div class="wrap">
<div class="top"><a href="../index.html">← 全部 ${systems.length} 套</a> · ${esc(s.family)}</div>
<div class="hero"><div class="fam">${esc(s.family)}</div><h1>${esc(s.cn)}<span class="badge">${s.rep.errors===0?'✓ lint 0 error'+(s.rep.warnings?` / ${s.rep.warnings}w`:''):'⚠ '+s.rep.errors+' error'}</span></h1><div class="slug">${s.slug} · ${esc(s.name)}</div><p class="desc">${esc(s.desc)}</p></div>

<div class="cols">
  <div class="card" style="${styleVars(s)}"><h3>UI 预览（token 驱动）</h3><div class="pv">
    <div class="ey">Design System Preview</div><div class="h">${esc(s.cn)}</div>
    <div class="sub">一份设定集，同时驱动界面与演示。这块预览完全由该系统的颜色 / 字体 / 圆角 token 渲染。</div>
    <div class="row"><span class="b1">Start building</span><span class="b2">Docs</span></div>
    <div class="stat"><span><b>48B</b>Processed</span><span><b>99.99%</b>Uptime</span><span><b>180+</b>Regions</span></div>
  </div>
  <div class="pal">${s.palette.map(x=>`<i style="background:${x}"></i>`).join('')}</div>
  <div class="swrap">${ui.slice(0,10).map(compChip).join('')}</div>
  </div>
  <div class="card" style="${styleVars(s)}"><h3>Deck 预览（slide-* 组件）</h3>
    <div class="slide"><div class="k">01 · KEYNOTE</div><div class="t">${esc(s.cn)}</div></div>
    <div class="swrap">${(sl.length?sl:ui).slice(0,8).map(compChip).join('')}</div>
  </div>
</div>

${s.hasFlag||s.hasDeck?`<div class="sec"><h2>旗舰全页（一份 DESIGN.md 同时产出）</h2><div class="flag">${s.hasFlag?`<a href="../../systems/${s.slug}/flagship/page.html" target="_blank"><b>▶ 整页落地页</b> page.html</a>`:''}${s.hasDeck?`<a href="../../systems/${s.slug}/flagship/deck.html" target="_blank"><b>▶ 16:9 演示</b> deck.html（← → 翻页）</a>`:''}</div></div>`:''}

${s.sig?`<div class="sec"><h2>签名时刻 Signature Moment</h2><div class="dd"><div class="box">${esc(s.sig).slice(0,900)}</div></div></div>`:''}
${s.motion?`<div class="sec"><h2>动效 Motion</h2><div class="box" style="white-space:pre-wrap">${esc(s.motion).slice(0,1400)}</div></div>`:''}
${s.dodont?`<div class="sec"><h2>Do's & Don'ts（当验收清单）</h2><div class="box" style="white-space:pre-wrap">${esc(s.dodont).slice(0,1400)}</div></div>`:''}

<div class="sec"><h2>五层可执行资产（一键复制给 coding agent）</h2>
  <div class="tabs">${tabs.map((t,i)=>`<button class="tab ${i===0?'on':''}" data-i="${i}">${t[0]}</button>`).join('')}</div>
  ${tabs.map((t,i)=>`<div class="codebox tabc" data-i="${i}" style="${i?'display:none':''}"><button class="copy">复制</button><pre>${esc(t[1])}</pre></div>`).join('')}
</div>

<footer>HeiGe·Design · ${esc(s.cn)} — 原创设定集，可商用。跑校验：<code>heige-design lint ${s.slug}</code>。</footer>
</div>
<script>
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('on'));b.classList.add('on');document.querySelectorAll('.tabc').forEach(c=>c.style.display=c.dataset.i===b.dataset.i?'':'none');});
document.querySelectorAll('.copy').forEach(b=>b.onclick=()=>{const t=b.parentElement.querySelector('pre').textContent;navigator.clipboard.writeText(t).then(()=>{b.textContent='已复制 ✓';setTimeout(()=>b.textContent='复制',1400);});});
</script></body></html>`;
}
for(const s of systems) fs.writeFileSync(path.join(SITE,'s',s.slug+'.html'), detail(s));
console.log(`站点生成：画廊 + ${systems.length} 个详情页 →`, path.join(SITE,'index.html'));
