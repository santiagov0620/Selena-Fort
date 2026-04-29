import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { PROJECTS } from '../data/projects.js'
import TableObject from './TableObject.jsx'

/* ══════════════════════════════════════════
   WOOD GRAIN — SVG feTurbulence
══════════════════════════════════════════ */
function WoodGrainTexture() {
  return (
    <svg
      style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', display:'block', borderRadius:4 }}
      aria-hidden="true"
    >
      <defs>
        {/* Primary horizontal grain */}
        <filter id="wg" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.003 0.11" numOctaves="6" seed="22" result="noise"/>
          <feColorMatrix type="matrix"
            values="0.55 0 0 0 0.10
                    0.34 0 0 0 0.05
                    0.12 0 0 0 0.016
                    0    0 0 1.3 0"
            in="noise"/>
        </filter>
        {/* Plank-level variation */}
        <filter id="wg2" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.0012 0.0028" numOctaves="3" seed="9" result="planks"/>
          <feColorMatrix type="matrix"
            values="0.18 0 0 0 0.02
                    0.11 0 0 0 0.01
                    0.04 0 0 0 0
                    0    0 0 0.80 0"
            in="planks"/>
        </filter>
      </defs>

      {/* Base grain */}
      <rect width="100%" height="100%" filter="url(#wg)" rx="4"/>
      {/* Plank shadows — multiply blend */}
      <rect width="100%" height="100%" filter="url(#wg2)" rx="4" style={{ mixBlendMode:'multiply' }}/>

      {/* Board seams */}
      <line x1="0" y1="32%" x2="100%" y2="31.6%" stroke="rgba(0,0,0,0.06)" strokeWidth="1.8"/>
      <line x1="0" y1="65%" x2="100%" y2="64.6%" stroke="rgba(0,0,0,0.05)" strokeWidth="1.4"/>

      {/* Surface scratches */}
      <line x1="5%"  y1="18%"  x2="43%" y2="17.5%"  stroke="rgba(255,215,140,0.042)" strokeWidth="0.8"/>
      <line x1="22%" y1="44%"  x2="62%" y2="43.3%"  stroke="rgba(0,0,0,0.055)"       strokeWidth="1.0"/>
      <line x1="55%" y1="12%"  x2="98%" y2="11.5%"  stroke="rgba(255,215,140,0.032)" strokeWidth="0.7"/>
      <line x1="8%"  y1="76%"  x2="54%" y2="75.3%"  stroke="rgba(0,0,0,0.048)"       strokeWidth="0.8"/>
      <line x1="68%" y1="58%"  x2="99%" y2="57.5%"  stroke="rgba(255,215,140,0.028)" strokeWidth="0.6"/>

      {/* Wood knot */}
      <ellipse cx="63%" cy="27%" rx="3.2%" ry="2.5%" fill="rgba(0,0,0,0.08)"  style={{ mixBlendMode:'multiply' }}/>
      <ellipse cx="63%" cy="27%" rx="1.4%" ry="1.1%" fill="rgba(0,0,0,0.13)"  style={{ mixBlendMode:'multiply' }}/>

      {/* Water ring stain */}
      <ellipse cx="48%" cy="43%" rx="2.5%" ry="1.9%" fill="none" stroke="rgba(55,30,5,0.10)" strokeWidth="1.3"/>
      <ellipse cx="48%" cy="43%" rx="2.1%" ry="1.6%" fill="none" stroke="rgba(55,30,5,0.06)" strokeWidth="0.7"/>
    </svg>
  )
}

/* ══════════════════════════════════════════
   DARKROOM SAFELIGHT LANTERN
══════════════════════════════════════════ */
function DarkroomLantern({ style }) {
  return (
    <div style={{ width:115, pointerEvents:'none',
      filter:'drop-shadow(0 0 36px rgba(195,22,4,0.82)) drop-shadow(0 10px 22px rgba(0,0,0,0.99))',
      ...style }}>
      <svg viewBox="0 0 100 145" fill="none">
        <defs>
          <radialGradient id="gg" cx="42%" cy="38%" r="60%">
            <stop offset="0%"   stopColor="rgba(255,130,20,0.95)"/>
            <stop offset="35%"  stopColor="rgba(218,48,8,0.80)"/>
            <stop offset="75%"  stopColor="rgba(150,18,4,0.50)"/>
            <stop offset="100%" stopColor="rgba(65,7,2,0.15)"/>
          </radialGradient>
          <radialGradient id="gb" cx="38%" cy="32%" r="68%">
            <stop offset="0%"   stopColor="#7a1c08"/>
            <stop offset="50%"  stopColor="#460d04"/>
            <stop offset="100%" stopColor="#1a0502"/>
          </radialGradient>
        </defs>
        <ellipse cx="50" cy="72" rx="56" ry="72" fill="rgba(182,20,4,0.12)"/>
        <ellipse cx="50" cy="132" rx="30" ry="8.5" fill="#0e0804"/>
        <rect x="21" y="122" width="58" height="13" rx="5" fill="#1a1208"/>
        <rect x="44" y="100" width="12" height="25" fill="#1c1208"/>
        <ellipse cx="50" cy="102" rx="26" ry="7" fill="#201608"/>
        <ellipse cx="50" cy="62" rx="37" ry="45" fill="url(#gb)"/>
        <ellipse cx="50" cy="62" rx="33" ry="40" fill="url(#gg)" opacity="0.80"/>
        {[30,42,54,66,76,84].map(y => {
          const hw = 33 - Math.abs(y - 62) * 0.30
          return <ellipse key={y} cx="50" cy={y} rx={hw} ry="3.0" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1.5"/>
        })}
        <ellipse cx="37" cy="43" rx="11" ry="15" fill="rgba(255,190,80,0.11)" transform="rotate(-18 37 43)"/>
        <ellipse cx="50" cy="22" rx="21" ry="6" fill="#1c1408"/>
        <rect x="42" y="4" width="16" height="20" rx="4" fill="#140e06"/>
        <ellipse cx="50" cy="5" rx="7" ry="2.5" fill="rgba(255,95,18,0.30)"/>
        <path d="M18 55 Q8 55 8 45 Q8 35 18 35" stroke="#261808" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M82 55 Q92 55 92 45 Q92 35 82 35" stroke="#261808" strokeWidth="4" fill="none" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

/* ══════════════════════════════════════════
   COMPASS
══════════════════════════════════════════ */
function Compass({ style }) {
  return (
    <div style={{ width:56, pointerEvents:'none', filter:'drop-shadow(2px 5px 10px rgba(0,0,0,0.90))', ...style }}>
      <svg viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="27" fill="#161008" stroke="#3a2c18" strokeWidth="3"/>
        <circle cx="30" cy="30" r="21" fill="#120e06"/>
        {Array.from({length:12},(_,i) => {
          const a = (i/12)*Math.PI*2 - Math.PI/2, r1 = i%3===0 ? 14 : 17
          return <line key={i}
            x1={30+r1*Math.cos(a)} y1={30+r1*Math.sin(a)}
            x2={30+20*Math.cos(a)} y2={30+20*Math.sin(a)}
            stroke={i%3===0 ? '#9a7832' : '#4a3416'}
            strokeWidth={i%3===0 ? 1.6 : 0.9}/>
        })}
        <text x="30" y="13"  textAnchor="middle" fontSize="6" fill="#b89040" fontFamily="monospace">N</text>
        <text x="30" y="50"  textAnchor="middle" fontSize="5" fill="#5a3c18" fontFamily="monospace">S</text>
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
    <div style={{ width:232, pointerEvents:'none',
      filter:'drop-shadow(4px 18px 38px rgba(0,0,0,0.97)) drop-shadow(0 3px 9px rgba(0,0,0,0.82))',
      ...style }}>
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
        {[16,22,28,34].map(x => <line key={x} x1={x} y1="8" x2={x} y2="22" stroke="#2a2620" strokeWidth="1.2"/>)}
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
        {Array.from({length:24},(_,i) => {
          const a = (i/24)*Math.PI*2
          return <line key={i} x1={88+39*Math.cos(a)} y1={82+39*Math.sin(a)} x2={88+43*Math.cos(a)} y2={82+43*Math.sin(a)} stroke="#2e2618" strokeWidth="1.6"/>
        })}
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

function FilmStrip({ width=300, style }) {
  const perf = Math.floor(width/30), frames = Math.floor(width/72)
  return (
    <div style={{ width, pointerEvents:'none', filter:'drop-shadow(1px 5px 12px rgba(0,0,0,0.94))', ...style }}>
      <svg viewBox={`0 0 ${width} 70`} width={width} height={70}>
        <rect width={width} height={70} fill="#0e0b08" rx="2"/>
        {Array.from({length:perf},(_,i) => <rect key={`t${i}`} x={i*30+5} y={4}  width={16} height={12} rx={2.5} fill="#080604"/>)}
        {Array.from({length:perf},(_,i) => <rect key={`b${i}`} x={i*30+5} y={54} width={16} height={12} rx={2.5} fill="#080604"/>)}
        {Array.from({length:frames},(_,i) => <rect key={`f${i}`} x={i*72+4} y={22} width={64} height={26} fill="#0a0806" rx={1}/>)}
        <rect width={width} height={70} fill="rgba(44,7,2,0.20)" rx="2"/>
      </svg>
    </div>
  )
}

function FilmCanister({ style }) {
  return (
    <div style={{ pointerEvents:'none', filter:'drop-shadow(2px 6px 12px rgba(0,0,0,0.94))', ...style }}>
      <svg viewBox="0 0 28 60" width={28} height={60}>
        <rect x="1" y="0" width="26" height="9" rx="3" fill="#2a2418"/>
        <rect x="0" y="8" width="28" height="48" rx="3" fill="#1a1410"/>
        <rect x="2" y="8" width="5" height="48" fill="rgba(255,255,255,0.025)"/>
        <rect x="4" y="17" width="20" height="26" rx="2" fill="#8a1810" opacity="0.60"/>
        <text x="14" y="33" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.70)" fontFamily="monospace" fontWeight="bold">400</text>
        <rect x="0" y="50" width="28" height="6" rx="0" fill="rgba(0,0,0,0.38)"/>
        <ellipse cx="14" cy="8" rx="13" ry="3.5" fill="#302818"/>
      </svg>
    </div>
  )
}

function MagnifyingLoupe({ style }) {
  return (
    <div style={{ width:58, height:62, pointerEvents:'none', filter:'drop-shadow(2px 5px 10px rgba(0,0,0,0.88))', ...style }}>
      <svg viewBox="0 0 58 62">
        <circle cx="25" cy="25" r="21" fill="#1a1610" stroke="#383020" strokeWidth="3.5"/>
        <circle cx="25" cy="25" r="16" fill="rgba(100,130,150,0.13)"/>
        <circle cx="25" cy="25" r="16" fill="none" stroke="#242018" strokeWidth="1"/>
        <ellipse cx="18" cy="18" rx="6" ry="3.5" fill="rgba(255,255,255,0.08)" transform="rotate(-25 18 18)"/>
        <line x1="40" y1="40" x2="55" y2="55" stroke="#2a2418" strokeWidth="5.5" strokeLinecap="round"/>
        <line x1="40" y1="40" x2="55" y2="55" stroke="#1c1810" strokeWidth="3"   strokeLinecap="round"/>
      </svg>
    </div>
  )
}

function Pencil({ length=140, style }) {
  return (
    <div style={{ width:length, pointerEvents:'none', filter:'drop-shadow(1px 3px 6px rgba(0,0,0,0.78))', ...style }}>
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
    <div style={{
      background:'linear-gradient(152deg,#e8d898 0%,#daca84 100%)',
      padding:'8px 11px 10px',
      boxShadow:'2px 4px 12px rgba(0,0,0,0.72)',
      pointerEvents:'none', position:'relative', overflow:'hidden',
      ...style,
    }}>
      <div style={{ position:'absolute', bottom:0, right:0, width:34, height:34, background:'radial-gradient(at 100% 100%,rgba(48,22,0,0.15) 0%,transparent 70%)', pointerEvents:'none'}}/>
      {lines.map((l,i) => (
        <div key={i} style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:10.5, color:'#1c1005', lineHeight:1.68 }}>{l}</div>
      ))}
    </div>
  )
}

function LoosePolaroid({ src, rotate=0, style }) {
  return (
    <div style={{ background:'#ede5d4', padding:'5px 5px 20px', boxShadow:'3px 5px 16px rgba(0,0,0,0.84)', transform:`rotate(${rotate}deg)`, pointerEvents:'none', ...style }}>
      <div style={{ width:80, height:62, overflow:'hidden', background:'#111' }}>
        {src && <img src={src} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'sepia(18%) contrast(1.08)'}}/>}
      </div>
    </div>
  )
}

function NegativeStrip({ style }) {
  return (
    <div style={{ pointerEvents:'none', filter:'drop-shadow(1px 6px 14px rgba(0,0,0,0.94))', ...style }}>
      <svg viewBox="0 0 260 50" width={260} height={50}>
        <rect width={260} height={50} fill="#090704" rx="2"/>
        {Array.from({length:9},(_,i) => <rect key={`t${i}`} x={i*29+3} y={2}  width={13} height={8} rx={2} fill="#060402"/>)}
        {Array.from({length:9},(_,i) => <rect key={`b${i}`} x={i*29+3} y={40} width={13} height={8} rx={2} fill="#060402"/>)}
        {[0,1,2,3].map(i => <rect key={i} x={i*65+1} y={14} width={61} height={22} fill={`rgba(${44+i*5},${20+i*3},3,0.62)`} rx="1"/>)}
        <rect width={260} height={50} fill="rgba(26,6,2,0.26)" rx="2"/>
      </svg>
    </div>
  )
}

/* ══════════════════════════════════════════
   DUST MOTES
══════════════════════════════════════════ */
function DustParticles() {
  const pts = useMemo(() => Array.from({length:18},(_,i) => ({
    id:i, x:Math.random()*100, y:Math.random()*100,
    sz:Math.random()*2.0+0.4, dur:Math.random()*20+14, del:Math.random()*12,
    op:Math.random()*0.15+0.04,
  })),[])
  return (
    <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:4, overflow:'hidden' }}>
      {pts.map(p => (
        <motion.div key={p.id}
          style={{ position:'absolute', left:`${p.x}%`, top:`${p.y}%`, width:p.sz, height:p.sz, borderRadius:'50%', background:`rgba(205,160,85,${p.op})`}}
          animate={{ y:[0,-40,-8,-52,0], x:[0,9,-5,12,0], opacity:[p.op,p.op*.2,p.op*.55,p.op*.1,p.op]}}
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
      background:'#080402',
    }}>

      {/* ── OUTER DARKNESS ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:1,
        background:'radial-gradient(ellipse 78% 72% at 50% 50%, transparent 18%, rgba(0,0,0,0.52) 64%, rgba(0,0,0,0.97) 100%)'
      }}/>

      {/* ── SAFELIGHT: tight red hot-spot, upper left ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:2,
        background:'radial-gradient(ellipse 22% 20% at 4% 5%, rgba(215,36,8,0.52) 0%, rgba(175,22,5,0.22) 38%, transparent 64%)'
      }}/>
      {/* ── SAFELIGHT: wide soft bleed ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:2,
        background:'radial-gradient(ellipse 48% 42% at 5% 6%, rgba(155,20,5,0.18) 0%, rgba(90,11,3,0.08) 50%, transparent 70%)'
      }}/>

      <DustParticles />

      {/* ── VIGNETTE ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:12,
        background:'radial-gradient(ellipse 72% 68% at 50% 50%, transparent 20%, rgba(0,0,0,0.32) 52%, rgba(0,0,0,0.86) 80%, rgba(0,0,0,0.98) 100%)',
      }}/>

      {/* ── TITLE ── */}
      <motion.div
        initial={{ opacity:0, y:-12 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:2.4, delay:0.2, ease:[0.22,1,0.36,1] }}
        style={{ position:'absolute', top:'2.2%', left:0, right:0, textAlign:'center', zIndex:20, pointerEvents:'none' }}
      >
        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:'clamp(12px,1.65vw,22px)', letterSpacing:'0.44em', color:'rgba(222,200,158,0.92)', textTransform:'uppercase', marginBottom:6, textShadow:'0 0 48px rgba(155,32,8,0.20), 0 2px 22px rgba(0,0,0,0.82)'}}>
          Archivo de Cuarto Oscuro
        </div>
        <div style={{ fontFamily:'"EB Garamond",serif', fontSize:'clamp(10px,1.0vw,14px)', color:'rgba(158,130,90,0.52)', fontStyle:'italic', letterSpacing:'0.07em'}}>
          Registro visual de un semestre de observación, selección y memoria.
        </div>
      </motion.div>

      {/* ══════════════ ARCHIVE TABLE ══════════════ */}
      <div style={{
        position:'relative',
        width:'min(97vw, 1480px)',
        height:'min(90vh, 920px)',
        background:'#110a04',
        borderRadius:4,
        boxShadow:'0 48px 120px rgba(0,0,0,0.99), 0 0 0 1px rgba(38,16,4,0.50)',
        /*
         * Correct cinematic exposure:
         * brightness 0.82 = readable midtones, not crushed
         * sepia 6% = aged warmth
         * contrast 1.08 = gentle punch without flattening grain
         * saturate 0.88 = muted analog palette
         */
        filter:'sepia(6%) brightness(0.82) contrast(1.08) saturate(0.88)',
        zIndex:5,
        overflow:'hidden',
      }}>

        {/* WOOD GRAIN */}
        <WoodGrainTexture />

        {/* Subtle plank lines */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:1,
          backgroundImage:'repeating-linear-gradient(180deg,transparent 0px,transparent 188px,rgba(0,0,0,0.04) 188px,rgba(0,0,0,0.04) 190px)',
        }}/>

        {/* ── WARM AMBER OVERHEAD CENTER LIGHT ── */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:2,
          background:'radial-gradient(ellipse 72% 68% at 50% 46%, rgba(210,138,50,0.42) 0%, rgba(178,108,36,0.26) 32%, rgba(120,70,18,0.12) 58%, transparent 76%)'
        }}/>
        {/* secondary warm fill — prevents center going black */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:2,
          background:'radial-gradient(ellipse 48% 44% at 50% 48%, rgba(185,120,40,0.18) 0%, transparent 62%)'
        }}/>

        {/* ── SAFELIGHT POOL bleeding onto table surface ── */}
        <div style={{ position:'absolute', top:'-5%', left:'-5%', width:'42%', height:'46%', pointerEvents:'none', zIndex:2,
          background:'radial-gradient(ellipse at 15% 16%, rgba(210,45,8,0.32) 0%, rgba(165,25,5,0.13) 30%, rgba(105,14,3,0.05) 52%, transparent 68%)'
        }}/>

        {/* ═══════════════════════════════════════════
            ATMOSPHERIC PROPS — ALL at z-index 3
            Strictly in center corridor (x: 34–66%)
            and/or in gaps between top/bottom objects
        ═══════════════════════════════════════════ */}

        {/* LANTERN — upper-left corner, partially off-screen */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:2.2, delay:0.8 }}
          style={{ position:'absolute', top:'-5%', left:'-2%', zIndex:3, pointerEvents:'none' }}
        >
          <DarkroomLantern />
        </motion.div>

        {/* COMPASS — upper right corner */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.5, delay:2.2 }}
          style={{ position:'absolute', top:'4%', right:'3.5%', zIndex:3, pointerEvents:'none' }}
        >
          <Compass style={{ transform:'rotate(15deg)' }}/>
        </motion.div>

        {/* CAMERA — center upper (between left col right-edge ~35% and right col left-edge ~65%) */}
        <motion.div
          initial={{ opacity:0, scale:0.94 }} animate={{ opacity:1, scale:1 }}
          transition={{ duration:1.8, delay:1.2, ease:[0.22,1,0.36,1] }}
          style={{ position:'absolute', top:'5%', left:'36%', zIndex:3, pointerEvents:'none' }}
        >
          <VintageCamera />
        </motion.div>

        {/* FILM STRIP 1 — diagonal center, between top and bottom objects */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.5, delay:1.6 }}
          style={{ position:'absolute', top:'38%', left:'35%', zIndex:3, pointerEvents:'none' }}
        >
          <FilmStrip width={300} style={{ transform:'rotate(-11deg)' }}/>
        </motion.div>

        {/* FILM STRIP 2 — shorter, slightly lower center */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.5, delay:1.9 }}
          style={{ position:'absolute', top:'46%', left:'41%', zIndex:3, pointerEvents:'none' }}
        >
          <FilmStrip width={200} style={{ transform:'rotate(5deg)' }}/>
        </motion.div>

        {/* NEGATIVE STRIP — upper center below camera */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.5, delay:2.0 }}
          style={{ position:'absolute', top:'26%', left:'36%', zIndex:3, pointerEvents:'none' }}
        >
          <NegativeStrip style={{ transform:'rotate(-3deg)' }}/>
        </motion.div>

        {/* FILM CANISTER — center, near film strips */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.1 }}
          style={{ position:'absolute', top:'40%', left:'48%', zIndex:3, pointerEvents:'none' }}
        >
          <FilmCanister />
        </motion.div>

        {/* PENCIL — center, angled near camera */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:1.7 }}
          style={{ position:'absolute', top:'29%', left:'38%', zIndex:3, pointerEvents:'none' }}
        >
          <Pencil length={145} style={{ transform:'rotate(22deg)' }}/>
        </motion.div>

        {/* MAGNIFYING LOUPE — center-left, in vertical gap between grapefruit and excluir */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.3 }}
          style={{ position:'absolute', top:'49%', left:'34%', zIndex:3, pointerEvents:'none' }}
        >
          <MagnifyingLoupe style={{ transform:'rotate(-20deg)' }}/>
        </motion.div>

        {/* PAPER NOTE 1 — center lower */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.2 }}
          style={{ position:'absolute', top:'53%', left:'36%', zIndex:3, pointerEvents:'none' }}
        >
          <PaperNote lines={['exp. 1/125','f / 8','ISO 400']} style={{ width:82, transform:'rotate(-6deg)' }}/>
        </motion.div>

        {/* PAPER NOTE 2 — upper center, beside camera */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.5 }}
          style={{ position:'absolute', top:'8%', left:'36.5%', zIndex:3, pointerEvents:'none' }}
        >
          <PaperNote lines={['fotografiar','es seleccionar.']} style={{ width:100, transform:'rotate(-4deg)' }}/>
        </motion.div>

        {/* LOOSE POLAROID 1 — center bottom (above bio, right of loupe) */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.6 }}
          style={{ position:'absolute', top:'66%', left:'34%', zIndex:3, pointerEvents:'none' }}
        >
          <LoosePolaroid rotate={-8} src={PROJECTS.find(p=>p.id==='boletus')?.images[2]}/>
        </motion.div>

        {/* LOOSE POLAROID 2 — upper right, between camera and mapa */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.8 }}
          style={{ position:'absolute', top:'13%', right:'28%', zIndex:3, pointerEvents:'none' }}
        >
          <LoosePolaroid rotate={11} src={PROJECTS.find(p=>p.id==='mapa')?.images[3]}/>
        </motion.div>

        {/* ── EDGE BURN / inner shadow ── */}
        <div style={{ position:'absolute', inset:0, borderRadius:4,
          boxShadow:'inset 0 0 90px rgba(0,0,0,0.62), inset 0 0 32px rgba(0,0,0,0.38)',
          pointerEvents:'none', zIndex:50 }}/>

        {/* ── LANTERN GLOW: very faint red tint on table surface upper-left ── */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:51, borderRadius:4,
          background:'radial-gradient(ellipse 35% 30% at 0% 0%, rgba(205,30,5,0.18) 0%, rgba(145,18,3,0.06) 45%, transparent 62%)'
        }}/>

        {/* ═══════════════════════════════════════════
            ARCHIVE OBJECTS — z-index 4–6 (projects.js)
            ALWAYS above all props
        ═══════════════════════════════════════════ */}
        {PROJECTS.map(project => (
          <TableObject key={project.id} project={project} onClick={onOpen}/>
        ))}

      </div>

      {/* ── INSTRUCTION ── */}
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ duration:3.5, delay:5 }}
        style={{ position:'absolute', bottom:'2.2%', left:0, right:0, textAlign:'center', fontFamily:'"Special Elite",monospace', fontSize:'clamp(8px,0.82vw,11px)', letterSpacing:'0.30em', color:'rgba(152,115,70,0.32)', zIndex:20, pointerEvents:'none' }}
      >
        Selecciona un expediente sobre la mesa.
      </motion.div>
    </div>
  )
}
