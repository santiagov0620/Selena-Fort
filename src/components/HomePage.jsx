import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { PROJECTS } from '../data/projects.js'
import TableObject from './TableObject.jsx'

/* ══════════════════════════════════════════
   SVG WOOD GRAIN — feTurbulence + scratches
══════════════════════════════════════════ */
function WoodGrainTexture() {
  return (
    <>
      {/* Primary grain layer */}
      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', display:'block', borderRadius:4 }} aria-hidden="true">
        <defs>
          <filter id="wg" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.0032 0.12" numOctaves="6" seed="22" result="noise"/>
            <feColorMatrix type="matrix"
              values="0.38 0 0 0 0.040
                      0.24 0 0 0 0.020
                      0.10 0 0 0 0.008
                      0    0 0 1 0"
              in="noise"/>
          </filter>
          <filter id="wg2" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.0012 0.003" numOctaves="3" seed="9" result="planks"/>
            <feColorMatrix type="matrix"
              values="0.10 0 0 0 0
                      0.06 0 0 0 0
                      0.02 0 0 0 0
                      0    0 0 0.65 0"
              in="planks"/>
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#wg)" rx="4"/>
        <rect width="100%" height="100%" filter="url(#wg2)" rx="4" style={{ mixBlendMode:'multiply' }}/>
        {/* Plank division grooves */}
        <line x1="0" y1="34%" x2="100%" y2="33.4%" stroke="rgba(0,0,0,0.09)" strokeWidth="2"/>
        <line x1="0" y1="67%" x2="100%" y2="66.5%" stroke="rgba(0,0,0,0.07)" strokeWidth="1.5"/>
        {/* Surface scratches */}
        <line x1="6%"  y1="19%"  x2="41%" y2="18.4%"  stroke="rgba(255,200,120,0.045)" strokeWidth="0.8"/>
        <line x1="24%" y1="44%"  x2="58%" y2="43.1%"  stroke="rgba(0,0,0,0.07)"        strokeWidth="1.1"/>
        <line x1="58%" y1="14%"  x2="96%" y2="13.2%"  stroke="rgba(255,200,120,0.035)" strokeWidth="0.7"/>
        <line x1="12%" y1="73%"  x2="50%" y2="72.2%"  stroke="rgba(0,0,0,0.065)"       strokeWidth="0.9"/>
        <line x1="72%" y1="58%"  x2="99%" y2="57.6%"  stroke="rgba(255,200,120,0.030)" strokeWidth="0.6"/>
        <line x1="3%"  y1="87%"  x2="35%" y2="86.5%"  stroke="rgba(0,0,0,0.055)"       strokeWidth="0.8"/>
        {/* Dark knot area */}
        <ellipse cx="62%" cy="28%" rx="3.5%" ry="2.8%" fill="rgba(0,0,0,0.11)" style={{ mixBlendMode:'multiply' }}/>
        <ellipse cx="62%" cy="28%" rx="1.5%" ry="1.2%" fill="rgba(0,0,0,0.18)" style={{ mixBlendMode:'multiply' }}/>
        {/* Water ring stain */}
        <ellipse cx="46%" cy="41%" rx="2.8%" ry="2.2%" fill="none" stroke="rgba(80,45,10,0.14)" strokeWidth="1.5"/>
        <ellipse cx="46%" cy="41%" rx="2.4%" ry="1.9%" fill="none" stroke="rgba(80,45,10,0.08)" strokeWidth="0.8"/>
      </svg>
    </>
  )
}

/* ══════════════════════════════════════════
   DARKROOM SAFELIGHT LANTERN
══════════════════════════════════════════ */
function DarkroomLantern({ style }) {
  return (
    <div style={{ width: 130, pointerEvents:'none', filter:'drop-shadow(0 0 45px rgba(200,25,4,0.90)) drop-shadow(0 14px 28px rgba(0,0,0,0.98))', ...style }}>
      <svg viewBox="0 0 100 145" fill="none">
        <defs>
          <radialGradient id="globeGlow" cx="42%" cy="38%" r="60%">
            <stop offset="0%"   stopColor="rgba(255,130,20,0.95)"/>
            <stop offset="30%"  stopColor="rgba(220,50,8,0.80)"/>
            <stop offset="70%"  stopColor="rgba(160,18,4,0.55)"/>
            <stop offset="100%" stopColor="rgba(80,8,2,0.20)"/>
          </radialGradient>
          <radialGradient id="globeBody" cx="38%" cy="32%" r="68%">
            <stop offset="0%"   stopColor="#7a1c08"/>
            <stop offset="45%"  stopColor="#4a0e04"/>
            <stop offset="100%" stopColor="#1e0602"/>
          </radialGradient>
          <radialGradient id="baseGrad" cx="50%" cy="0%" r="100%">
            <stop offset="0%"   stopColor="#2a1a0c"/>
            <stop offset="100%" stopColor="#100a04"/>
          </radialGradient>
        </defs>

        {/* ambient corona behind globe */}
        <ellipse cx="50" cy="72" rx="62" ry="78" fill="rgba(190,22,4,0.18)"/>
        <ellipse cx="50" cy="72" rx="44" ry="58" fill="rgba(220,30,6,0.10)"/>

        {/* base platform */}
        <ellipse cx="50" cy="132" rx="34" ry="9"  fill="#0e0804"/>
        <rect x="20" y="122" width="60" height="14" rx="5" fill="url(#baseGrad)"/>
        <rect x="24" y="120" width="52" height="6"  rx="3" fill="#2a1a0c"/>

        {/* stem */}
        <rect x="43" y="100" width="14" height="26" fill="#201408"/>
        <rect x="45" y="100" width="10" height="26" fill="#281a0c"/>

        {/* lower collar */}
        <ellipse cx="50" cy="102" rx="28" ry="8"  fill="#241808"/>
        <ellipse cx="50" cy="100" rx="24" ry="6"  fill="#2e2010"/>

        {/* globe body */}
        <ellipse cx="50" cy="62" rx="38" ry="46"  fill="url(#globeBody)"/>
        {/* glow fill */}
        <ellipse cx="50" cy="62" rx="34" ry="41"  fill="url(#globeGlow)" opacity="0.85"/>

        {/* glass ribbing */}
        {[30,42,54,66,76,86].map(y => {
          const hw = 34 - Math.abs(y - 62) * 0.32
          return <ellipse key={y} cx="50" cy={y} rx={hw} ry="3.5" fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="1.8"/>
        })}

        {/* glass highlight */}
        <ellipse cx="36" cy="42" rx="13" ry="18" fill="rgba(255,190,80,0.14)" transform="rotate(-18 36 42)"/>
        <ellipse cx="32" cy="38" rx="6"  ry="9"  fill="rgba(255,220,140,0.09)" transform="rotate(-18 32 38)"/>

        {/* upper collar */}
        <ellipse cx="50" cy="22" rx="24" ry="7"  fill="#201408"/>
        <ellipse cx="50" cy="20" rx="18" ry="5"  fill="#2e1c0c"/>

        {/* chimney */}
        <rect x="41" y="4" width="18" height="20" rx="4" fill="#180e06"/>
        <ellipse cx="50" cy="4"  rx="10" ry="3.5" fill="#241808"/>
        {/* glow escaping top */}
        <ellipse cx="50" cy="5"  rx="7"  ry="2.5" fill="rgba(255,100,20,0.35)"/>
        <ellipse cx="50" cy="5"  rx="4"  ry="1.5" fill="rgba(255,160,40,0.50)"/>

        {/* handle loops */}
        <path d="M18 55 Q8 55 8 45 Q8 35 18 35" stroke="#2a1a0c" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M82 55 Q92 55 92 45 Q92 35 82 35" stroke="#2a1a0c" strokeWidth="4" fill="none" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

/* ══════════════════════════════════════════
   COMPASS
══════════════════════════════════════════ */
function Compass({ style }) {
  return (
    <div style={{ width:64, pointerEvents:'none', filter:'drop-shadow(2px 6px 12px rgba(0,0,0,0.95))', ...style }}>
      <svg viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="27" fill="#161008" stroke="#3a2c18" strokeWidth="3"/>
        <circle cx="30" cy="30" r="22" fill="#120e06"/>
        <circle cx="30" cy="30" r="20" fill="rgba(50,32,8,0.4)"/>
        {Array.from({length:12},(_,i)=>{
          const a=(i/12)*Math.PI*2-Math.PI/2
          const r1=i%3===0?14:17
          return <line key={i} x1={30+r1*Math.cos(a)} y1={30+r1*Math.sin(a)} x2={30+20*Math.cos(a)} y2={30+20*Math.sin(a)} stroke={i%3===0?'#9a7832':'#4a3416'} strokeWidth={i%3===0?1.6:0.9}/>
        })}
        <text x="30" y="13" textAnchor="middle" fontSize="6" fill="#b89040" fontFamily="monospace">N</text>
        <text x="30" y="50" textAnchor="middle" fontSize="5" fill="#5a3c18" fontFamily="monospace">S</text>
        <polygon points="30,14 27.5,30 30,28 32.5,30" fill="#c01808"/>
        <polygon points="30,46 27.5,30 30,32 32.5,30" fill="#4a3020"/>
        <circle cx="30" cy="30" r="2.5" fill="#7a5828"/>
        <ellipse cx="22" cy="20" rx="8" ry="5" fill="rgba(255,255,255,0.055)" transform="rotate(-30 22 20)"/>
      </svg>
    </div>
  )
}

/* ══════════════════════════════════════════
   PROPS — camera, film, canisters, etc
══════════════════════════════════════════ */
function VintageCamera({ style }) {
  return (
    <div style={{ width:260, pointerEvents:'none', filter:'drop-shadow(5px 20px 44px rgba(0,0,0,0.99)) drop-shadow(0 4px 10px rgba(0,0,0,0.85))', ...style }}>
      <svg viewBox="0 0 210 138" fill="none">
        <defs>
          <pattern id="leath" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M0 6L6 0M-1 1L1-1M5 7L7 5" stroke="rgba(0,0,0,0.35)" strokeWidth="0.7"/>
          </pattern>
          <radialGradient id="lensGlow" cx="38%" cy="32%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.09)"/>
            <stop offset="100%" stopColor="rgba(0,0,0,0)"/>
          </radialGradient>
        </defs>
        <rect x="0"   y="48" width="8"  height="22" rx="2" fill="#1c1810"/>
        <rect x="202" y="48" width="8"  height="22" rx="2" fill="#1c1810"/>
        <rect x="6" y="18" width="198" height="18" rx="4" fill="#232016"/>
        <rect x="8" y="20" width="194" height="14" rx="3" fill="#2a2418"/>
        <rect x="12" y="4"  width="30" height="22" rx="4" fill="#1e1c12"/>
        <rect x="16" y="8"  width="22" height="14" rx="2" fill="#141210"/>
        {[16,22,28,34].map(x=><line key={x} x1={x} y1="8" x2={x} y2="22" stroke="#2a2620" strokeWidth="1.2"/>)}
        <rect x="168" y="4"  width="30" height="22" rx="4" fill="#1e1c12"/>
        <rect x="172" y="8"  width="22" height="14" rx="2" fill="#141210"/>
        <circle cx="148" cy="22" r="8"  fill="#242018"/>
        <circle cx="148" cy="22" r="5"  fill="#2e2820"/>
        <circle cx="148" cy="20" r="2"  fill="#3a3428"/>
        <rect x="88" y="18" width="54" height="6" rx="1" fill="#1c1810" stroke="#2a2418" strokeWidth="0.5"/>
        <rect x="6" y="34" width="198" height="92" rx="7" fill="#1a1812"/>
        <rect x="6" y="34" width="198" height="92" rx="7" fill="url(#leath)" opacity="0.45"/>
        <circle cx="88" cy="82" r="46" fill="#100e0c"/>
        <circle cx="88" cy="82" r="42" fill="#0c0a08"/>
        {Array.from({length:24},(_,i)=>{const a=(i/24)*Math.PI*2;return <line key={i} x1={88+39*Math.cos(a)} y1={82+39*Math.sin(a)} x2={88+43*Math.cos(a)} y2={82+43*Math.sin(a)} stroke="#2e2618" strokeWidth="1.6"/>})}
        <circle cx="88" cy="82" r="36" fill="#080604"/>
        <circle cx="88" cy="82" r="28" fill="#060402"/>
        <circle cx="88" cy="82" r="20" fill="#040302"/>
        <circle cx="88" cy="82" r="13" fill="#030201"/>
        <circle cx="88" cy="82" r="12" fill="url(#lensGlow)"/>
        <ellipse cx="80" cy="74" rx="7" ry="4" fill="rgba(255,255,255,0.06)" transform="rotate(-28 80 74)"/>
        <circle cx="88" cy="82" r="34" fill="none" stroke="#2a2418" strokeWidth="1.5"/>
        <rect x="136" y="42" width="62" height="42" rx="4" fill="#0c0a08" stroke="#282418" strokeWidth="2"/>
        <rect x="140" y="46" width="54" height="34" rx="2" fill="#080c14"/>
        <text x="134" y="108" fontSize="7.5" fill="#2a2418" fontFamily="monospace" letterSpacing="1.5">ARCHIVO  M</text>
        <text x="57"  y="116" fontSize="6.5" fill="#242018" fontFamily="monospace">SUMMICRON  1:2</text>
      </svg>
    </div>
  )
}

function FilmStrip({ width=360, style }) {
  const perf=Math.floor(width/30), frames=Math.floor(width/72)
  return (
    <div style={{ width, pointerEvents:'none', filter:'drop-shadow(2px 7px 16px rgba(0,0,0,0.97))', ...style }}>
      <svg viewBox={`0 0 ${width} 70`} width={width} height={70}>
        <rect width={width} height={70} fill="#0e0b08" rx="2"/>
        {Array.from({length:perf},(_,i)=><rect key={`t${i}`} x={i*30+5} y={4}  width={16} height={12} rx={2.5} fill="#080604"/>)}
        {Array.from({length:perf},(_,i)=><rect key={`b${i}`} x={i*30+5} y={54} width={16} height={12} rx={2.5} fill="#080604"/>)}
        {Array.from({length:frames},(_,i)=><rect key={`f${i}`} x={i*72+4} y={22} width={64} height={26} fill="#0a0806" rx={1}/>)}
        {Array.from({length:7},(_,i)=><line key={`s${i}`} x1={i*(width/7)+22} y1={22} x2={i*(width/7)+16} y2={48} stroke="rgba(255,255,255,0.035)" strokeWidth="0.7"/>)}
        <rect width={width} height={70} fill="rgba(50,8,2,0.25)" rx="2"/>
      </svg>
    </div>
  )
}

function FilmCanister({ color='#b82820', label='400', style }) {
  return (
    <div style={{ position:'relative', width:32, height:62, pointerEvents:'none', filter:'drop-shadow(3px 7px 14px rgba(0,0,0,0.94))', ...style }}>
      <div style={{ position:'absolute', top:-4, left:-3, width:38, height:11, background:'linear-gradient(180deg,#302c20 0%,#1e1a12 100%)', borderRadius:'4px 4px 0 0', boxShadow:'0 1px 4px rgba(0,0,0,0.85)'}}/>
      <div style={{ width:'100%', height:'100%', background:'linear-gradient(90deg,#181410 0%,#2c2820 18%,#38322a 50%,#2c2820 82%,#181410 100%)', borderRadius:'3px', boxShadow:'3px 5px 16px rgba(0,0,0,0.94),inset -2px 0 5px rgba(0,0,0,0.5)', overflow:'hidden', position:'relative' }}>
        <div style={{ position:'absolute', top:12, left:2, right:2, height:28, background:color, opacity:0.70, borderRadius:'2px'}}/>
        <div style={{ position:'absolute', top:19, left:0, right:0, textAlign:'center', fontFamily:'monospace', fontSize:8, color:'white', fontWeight:'bold', opacity:0.88}}>{label}</div>
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:8, background:'rgba(0,0,0,0.42)'}}/>
      </div>
    </div>
  )
}

function MagnifyingLoupe({ style }) {
  return (
    <div style={{ width:68, height:72, pointerEvents:'none', filter:'drop-shadow(3px 7px 14px rgba(0,0,0,0.92))', ...style }}>
      <svg viewBox="0 0 58 62">
        <circle cx="25" cy="25" r="21" fill="#1a1610" stroke="#383020" strokeWidth="3.5"/>
        <circle cx="25" cy="25" r="16" fill="rgba(100,130,150,0.14)"/>
        <circle cx="25" cy="25" r="16" fill="none" stroke="#242018" strokeWidth="1"/>
        <ellipse cx="18" cy="18" rx="6" ry="3.5" fill="rgba(255,255,255,0.09)" transform="rotate(-25 18 18)"/>
        <line x1="40" y1="40" x2="55" y2="55" stroke="#2a2418" strokeWidth="5.5" strokeLinecap="round"/>
        <line x1="40" y1="40" x2="55" y2="55" stroke="#1c1810" strokeWidth="3"   strokeLinecap="round"/>
      </svg>
    </div>
  )
}

function Pencil({ length=140, style }) {
  return (
    <div style={{ width:length, pointerEvents:'none', filter:'drop-shadow(1px 4px 7px rgba(0,0,0,0.85))', ...style }}>
      <svg viewBox={`0 0 ${length} 11`} width={length} height={11}>
        <polygon points={`0,5.5 11,1 11,10`} fill="#c09828"/>
        <polygon points={`3,5.5 11,2.5 11,8.5`} fill="#160a00"/>
        <rect x="11" y="1" width={length-19} height="9" fill="#d4b438"/>
        <rect x="11" y="1" width={length-19} height="3.5" fill="rgba(255,255,255,0.07)"/>
        {Array.from({length:9},(_,i)=><line key={i} x1={14+i*14} y1="1" x2={14+i*14} y2="10" stroke="rgba(0,0,0,0.07)" strokeWidth="0.6"/>)}
        <rect x={length-10} y="1.5" width="4"  height="8" fill="#8a8078" rx="1"/>
        <rect x={length-7}  y="2"   width="7"  height="7" fill="#cc8888" rx="1"/>
      </svg>
    </div>
  )
}

function PaperNote({ lines, style }) {
  return (
    <div style={{ background:'linear-gradient(158deg,#e8d8a0 0%,#deca90 50%,#d4bc84 100%)', padding:'9px 12px 11px', boxShadow:'2px 5px 14px rgba(0,0,0,0.82)', pointerEvents:'none', position:'relative', overflow:'hidden', ...style }}>
      <div style={{ position:'absolute', inset:0, opacity:0.12, backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize:'100px 100px', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:0, right:0, width:40, height:40, background:'radial-gradient(at 100% 100%, rgba(60,30,0,0.18) 0%, transparent 70%)', pointerEvents:'none'}}/>
      {lines.map((l,i)=><div key={i} style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:10.5, color:'#1e1005', lineHeight:1.7, position:'relative'}}>{l}</div>)}
    </div>
  )
}

function LoosePolaroid({ src, rotate=0, style }) {
  return (
    <div style={{ background:'linear-gradient(145deg,#f2ece0,#e8e0d0)', padding:'6px 6px 24px', boxShadow:'3px 6px 20px rgba(0,0,0,0.90)', transform:`rotate(${rotate}deg)`, pointerEvents:'none', ...style }}>
      <div style={{ width:90, height:70, overflow:'hidden', background:'#111', position:'relative' }}>
        {src && <img src={src} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'sepia(22%) contrast(1.10)'}}/>}
        <div style={{ position:'absolute', inset:0, boxShadow:'inset 0 0 8px rgba(0,0,0,0.40)'}}/>
      </div>
    </div>
  )
}

function NegativeStrip({ style }) {
  return (
    <div style={{ pointerEvents:'none', filter:'drop-shadow(2px 9px 20px rgba(0,0,0,0.96))', ...style }}>
      <svg viewBox="0 0 300 55" width={300} height={55}>
        <rect width={300} height={55} fill="#090704" rx="2"/>
        {Array.from({length:10},(_,i)=><rect key={`t${i}`} x={i*30+4} y={3}  width={14} height={9} rx={2} fill="#060402"/>)}
        {Array.from({length:10},(_,i)=><rect key={`b${i}`} x={i*30+4} y={43} width={14} height={9} rx={2} fill="#060402"/>)}
        {[0,1,2,3,4].map(i=><rect key={i} x={i*60+1} y={16} width={56} height={24} fill={`rgba(${50+i*6},${24+i*4},${4+i*2},0.68)`} rx="1"/>)}
        <rect width={300} height={55} fill="rgba(30,8,2,0.30)" rx="2"/>
      </svg>
    </div>
  )
}

/* ══════════════════════════════════════════
   FLOATING DUST MOTES
══════════════════════════════════════════ */
function DustParticles() {
  const pts = useMemo(()=>Array.from({length:30},(_,i)=>({
    id:i, x:Math.random()*100, y:Math.random()*100,
    sz:Math.random()*2.8+0.4, dur:Math.random()*20+12, del:Math.random()*12,
    op:Math.random()*0.28+0.04,
  })),[])
  return (
    <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:4, overflow:'hidden' }}>
      {pts.map(p=>(
        <motion.div key={p.id}
          style={{ position:'absolute', left:`${p.x}%`, top:`${p.y}%`, width:p.sz, height:p.sz, borderRadius:'50%', background:`rgba(210,155,75,${p.op})`}}
          animate={{ y:[0,-56,-12,-70,0], x:[0,12,-8,16,0], opacity:[p.op,p.op*.18,p.op*.6,p.op*.1,p.op]}}
          transition={{ duration:p.dur, delay:p.del, repeat:Infinity, ease:'easeInOut'}}
        />
      ))}
    </div>
  )
}

/* ══════════════════════════════════════════
   HOMEPAGE
══════════════════════════════════════════ */
export default function HomePage({ onOpen }) {
  return (
    <div style={{
      width:'100vw', height:'100vh', overflow:'hidden',
      position:'relative',
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
      background:'radial-gradient(ellipse 100% 100% at 50% 50%, #120804 0%, #080402 55%, #020101 100%)',
    }}>

      {/* ── SAFELIGHT: tight hot source, upper-left ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:2,
        background:'radial-gradient(ellipse 18% 17% at 4% 4%, rgba(240,42,10,0.88) 0%, rgba(200,28,6,0.55) 28%, rgba(145,16,4,0.22) 52%, transparent 68%)'
      }}/>
      {/* ── SAFELIGHT: wide ambient bleed ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:2,
        background:'radial-gradient(ellipse 58% 50% at 8% 7%, rgba(185,26,6,0.52) 0%, rgba(115,14,3,0.22) 42%, transparent 66%)'
      }}/>
      {/* ── faint warm floor bounce ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:2,
        background:'radial-gradient(ellipse 38% 26% at 50% 98%, rgba(70,30,6,0.16) 0%, transparent 58%)'
      }}/>

      <DustParticles />

      {/* ── HEAVY VIGNETTE ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:12,
        background:'radial-gradient(ellipse 66% 60% at 50% 50%, transparent 14%, rgba(0,0,0,0.48) 52%, rgba(0,0,0,0.90) 80%, rgba(0,0,0,0.99) 100%)',
      }}/>

      {/* ── TITLE ── */}
      <motion.div
        initial={{ opacity:0, y:-14 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:2.6, delay:0.2, ease:[0.22,1,0.36,1] }}
        style={{ position:'absolute', top:'2.4%', left:0, right:0, textAlign:'center', zIndex:20, pointerEvents:'none', padding:'0 20px' }}
      >
        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:'clamp(11px,1.55vw,20px)', letterSpacing:'0.48em', color:'rgba(212,190,148,0.78)', textTransform:'uppercase', marginBottom:5, textShadow:'0 0 70px rgba(180,40,8,0.28), 0 2px 30px rgba(0,0,0,0.85)'}}>
          Archivo de Cuarto Oscuro
        </div>
        <div style={{ fontFamily:'"EB Garamond",serif', fontSize:'clamp(9px,0.92vw,13px)', color:'rgba(148,122,84,0.38)', fontStyle:'italic', letterSpacing:'0.09em'}}>
          Registro visual de un semestre de observación, selección y memoria.
        </div>
      </motion.div>

      {/* ══════════════ ARCHIVE TABLE ══════════════ */}
      <div style={{
        position:'relative',
        width:'min(97vw, 1480px)',
        height:'min(90vh, 920px)',
        background:'#0c0704',
        borderRadius:4,
        boxShadow:`0 52px 130px rgba(0,0,0,0.99), 0 0 0 1px rgba(40,16,3,0.50), inset 0 1px 0 rgba(255,140,50,0.025), inset 0 -2px 0 rgba(0,0,0,0.85)`,
        filter:'sepia(12%) brightness(0.60) contrast(1.30) saturate(0.78)',
        zIndex:5,
        overflow:'hidden',
      }}>

        {/* ─── WOOD GRAIN TEXTURE ─── */}
        <WoodGrainTexture />

        {/* ─── LANTERN GLOW POOL on table surface ─── */}
        <div style={{ position:'absolute', top:'-8%', left:'-8%', width:'52%', height:'55%', pointerEvents:'none', zIndex:2,
          background:'radial-gradient(ellipse at 12% 14%, rgba(240,55,10,0.62) 0%, rgba(195,30,6,0.34) 22%, rgba(140,18,4,0.14) 44%, transparent 64%)'
        }}/>

        {/* ─── DECORATIVE PROPS ─── */}

        {/* Darkroom safelight LANTERN — upper left, partially off-screen */}
        <motion.div
          initial={{ opacity:0, scale:0.92 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:2.0, delay:0.8, ease:[0.22,1,0.36,1] }}
          style={{ position:'absolute', top:'-4%', left:'-3%', zIndex:9 }}
        >
          <DarkroomLantern />
        </motion.div>

        {/* Compass — upper right */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.5, delay:2.0 }}
          style={{ position:'absolute', top:'3%', right:'2%', zIndex:8 }}
        >
          <Compass style={{ transform:'rotate(18deg)' }}/>
        </motion.div>

        {/* Camera — upper center */}
        <motion.div
          initial={{ opacity:0, scale:0.92 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:1.8, delay:1.2, ease:[0.22,1,0.36,1] }}
          style={{ position:'absolute', top:'5%', left:'34%', zIndex:8 }}
        >
          <VintageCamera />
        </motion.div>

        {/* Film strip 1 — diagonal center-left */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.5, delay:1.5 }}
          style={{ position:'absolute', top:'37%', left:'19%', zIndex:7 }}
        >
          <FilmStrip width={380} style={{ transform:'rotate(-13deg)' }}/>
        </motion.div>

        {/* Film strip 2 — center */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.5, delay:1.7 }}
          style={{ position:'absolute', top:'46%', left:'37%', zIndex:6 }}
        >
          <FilmStrip width={250} style={{ transform:'rotate(6deg)' }}/>
        </motion.div>

        {/* Negative strip — center upper */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.5, delay:2.0 }}
          style={{ position:'absolute', top:'23%', left:'37%', zIndex:7 }}
        >
          <NegativeStrip style={{ transform:'rotate(-4.5deg)' }}/>
        </motion.div>

        {/* Film canisters */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.3, delay:1.8 }}
          style={{ position:'absolute', top:'37%', left:'44%', zIndex:9 }}>
          <FilmCanister color="#b82020" label="400"/>
        </motion.div>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.3, delay:2.1 }}
          style={{ position:'absolute', top:'34%', left:'48%', zIndex:9 }}>
          <FilmCanister color="#1e3c78" label="100" style={{ height:54, width:26 }}/>
        </motion.div>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.3, delay:2.3 }}
          style={{ position:'absolute', top:'40%', left:'52%', zIndex:9 }}>
          <FilmCanister color="#3a7820" label="200" style={{ height:50, width:24 }}/>
        </motion.div>

        {/* Magnifying loupe */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.3, delay:2.2 }}
          style={{ position:'absolute', top:'56%', left:'25%', zIndex:8 }}>
          <MagnifyingLoupe style={{ transform:'rotate(-22deg)' }}/>
        </motion.div>

        {/* Pencils */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.3, delay:1.6 }}
          style={{ position:'absolute', top:'30%', left:'19%', zIndex:7 }}>
          <Pencil length={162} style={{ transform:'rotate(23deg)' }}/>
        </motion.div>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.3, delay:2.5 }}
          style={{ position:'absolute', top:'14%', left:'29%', zIndex:7 }}>
          <Pencil length={115} style={{ transform:'rotate(-36deg)' }}/>
        </motion.div>

        {/* Paper notes */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.3, delay:1.9 }}
          style={{ position:'absolute', top:'51%', left:'22%', zIndex:7 }}>
          <PaperNote lines={['a punto de','cumplir 20','—','Madrid 2025']} style={{ width:94, transform:'rotate(4.5deg)' }}/>
        </motion.div>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.3, delay:2.4 }}
          style={{ position:'absolute', top:'7%', left:'35%', zIndex:7 }}>
          <PaperNote lines={['fotografiar','es seleccionar.']} style={{ width:108, transform:'rotate(-4.5deg)' }}/>
        </motion.div>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.3, delay:2.7 }}
          style={{ position:'absolute', top:'54%', left:'43%', zIndex:7 }}>
          <PaperNote lines={['exp. 1/125','f/8','ISO 400']} style={{ width:80, transform:'rotate(-7deg)' }}/>
        </motion.div>

        {/* Loose polaroids */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.3, delay:2.5 }}
          style={{ position:'absolute', top:'67%', left:'27%', zIndex:6 }}>
          <LoosePolaroid rotate={-9}  src={PROJECTS.find(p=>p.id==='boletus')?.images[2]}/>
        </motion.div>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.3, delay:2.7 }}
          style={{ position:'absolute', top:'13%', right:'26%', zIndex:6 }}>
          <LoosePolaroid rotate={13}  src={PROJECTS.find(p=>p.id==='mapa')?.images[3]}/>
        </motion.div>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.3, delay:2.9 }}
          style={{ position:'absolute', top:'31%', right:'21%', zIndex:6 }}>
          <LoosePolaroid rotate={-7}  src={PROJECTS.find(p=>p.id==='boletus')?.images[8]}/>
        </motion.div>

        {/* ─── BINDER CLIP silhouettes ─── */}
        {[
          { top:'61%', left:'36%', r:'-12deg' },
          { top:'28%', left:'17%', r:'8deg'   },
        ].map((c,i)=>(
          <motion.div key={i} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.2, delay:2.8+i*0.2 }}
            style={{ position:'absolute', top:c.top, left:c.left, zIndex:8, pointerEvents:'none', transform:`rotate(${c.r})` }}>
            <svg width="24" height="22" viewBox="0 0 24 22" style={{ filter:'drop-shadow(1px 3px 5px rgba(0,0,0,0.88))' }}>
              <rect x="2" y="4" width="20" height="14" rx="2" fill="#2a2820" stroke="#3a3428" strokeWidth="1.2"/>
              <rect x="4" y="2" width="7"  height="4"  rx="1.5" fill="#1e1c12"/>
              <rect x="13" y="2" width="7" height="4"  rx="1.5" fill="#1e1c12"/>
              <rect x="4" y="17" width="7" height="4"  rx="1.5" fill="#1e1c12"/>
              <rect x="13" y="17" width="7" height="4" rx="1.5" fill="#1e1c12"/>
            </svg>
          </motion.div>
        ))}

        {/* ─── heavy edge burn ─── */}
        <div style={{ position:'absolute', inset:0, borderRadius:4, boxShadow:'inset 0 0 120px rgba(0,0,0,0.85), inset 0 0 50px rgba(0,0,0,0.60)', pointerEvents:'none', zIndex:50 }}/>

        {/* ─── lantern glow on surface (inside table stacking) ─── */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:51, borderRadius:4,
          background:'radial-gradient(ellipse 40% 35% at 2% 2%, rgba(225,35,6,0.40) 0%, rgba(160,20,4,0.16) 40%, transparent 62%)'
        }}/>

        {/* ─── PROJECT OBJECTS ─── */}
        {PROJECTS.map(project => (
          <TableObject key={project.id} project={project} onClick={onOpen}/>
        ))}
      </div>

      {/* ── INSTRUCTION ── */}
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ duration:4, delay:4.5 }}
        style={{ position:'absolute', bottom:'2.2%', left:0, right:0, textAlign:'center', fontFamily:'"Special Elite",monospace', fontSize:'clamp(8px,0.80vw,11px)', letterSpacing:'0.32em', color:'rgba(150,112,64,0.28)', zIndex:20, pointerEvents:'none' }}
      >
        Selecciona un expediente sobre la mesa.
      </motion.div>
    </div>
  )
}
