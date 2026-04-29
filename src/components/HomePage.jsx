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
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', display: 'block', borderRadius: 3 }}
      aria-hidden="true"
    >
      <defs>
        <filter id="wg" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          {/* Directional grain: low X freq = long horizontal stripes, high Y freq = thin stripes */}
          <feTurbulence type="fractalNoise" baseFrequency="0.004 0.14" numOctaves="5" seed="22" result="noise"/>
          <feColorMatrix
            type="matrix"
            values="0.20 0 0 0 0.055
                    0.13 0 0 0 0.030
                    0.06 0 0 0 0.012
                    0    0 0 1 0"
            in="noise"
          />
        </filter>
        {/* Second pass — coarser plank variation */}
        <filter id="wg2" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.0015 0.005" numOctaves="3" seed="7" result="planks"/>
          <feColorMatrix
            type="matrix"
            values="0.08 0 0 0 0
                    0.05 0 0 0 0
                    0.02 0 0 0 0
                    0    0 0 0.55 0"
            in="planks"
          />
        </filter>
      </defs>
      {/* Base grain layer */}
      <rect width="100%" height="100%" filter="url(#wg)" rx="3"/>
      {/* Plank overlay — multiply-style darkening of plank boundaries */}
      <rect width="100%" height="100%" filter="url(#wg2)" rx="3" style={{ mixBlendMode: 'multiply' }}/>
    </svg>
  )
}

/* ══════════════════════════════════════════
   DECORATIVE ANALOG PROPS — non-clickable
══════════════════════════════════════════ */

function VintageCamera({ style }) {
  return (
    <div style={{ width: 248, pointerEvents: 'none', filter: 'drop-shadow(6px 18px 40px rgba(0,0,0,0.97)) drop-shadow(0 4px 10px rgba(0,0,0,0.82))', ...style }}>
      <svg viewBox="0 0 210 138" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        {Array.from({length:24},(_,i)=>{
          const a = (i/24)*Math.PI*2
          return <line key={i}
            x1={88+39*Math.cos(a)} y1={82+39*Math.sin(a)}
            x2={88+43*Math.cos(a)} y2={82+43*Math.sin(a)}
            stroke="#2e2618" strokeWidth="1.6"/>
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
        <rect x="148" y="50" width="14" height="9"  rx="1" fill="rgba(255,255,255,0.04)"/>
        <text x="134" y="108" fontSize="7.5" fill="#2a2418" fontFamily="monospace" letterSpacing="1.5">ARCHIVO  M</text>
        <text x="57"  y="116" fontSize="6.5" fill="#242018" fontFamily="monospace">SUMMICRON  1:2</text>
      </svg>
    </div>
  )
}

function FilmStrip({ width = 360, style }) {
  const perf   = Math.floor(width / 30)
  const frames = Math.floor(width / 72)
  return (
    <div style={{ width, pointerEvents: 'none', filter: 'drop-shadow(2px 6px 14px rgba(0,0,0,0.94))', ...style }}>
      <svg viewBox={`0 0 ${width} 70`} width={width} height={70}>
        <rect width={width} height={70} fill="#0e0b08" rx="2"/>
        {Array.from({length: perf},(_,i)=>(
          <rect key={`t${i}`} x={i*30+5} y={4}  width={16} height={12} rx={2.5} fill="#080604"/>
        ))}
        {Array.from({length: perf},(_,i)=>(
          <rect key={`b${i}`} x={i*30+5} y={54} width={16} height={12} rx={2.5} fill="#080604"/>
        ))}
        {Array.from({length: frames},(_,i)=>(
          <rect key={`f${i}`} x={i*72+4} y={22} width={64} height={26} fill="#0a0806" rx={1}/>
        ))}
        {/* edge scratches */}
        {Array.from({length: 6},(_,i)=>(
          <line key={`s${i}`} x1={i*(width/6)+18} y1={22} x2={i*(width/6)+14} y2={48} stroke="rgba(255,255,255,0.04)" strokeWidth="0.7"/>
        ))}
        <rect width={width} height={70} fill="rgba(50,8,2,0.22)" rx="2"/>
      </svg>
    </div>
  )
}

function FilmCanister({ color = '#b82820', label = '400', style }) {
  return (
    <div style={{ position: 'relative', width: 32, height: 60, pointerEvents: 'none', filter: 'drop-shadow(3px 6px 12px rgba(0,0,0,0.90))', ...style }}>
      <div style={{ position: 'absolute', top: -4, left: -3, width: 38, height: 11, background: 'linear-gradient(180deg,#302c20 0%,#1e1a12 100%)', borderRadius: '4px 4px 0 0', boxShadow: '0 1px 4px rgba(0,0,0,0.8)' }}/>
      <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg,#181410 0%,#2c2820 18%,#38322a 50%,#2c2820 82%,#181410 100%)', borderRadius: '3px', boxShadow: '3px 4px 14px rgba(0,0,0,0.9),inset -2px 0 5px rgba(0,0,0,0.5)', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 12, left: 2, right: 2, height: 26, background: color, opacity: 0.72, borderRadius: '2px' }}/>
        <div style={{ position: 'absolute', top: 18, left: 0, right: 0, textAlign: 'center', fontFamily: 'monospace', fontSize: 8, color: 'white', fontWeight: 'bold', opacity: 0.9 }}>{label}</div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, background: 'rgba(0,0,0,0.4)' }}/>
      </div>
    </div>
  )
}

function MagnifyingLoupe({ style }) {
  return (
    <div style={{ width: 70, height: 74, pointerEvents: 'none', filter: 'drop-shadow(3px 6px 12px rgba(0,0,0,0.88))', ...style }}>
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

function Pencil({ length = 140, style }) {
  return (
    <div style={{ width: length, pointerEvents: 'none', filter: 'drop-shadow(1px 4px 7px rgba(0,0,0,0.82))', ...style }}>
      <svg viewBox={`0 0 ${length} 11`} width={length} height={11}>
        <polygon points={`0,5.5 11,1 11,10`} fill="#c09828"/>
        <polygon points={`3,5.5 11,2.5 11,8.5`} fill="#160a00"/>
        <rect x="11" y="1" width={length-19} height="9" fill="#d4b438"/>
        <rect x="11" y="1" width={length-19} height="3.5" fill="rgba(255,255,255,0.07)"/>
        {/* pencil body grain lines */}
        {Array.from({length: 8}, (_, i) => (
          <line key={i} x1={14+i*14} y1="1" x2={14+i*14} y2="10" stroke="rgba(0,0,0,0.08)" strokeWidth="0.6"/>
        ))}
        <rect x={length-10} y="1.5" width="4"  height="8" fill="#8a8078" rx="1"/>
        <rect x={length-7}  y="2"   width="7"  height="7" fill="#cc8888" rx="1"/>
      </svg>
    </div>
  )
}

function PaperNote({ lines, style }) {
  return (
    <div style={{
      background: 'linear-gradient(168deg,#eee0b8 0%,#e5d8a8 100%)',
      padding: '9px 11px 10px',
      boxShadow: '2px 4px 12px rgba(0,0,0,0.72)',
      pointerEvents: 'none',
      position: 'relative',
      overflow: 'hidden',
      ...style,
    }}>
      {/* paper grain */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '80px 80px' }} />
      {lines.map((l, i) => (
        <div key={i} style={{ fontFamily: '"EB Garamond",serif', fontStyle: 'italic', fontSize: 10.5, color: '#251508', lineHeight: 1.65, letterSpacing: '0.01em', position: 'relative' }}>{l}</div>
      ))}
    </div>
  )
}

function LoosePolaroid({ src, rotate = 0, style }) {
  return (
    <div style={{ background: '#f5f0e8', padding: '6px 6px 22px', boxShadow: '3px 5px 16px rgba(0,0,0,0.82)', transform: `rotate(${rotate}deg)`, pointerEvents: 'none', ...style }}>
      <div style={{ width: 90, height: 70, overflow: 'hidden', background: '#111' }}>
        {src && <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(18%) contrast(1.08)' }}/>}
      </div>
    </div>
  )
}

/* ── Developed negative strip ── */
function NegativeStrip({ images = [], style }) {
  return (
    <div style={{ pointerEvents: 'none', filter: 'drop-shadow(2px 8px 18px rgba(0,0,0,0.94))', ...style }}>
      <svg viewBox="0 0 280 52" width={280} height={52}>
        <rect width={280} height={52} fill="#090704" rx="2"/>
        {/* sprocket holes */}
        {Array.from({length:9},(_,i)=>(
          <rect key={`t${i}`} x={i*31+4} y={3}  width={14} height={9} rx={2} fill="#060402"/>
        ))}
        {Array.from({length:9},(_,i)=>(
          <rect key={`b${i}`} x={i*31+4} y={40} width={14} height={9} rx={2} fill="#060402"/>
        ))}
        {/* frames as dark amber */}
        {[0,1,2,3].map(i=>(
          <rect key={i} x={i*70+1} y={16} width={66} height={22} fill={`rgba(${60+i*8},${28+i*4},${4+i*2},0.7)`} rx="1"/>
        ))}
        <rect width={280} height={52} fill="rgba(28,8,2,0.28)" rx="2"/>
      </svg>
    </div>
  )
}

/* ══════════════════════════════════════════
   FLOATING DUST MOTES
══════════════════════════════════════════ */
function DustParticles() {
  const pts = useMemo(() => Array.from({length:28},(_,i) => ({
    id: i,
    x: Math.random()*100, y: Math.random()*100,
    sz: Math.random()*2.6+0.4,
    dur: Math.random()*18+12,
    del: Math.random()*11,
    op: Math.random()*0.30+0.05,
  })),[])
  return (
    <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:4, overflow:'hidden' }}>
      {pts.map(p => (
        <motion.div key={p.id}
          style={{ position:'absolute', left:`${p.x}%`, top:`${p.y}%`, width:p.sz, height:p.sz, borderRadius:'50%', background:`rgba(220,168,90,${p.op})` }}
          animate={{ y:[0,-52,-10,-66,0], x:[0,11,-7,15,0], opacity:[p.op,p.op*.2,p.op*.65,p.op*.1,p.op] }}
          transition={{ duration:p.dur, delay:p.del, repeat:Infinity, ease:'easeInOut' }}
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
      width: '100vw', height: '100vh', overflow: 'hidden',
      position: 'relative',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: 'radial-gradient(ellipse 100% 100% at 50% 50%, #160a04 0%, #0a0502 50%, #030101 100%)',
    }}>

      {/* ── SAFELIGHT — tight bright source, upper-left corner ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:2,
        background:'radial-gradient(ellipse 22% 20% at 5% 5%, rgba(230,35,8,0.82) 0%, rgba(185,22,5,0.50) 30%, rgba(130,15,3,0.22) 56%, transparent 72%)'
      }}/>
      {/* ── SAFELIGHT — wide ambient fill spreading right and down ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:2,
        background:'radial-gradient(ellipse 60% 52% at 10% 8%, rgba(175,25,6,0.48) 0%, rgba(110,14,3,0.20) 45%, transparent 68%)'
      }}/>
      {/* ── very faint warm secondary bounce from table surface ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:2,
        background:'radial-gradient(ellipse 40% 28% at 50% 95%, rgba(80,35,8,0.18) 0%, transparent 60%)'
      }}/>

      {/* ── dust ── */}
      <DustParticles />

      {/* ── HEAVY CINEMATIC VIGNETTE ── */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none', zIndex:12,
        background:'radial-gradient(ellipse 68% 62% at 50% 50%, transparent 18%, rgba(0,0,0,0.50) 58%, rgba(0,0,0,0.92) 84%, rgba(0,0,0,0.99) 100%)',
      }}/>

      {/* ── TITLE ── */}
      <motion.div
        initial={{ opacity:0, y:-14 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:2.4, delay:0.2, ease:[0.22,1,0.36,1] }}
        style={{ position:'absolute', top:'2.8%', left:0, right:0, textAlign:'center', zIndex:20, pointerEvents:'none', padding:'0 20px' }}
      >
        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:'clamp(11px,1.6vw,20px)', letterSpacing:'0.46em', color:'rgba(218,196,158,0.82)', textTransform:'uppercase', marginBottom:6, textShadow:'0 0 60px rgba(170,35,8,0.30), 0 2px 30px rgba(0,0,0,0.80)' }}>
          Archivo de Cuarto Oscuro
        </div>
        <div style={{ fontFamily:'"EB Garamond",serif', fontSize:'clamp(9px,0.95vw,13px)', color:'rgba(155,130,92,0.42)', fontStyle:'italic', letterSpacing:'0.08em' }}>
          Registro visual de un semestre de observación, selección y memoria.
        </div>
      </motion.div>

      {/* ══════════════ ARCHIVE TABLE ══════════════ */}
      <div style={{
        position:'relative',
        width:'min(97vw, 1480px)',
        height:'min(90vh, 920px)',
        /* dark walnut base — grain SVG overlays this */
        background:'#0d0804',
        borderRadius:4,
        boxShadow:`
          0 48px 120px rgba(0,0,0,0.98),
          0 0 0 1px rgba(45,18,4,0.45),
          inset 0 1px 0 rgba(255,160,60,0.03),
          inset 0 -2px 0 rgba(0,0,0,0.80)
        `,
        /* Global photographic color grade applied to entire table scene */
        filter:'sepia(10%) brightness(0.71) contrast(1.24) saturate(0.82)',
        zIndex:5,
        overflow:'hidden',
      }}>

        {/* ─── SVG WOOD GRAIN TEXTURE ─── */}
        <WoodGrainTexture />

        {/* ─── subtle plank division lines ─── */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:1,
          backgroundImage:`
            repeating-linear-gradient(180deg, transparent 0px, transparent 180px, rgba(0,0,0,0.055) 180px, rgba(0,0,0,0.055) 182px),
            repeating-linear-gradient(180deg, transparent 0px, transparent 320px, rgba(0,0,0,0.04) 320px, rgba(0,0,0,0.04) 322px)
          `,
        }}/>

        {/* ─── DECORATIVE PROPS ─── */}

        {/* Vintage camera — center upper, slightly left */}
        <motion.div
          initial={{ opacity:0, scale:0.92 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:1.8, delay:1.2, ease:[0.22,1,0.36,1] }}
          style={{ position:'absolute', top:'6%', left:'34%', zIndex:8 }}
        >
          <VintageCamera />
        </motion.div>

        {/* Film strip 1 — diagonal, center-left */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.5, delay:1.5 }}
          style={{ position:'absolute', top:'38%', left:'20%', zIndex:7 }}
        >
          <FilmStrip width={370} style={{ transform:'rotate(-13deg)' }}/>
        </motion.div>

        {/* Film strip 2 — shorter, center */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.5, delay:1.7 }}
          style={{ position:'absolute', top:'47%', left:'38%', zIndex:6 }}
        >
          <FilmStrip width={240} style={{ transform:'rotate(6deg)' }}/>
        </motion.div>

        {/* Negative strip — center right */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.5, delay:2.0 }}
          style={{ position:'absolute', top:'24%', left:'38%', zIndex:7 }}
        >
          <NegativeStrip style={{ transform:'rotate(-4deg)' }}/>
        </motion.div>

        {/* Film canisters */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:1.8 }}
          style={{ position:'absolute', top:'38%', left:'44%', zIndex:9 }}
        >
          <FilmCanister color="#b82020" label="400"/>
        </motion.div>
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.0 }}
          style={{ position:'absolute', top:'36%', left:'48%', zIndex:9 }}
        >
          <FilmCanister color="#1e3c78" label="100" style={{ height:52, width:26 }}/>
        </motion.div>
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.2 }}
          style={{ position:'absolute', top:'41%', left:'52%', zIndex:9 }}
        >
          <FilmCanister color="#3a7820" label="200" style={{ height:48, width:24 }}/>
        </motion.div>

        {/* Magnifying loupe */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.2 }}
          style={{ position:'absolute', top:'57%', left:'26%', zIndex:8 }}
        >
          <MagnifyingLoupe style={{ transform:'rotate(-22deg)' }}/>
        </motion.div>

        {/* Pencil — upper center */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:1.6 }}
          style={{ position:'absolute', top:'30%', left:'20%', zIndex:7 }}
        >
          <Pencil length={158} style={{ transform:'rotate(24deg)' }}/>
        </motion.div>

        {/* Pencil 2 — near camera */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.4 }}
          style={{ position:'absolute', top:'15%', left:'30%', zIndex:7 }}
        >
          <Pencil length={110} style={{ transform:'rotate(-35deg)' }}/>
        </motion.div>

        {/* Paper note 1 */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:1.9 }}
          style={{ position:'absolute', top:'52%', left:'22%', zIndex:7 }}
        >
          <PaperNote
            lines={['a punto de', 'cumplir 20', '—', 'Madrid 2025']}
            style={{ width:94, transform:'rotate(4.5deg)' }}
          />
        </motion.div>

        {/* Paper note 2 */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.3 }}
          style={{ position:'absolute', top:'8%', left:'36%', zIndex:7 }}
        >
          <PaperNote
            lines={['fotografiar', 'es seleccionar.']}
            style={{ width:104, transform:'rotate(-4deg)' }}
          />
        </motion.div>

        {/* Paper note 3 — near right canisters */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.6 }}
          style={{ position:'absolute', top:'55%', left:'43%', zIndex:7 }}
        >
          <PaperNote
            lines={['exp. 1/125', 'f/8', 'ISO 400']}
            style={{ width:78, transform:'rotate(-6.5deg)' }}
          />
        </motion.div>

        {/* Loose polaroid 1 — lower center */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.4 }}
          style={{ position:'absolute', top:'68%', left:'28%', zIndex:6 }}
        >
          <LoosePolaroid rotate={-9} src={PROJECTS.find(p=>p.id==='boletus')?.images[2]}/>
        </motion.div>

        {/* Loose polaroid 2 — upper right area */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.6 }}
          style={{ position:'absolute', top:'14%', right:'27%', zIndex:6 }}
        >
          <LoosePolaroid rotate={13} src={PROJECTS.find(p=>p.id==='mapa')?.images[3]}/>
        </motion.div>

        {/* Loose polaroid 3 — near boletus stack */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:1.3, delay:2.8 }}
          style={{ position:'absolute', top:'32%', right:'22%', zIndex:6 }}
        >
          <LoosePolaroid rotate={-7} src={PROJECTS.find(p=>p.id==='boletus')?.images[8]}/>
        </motion.div>

        {/* ─── Heavy edge burn / inner vignette on table surface ─── */}
        <div style={{ position:'absolute', inset:0, borderRadius:4,
          boxShadow:'inset 0 0 110px rgba(0,0,0,0.78), inset 0 0 40px rgba(0,0,0,0.55)',
          pointerEvents:'none', zIndex:50 }}/>

        {/* ─── Safelight glow bleeding onto table surface ─── */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:51, borderRadius:4,
          background:'radial-gradient(ellipse 45% 38% at 2% 2%, rgba(210,28,6,0.36) 0%, rgba(145,18,4,0.14) 42%, transparent 65%)'
        }}/>

        {/* ─── CLICKABLE PROJECT OBJECTS ─── */}
        {PROJECTS.map((project) => (
          <TableObject key={project.id} project={project} onClick={onOpen} />
        ))}
      </div>

      {/* ── INSTRUCTION ── */}
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ duration:3.5, delay:4 }}
        style={{ position:'absolute', bottom:'2.2%', left:0, right:0, textAlign:'center', fontFamily:'"Special Elite",monospace', fontSize:'clamp(8px,0.82vw,11px)', letterSpacing:'0.30em', color:'rgba(158,118,70,0.32)', zIndex:20, pointerEvents:'none' }}
      >
        Selecciona un expediente sobre la mesa.
      </motion.div>
    </div>
  )
}
