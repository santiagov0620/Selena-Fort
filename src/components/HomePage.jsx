import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { PROJECTS } from '../data/projects.js'
import TableObject from './TableObject.jsx'

/* ══════════════════════════════════════════
   WOOD GRAIN
══════════════════════════════════════════ */
function WoodGrainTexture() {
  return (
    <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', display:'block', borderRadius:4 }} aria-hidden="true">
      <defs>
        <filter id="wg" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.0032 0.11" numOctaves="6" seed="22" result="noise"/>
          <feColorMatrix type="matrix"
            values="0.32 0 0 0 0.06
                    0.20 0 0 0 0.03
                    0.08 0 0 0 0.01
                    0    0 0 1 0"
            in="noise"/>
        </filter>
        <filter id="wg2" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.0011 0.0025" numOctaves="3" seed="9" result="planks"/>
          <feColorMatrix type="matrix"
            values="0.09 0 0 0 0
                    0.05 0 0 0 0
                    0.02 0 0 0 0
                    0    0 0 0.55 0"
            in="planks"/>
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#wg)" rx="4"/>
      <rect width="100%" height="100%" filter="url(#wg2)" rx="4" style={{ mixBlendMode:'multiply' }}/>
      {/* plank grooves */}
      <line x1="0" y1="33%" x2="100%" y2="32.5%" stroke="rgba(0,0,0,0.07)" strokeWidth="2"/>
      <line x1="0" y1="67%" x2="100%" y2="66.6%" stroke="rgba(0,0,0,0.055)" strokeWidth="1.5"/>
      {/* scratches */}
      <line x1="6%"  y1="19%"  x2="44%" y2="18.5%"  stroke="rgba(255,210,130,0.04)" strokeWidth="0.9"/>
      <line x1="23%" y1="44%"  x2="60%" y2="43.2%"  stroke="rgba(0,0,0,0.06)"       strokeWidth="1.0"/>
      <line x1="56%" y1="13%"  x2="97%" y2="12.4%"  stroke="rgba(255,210,130,0.03)" strokeWidth="0.7"/>
      <line x1="10%" y1="74%"  x2="52%" y2="73.3%"  stroke="rgba(0,0,0,0.05)"       strokeWidth="0.8"/>
      {/* knot */}
      <ellipse cx="64%" cy="27%" rx="3%" ry="2.4%" fill="rgba(0,0,0,0.09)" style={{ mixBlendMode:'multiply' }}/>
      <ellipse cx="64%" cy="27%" rx="1.3%" ry="1%" fill="rgba(0,0,0,0.14)" style={{ mixBlendMode:'multiply' }}/>
      {/* water ring */}
      <ellipse cx="47%" cy="42%" rx="2.6%" ry="2%" fill="none" stroke="rgba(60,35,6,0.11)" strokeWidth="1.4"/>
    </svg>
  )
}

/* ══════════════════════════════════════════
   DARKROOM LANTERN
══════════════════════════════════════════ */
function DarkroomLantern({ style }) {
  return (
    <div style={{ width:118, pointerEvents:'none', filter:'drop-shadow(0 0 38px rgba(195,22,4,0.85)) drop-shadow(0 12px 24px rgba(0,0,0,0.98))', ...style }}>
      <svg viewBox="0 0 100 145" fill="none">
        <defs>
          <radialGradient id="gg" cx="42%" cy="38%" r="60%">
            <stop offset="0%"   stopColor="rgba(255,130,20,0.95)"/>
            <stop offset="35%"  stopColor="rgba(220,50,8,0.80)"/>
            <stop offset="75%"  stopColor="rgba(155,18,4,0.52)"/>
            <stop offset="100%" stopColor="rgba(70,7,2,0.18)"/>
          </radialGradient>
          <radialGradient id="gb" cx="38%" cy="32%" r="68%">
            <stop offset="0%"   stopColor="#7a1c08"/>
            <stop offset="50%"  stopColor="#480d04"/>
            <stop offset="100%" stopColor="#1c0502"/>
          </radialGradient>
        </defs>
        <ellipse cx="50" cy="72" rx="58" ry="74" fill="rgba(185,20,4,0.14)"/>
        <ellipse cx="50" cy="132" rx="32" ry="9" fill="#0e0804"/>
        <rect x="20" y="122" width="60" height="14" rx="5" fill="#1c1208"/>
        <rect x="44" y="100" width="12" height="26" fill="#1e1208"/>
        <ellipse cx="50" cy="102" rx="27" ry="7.5" fill="#221608"/>
        <ellipse cx="50" cy="62" rx="37" ry="45" fill="url(#gb)"/>
        <ellipse cx="50" cy="62" rx="33" ry="40" fill="url(#gg)" opacity="0.82"/>
        {[30,42,54,66,76,85].map(y=>{
          const hw=33-Math.abs(y-62)*0.30
          return <ellipse key={y} cx="50" cy={y} rx={hw} ry="3.2" fill="none" stroke="rgba(0,0,0,0.20)" strokeWidth="1.6"/>
        })}
        <ellipse cx="37" cy="43" rx="12" ry="16" fill="rgba(255,190,80,0.12)" transform="rotate(-18 37 43)"/>
        <ellipse cx="50" cy="22" rx="22" ry="6.5" fill="#1e1408"/>
        <rect x="42" y="4" width="16" height="20" rx="4" fill="#160e06"/>
        <ellipse cx="50" cy="5" rx="7" ry="2.5" fill="rgba(255,100,20,0.32)"/>
        <path d="M18 55 Q8 55 8 45 Q8 35 18 35" stroke="#281808" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M82 55 Q92 55 92 45 Q92 35 82 35" stroke="#281808" strokeWidth="4" fill="none" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

/* ══════════════════════════════════════════
   COMPASS
══════════════════════════════════════════ */
function Compass({ style }) {
  return (
    <div style={{ width:60, pointerEvents:'none', filter:'drop-shadow(2px 5px 10px rgba(0,0,0,0.92))', ...style }}>
      <svg viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="27" fill="#161008" stroke="#3a2c18" strokeWidth="3"/>
        <circle cx="30" cy="30" r="22" fill="#120e06"/>
        {Array.from({length:12},(_,i)=>{
          const a=(i/12)*Math.PI*2-Math.PI/2, r1=i%3===0?14:17
          return <line key={i} x1={30+r1*Math.cos(a)} y1={30+r1*Math.sin(a)} x2={30+20*Math.cos(a)} y2={30+20*Math.sin(a)} stroke={i%3===0?'#9a7832':'#4a3416'} strokeWidth={i%3===0?1.6:0.9}/>
        })}
        <text x="30" y="13" textAnchor="middle" fontSize="6" fill="#b89040" fontFamily="monospace">N</text>
        <text x="30" y="50" textAnchor="middle" fontSize="5" fill="#5a3c18" fontFamily="monospace">S</text>
        <polygon points="30,14 27.5,30 30,28 32.5,30" fill="#c01808"/>
        <polygon points="30,46 27.5,30 30,32 32.5,30" fill="#4a3020"/>
        <circle cx="30" cy="30" r="2.5" fill="#7a5828"/>
        <ellipse cx="22" cy="20" rx="7" ry="4.5" fill="rgba(255,255,255,0.05)" transform="rotate(-30 22 20)"/>
      </svg>
    </div>
  )
}

/* ══════════════════════════════════════════
   PROPS
══════════════════════════════════════════ */
function VintageCamera({ style }) {
  return (
    <div style={{ width:230, pointerEvents:'none', filter:'drop-shadow(4px 16px 36px rgba(0,0,0,0.97)) drop-shadow(0 3px 8px rgba(0,0,0,0.80))', ...style }}>
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

function FilmStrip({ width=320, style }) {
  const perf=Math.floor(width/30), frames=Math.floor(width/72)
  return (
    <div style={{ width, pointerEvents:'none', filter:'drop-shadow(1px 5px 12px rgba(0,0,0,0.95))', ...style }}>
      <svg viewBox={`0 0 ${width} 70`} width={width} height={70}>
        <rect width={width} height={70} fill="#0e0b08" rx="2"/>
        {Array.from({length:perf},(_,i)=><rect key={`t${i}`} x={i*30+5} y={4}  width={16} height={12} rx={2.5} fill="#080604"/>)}
        {Array.from({length:perf},(_,i)=><rect key={`b${i}`} x={i*30+5} y={54} width={16} height={12} rx={2.5} fill="#080604"/>)}
        {Array.from({length:frames},(_,i)=><rect key={`f${i}`} x={i*72+4} y={22} width={64} height={26} fill="#0a0806" rx={1}/>)}
        <rect width={width} height={70} fill="rgba(45,7,2,0.22)" rx="2"/>
      </svg>
    </div>
  )
}

function FilmCanister({ style }) {
  return (
    <div style={{ pointerEvents:'none', filter:'drop-shadow(2px 6px 12px rgba(0,0,0,0.95))', ...style }}>
      <svg viewBox="0 0 28 58" width={28} height={58}>
        <rect x="1" y="0" width="26" height="8" rx="3" fill="#2a2418"/>
        <rect x="0" y="7" width="28" height="46" rx="3" fill="#1a1410"/>
        <rect x="3" y="7" width="5" height="46" fill="rgba(255,255,255,0.03)"/>
        <rect x="4" y="16" width="20" height="24" rx="2" fill="#8a1810" opacity="0.65"/>
        <text x="14" y="32" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.75)" fontFamily="monospace" fontWeight="bold">400</text>
        <rect x="0" y="48" width="28" height="5" rx="0" fill="rgba(0,0,0,0.35)"/>
        <ellipse cx="14" cy="7" rx="13" ry="3" fill="#302818"/>
      </svg>
    </div>
  )
}

function MagnifyingLoupe({ style }) {
  return (
    <div style={{ width:60, height:64, pointerEvents:'none', filter:'drop-shadow(2px 5px 10px rgba(0,0,0,0.90))', ...style }}>
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
    <div style={{ width:length, pointerEvents:'none', filter:'drop-shadow(1px 3px 6px rgba(0,0,0,0.80))', ...style }}>
      <svg viewBox={`0 0 ${length} 11`} width={length} height={11}>
        <polygon points={`0,5.5 11,1 11,10`} fill="#c09828"/>
        <polygon points={`3,5.5 11,2.5 11,8.5`} fill="#160a00"/>
        <rect x="11" y="1" width={length-19} height="9" fill="#d4b438"/>
        <rect x="11" y="1" width={length-19} height="3.5" fill="rgba(255,255,255,0.07)"/>
        <rect x={length-10} y="1.5" width="4"  height="8" fill="#8a8078" rx="1"/>
        <rect x={length-7}  y="2"   width="7"  height="7" fill="#cc8888" rx="1"/>
      </svg>
    </div>
  )
}

function PaperNote({ lines, style }) {
  return (
    <div style={{ background:'linear-gradient(155deg,#e8d898 0%,#d8c880 100%)', padding:'8px 11px 10px', boxShadow:'2px 4px 12px rgba(0,0,0,0.75)', pointerEvents:'none', position:'relative', overflow:'hidden', ...style }}>
      <div style={{ position:'absolute', bottom:0, right:0, width:36, height:36, background:'radial-gradient(at 100% 100%,rgba(50,25,0,0.16) 0%,transparent 70%)', pointerEvents:'none'}}/>
      {lines.map((l,i)=><div key={i} style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:10.5, color:'#1e1005', lineHeight:1.68, position:'relative'}}>{l}</div>)}
    </div>
  )
}

function LoosePolaroid({ src, rotate=0, style }) {
  return (
    <div style={{ background:'#f0e8d8', padding:'5px 5px 20px', boxShadow:'3px 5px 16px rgba(0,0,0,0.86)', transform:`rotate(${rotate}deg)`, pointerEvents:'none', ...style }}>
      <div style={{ width:82, height:64, overflow:'hidden', background:'#0d0d0d', position:'relative' }}>
        {src && <img src={src} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'sepia(18%) contrast(1.08)'}}/>}
      </div>
    </div>
  )
}

function NegativeStrip({ style }) {
  return (
    <div style={{ pointerEvents:'none', filter:'drop-shadow(1px 7px 16px rgba(0,0,0,0.95))', ...style }}>
      <svg viewBox="0 0 280 50" width={280} height={50}>
        <rect width={280} height={50} fill="#090704" rx="2"/>
        {Array.from({length:9},(_,i)=><rect key={`t${i}`} x={i*31+4} y={3}  width={13} height={8} rx={2} fill="#060402"/>)}
        {Array.from({length:9},(_,i)=><rect key={`b${i}`} x={i*31+4} y={39} width={13} height={8} rx={2} fill="#060402"/>)}
        {[0,1,2,3].map(i=><rect key={i} x={i*70+1} y={15} width={65} height={20} fill={`rgba(${46+i*5},${22+i*3},4,0.65)`} rx="1"/>)}
        <rect width={280} height={50} fill="rgba(28,7,2,0.28)" rx="2"/>
      </svg>
    </div>
  )
}

/* ══════════════════════════════════════════
   DUST MOTES
══════════════════════════════════════════ */
function DustParticles() {
  const pts = useMemo(()=>Array.from({length:22},(_,i)=>({
    id:i, x:Math.random()*100, y:Math.random()*100,
    sz:Math.random()*2.2+0.4, dur:Math.random()*18+12, del:Math.random()*11,
    op:Math.random()*0.18+0.04,
  })),[])
  return (
    <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:4, overflow:'hidden' }}>
      {pts.map(p=>(
        <motion.div key={p.id}
          style={{ position:'absolute', left:`${p.x}%`, top:`${p.y}%`, width:p.sz, height:p.sz, borderRadius:'50%', background:`rgba(210,165,90,${p.op})`}}
          animate={{ y:[0,-44,-8,-56,0], x:[0,10,-6,14,0], opacity:[p.op,p.op*.2,p.op*.6,p.op*.1,p.op]}}
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
      background:'#0a0502',
    }}>
      {/* ── OUTER ROOM DARKNESS ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:1,
        background:'radial-gradient(ellipse 75% 68% at 50% 50%, transparent 20%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.96) 100%)'
      }}/>

      {/* ── SAFELIGHT: tight hot point, upper-left ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:2,
        background:'radial-gradient(ellipse 20% 18% at 4% 5%, rgba(220,38,8,0.55) 0%, rgba(180,24,5,0.25) 35%, transparent 62%)'
      }}/>
      {/* ── SAFELIGHT: soft wide ambient bleed ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:2,
        background:'radial-gradient(ellipse 50% 42% at 6% 6%, rgba(165,22,5,0.22) 0%, rgba(100,12,3,0.10) 48%, transparent 68%)'
      }}/>

      <DustParticles />

      {/* ── VIGNETTE ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:12,
        background:'radial-gradient(ellipse 70% 65% at 50% 50%, transparent 22%, rgba(0,0,0,0.38) 55%, rgba(0,0,0,0.88) 82%, rgba(0,0,0,0.98) 100%)',
      }}/>

      {/* ── TITLE ── */}
      <motion.div
        initial={{ opacity:0, y:-12 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:2.4, delay:0.2, ease:[0.22,1,0.36,1] }}
        style={{ position:'absolute', top:'2.2%', left:0, right:0, textAlign:'center', zIndex:20, pointerEvents:'none' }}
      >
        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:'clamp(12px,1.65vw,22px)', letterSpacing:'0.44em', color:'rgba(220,198,155,0.92)', textTransform:'uppercase', marginBottom:6, textShadow:'0 0 50px rgba(160,35,8,0.22), 0 2px 24px rgba(0,0,0,0.80)'}}>
          Archivo de Cuarto Oscuro
        </div>
        <div style={{ fontFamily:'"EB Garamond",serif', fontSize:'clamp(10px,1.0vw,14px)', color:'rgba(155,128,88,0.50)', fontStyle:'italic', letterSpacing:'0.07em'}}>
          Registro visual de un semestre de observación, selección y memoria.
        </div>
      </motion.div>

      {/* ══════════════ TABLE ══════════════ */}
      <div style={{
        position:'relative',
        width:'min(97vw, 1480px)',
        height:'min(90vh, 920px)',
        background:'#110a04',
        borderRadius:4,
        boxShadow:'0 48px 120px rgba(0,0,0,0.99), 0 0 0 1px rgba(40,18,4,0.50)',
        /* ── CORRECTED EXPOSURE: readable midtones, cinematic but not crushed ── */
        filter:'sepia(7%) brightness(0.82) contrast(1.08) saturate(0.88)',
        zIndex:5,
        overflow:'hidden',
      }}>

        {/* WOOD GRAIN */}
        <WoodGrainTexture />

        {/* subtle plank lines */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:1,
          backgroundImage:`repeating-linear-gradient(180deg,transparent 0px,transparent 185px,rgba(0,0,0,0.045) 185px,rgba(0,0,0,0.045) 187px)`,
        }}/>

        {/* ─── SAFELIGHT POOL on table surface ─── */}
        <div style={{ position:'absolute', top:'-6%', left:'-6%', width:'44%', height:'48%', pointerEvents:'none', zIndex:2,
          background:'radial-gradient(ellipse at 14% 16%, rgba(215,48,8,0.38) 0%, rgba(170,26,5,0.16) 28%, rgba(110,14,3,0.06) 50%, transparent 68%)'
        }}/>

        {/* ─── ATMOSPHERIC PROPS — z-index 3, clearly behind archive objects ─── */}

        {/* LANTERN — upper left, half off-screen */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:2.2, delay:0.8 }}
          style={{ position:'absolute', top:'-6%', left:'-2.5%', zIndex:3, pointerEvents:'none' }}
        >
          <DarkroomLantern />
        </motion.div>

        {/* COMPASS — upper right */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.5, delay:2.0 }}
          style={{ position:'absolute', top:'4%', right:'3%', zIndex:3, pointerEvents:'none' }}
        >
          <Compass style={{ transform:'rotate(16deg)' }}/>
        </motion.div>

        {/* CAMERA — center upper, sits between grapefruit and mapa */}
        <motion.div
          initial={{ opacity:0, scale:0.94 }} animate={{ opacity:1, scale:1 }}
          transition={{ duration:1.8, delay:1.2, ease:[0.22,1,0.36,1] }}
          style={{ position:'absolute', top:'6%', left:'35.5%', zIndex:3, pointerEvents:'none' }}
        >
          <VintageCamera />
        </motion.div>

        {/* FILM STRIP — diagonal, center */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.5, delay:1.5 }}
          style={{ position:'absolute', top:'37%', left:'27%', zIndex:3, pointerEvents:'none' }}
        >
          <FilmStrip width={320} style={{ transform:'rotate(-12deg)' }}/>
        </motion.div>

        {/* NEGATIVE STRIP — upper center */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.5, delay:1.9 }}
          style={{ position:'absolute', top:'25%', left:'35%', zIndex:3, pointerEvents:'none' }}
        >
          <NegativeStrip style={{ transform:'rotate(-3deg)' }}/>
        </motion.div>

        {/* FILM CANISTER — center, near camera */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.0 }}
          style={{ position:'absolute', top:'39%', left:'46%', zIndex:3, pointerEvents:'none' }}
        >
          <FilmCanister />
        </motion.div>

        {/* LOUPE — center left */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.2 }}
          style={{ position:'absolute', top:'58%', left:'30%', zIndex:3, pointerEvents:'none' }}
        >
          <MagnifyingLoupe style={{ transform:'rotate(-20deg)' }}/>
        </motion.div>

        {/* PENCIL — upper center */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:1.7 }}
          style={{ position:'absolute', top:'32%', left:'27%', zIndex:3, pointerEvents:'none' }}
        >
          <Pencil length={148} style={{ transform:'rotate(20deg)' }}/>
        </motion.div>

        {/* PAPER NOTE 1 */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.1 }}
          style={{ position:'absolute', top:'54%', left:'27%', zIndex:3, pointerEvents:'none' }}
        >
          <PaperNote lines={['a punto de','cumplir 20','—','Madrid 2025']} style={{ width:88, transform:'rotate(3.5deg)' }}/>
        </motion.div>

        {/* PAPER NOTE 2 */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.4 }}
          style={{ position:'absolute', top:'9%', left:'36%', zIndex:3, pointerEvents:'none' }}
        >
          <PaperNote lines={['fotografiar','es seleccionar.']} style={{ width:102, transform:'rotate(-4deg)' }}/>
        </motion.div>

        {/* LOOSE POLAROID — center bottom */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.5 }}
          style={{ position:'absolute', top:'68%', left:'29%', zIndex:3, pointerEvents:'none' }}
        >
          <LoosePolaroid rotate={-8} src={PROJECTS.find(p=>p.id==='boletus')?.images[2]}/>
        </motion.div>

        {/* LOOSE POLAROID 2 — upper right area */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.7 }}
          style={{ position:'absolute', top:'15%', right:'28%', zIndex:3, pointerEvents:'none' }}
        >
          <LoosePolaroid rotate={12} src={PROJECTS.find(p=>p.id==='mapa')?.images[3]}/>
        </motion.div>

        {/* ─── EDGE BURN ─── */}
        <div style={{ position:'absolute', inset:0, borderRadius:4,
          boxShadow:'inset 0 0 100px rgba(0,0,0,0.70), inset 0 0 38px rgba(0,0,0,0.45)',
          pointerEvents:'none', zIndex:50 }}/>

        {/* ─── SUBTLE RED TINT on surface ─── */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:51, borderRadius:4,
          background:'radial-gradient(ellipse 38% 32% at 1% 1%, rgba(210,30,5,0.22) 0%, rgba(150,18,3,0.08) 44%, transparent 62%)'
        }}/>

        {/* ─── ARCHIVE OBJECTS — z-index 4-8 (clearly above all props) ─── */}
        {PROJECTS.map(project => (
          <TableObject key={project.id} project={project} onClick={onOpen}/>
        ))}
      </div>

      {/* ── INSTRUCTION ── */}
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ duration:3.5, delay:4.5 }}
        style={{ position:'absolute', bottom:'2.2%', left:0, right:0, textAlign:'center', fontFamily:'"Special Elite",monospace', fontSize:'clamp(8px,0.82vw,11px)', letterSpacing:'0.30em', color:'rgba(155,118,72,0.34)', zIndex:20, pointerEvents:'none' }}
      >
        Selecciona un expediente sobre la mesa.
      </motion.div>
    </div>
  )
}
