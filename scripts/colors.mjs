const toHex = (r,g,b)=>'#'+[r,g,b].map(x=>Math.max(0,Math.min(255,x|0)).toString(16).padStart(2,'0')).join('');
function parseColor(s){
  const hex = String(s).match(/^#([a-f0-9]{6}|[a-f0-9]{3})$/i);
  if (hex) {
    const h = hex[1].length === 3 ? [...hex[1]].map(c=>c+c).join('') : hex[1];
    const [r,g,b] = [0,2,4].map(i=>parseInt(h.slice(i,i+2),16));
    return {r,g,b,hex:toHex(r,g,b)};
  }
  const m=String(s).match(/rgba?\(([^)]+)\)/); if(!m) return null;
  const p=m[1].split(',').map(x=>parseFloat(x)); if(p.length<3||p.slice(0,3).some(x=>!Number.isFinite(x))) return null; if(p.length>=4&&p[3]===0) return null; return {r:p[0],g:p[1],b:p[2],hex:toHex(p[0],p[1],p[2])}; }
function lum({r,g,b}){ if (![r,g,b].every(Number.isFinite)) throw new TypeError('RGB channels must be finite'); const f=c=>{c/=255;return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);}; return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b); }
function sat({r,g,b}){ const mx=Math.max(r,g,b)/255,mn=Math.min(r,g,b)/255; return mx===0?0:(mx-mn)/mx; }
function contrast(a,b){ const L1=lum(a),L2=lum(b); return (Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05); }

export { parseColor, lum, sat, contrast };
