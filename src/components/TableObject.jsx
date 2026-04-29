import { motion } from 'framer-motion'

/* ── paper grain data URI (reused on all paper surfaces) ── */
const GRAIN_URL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' seed='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

function PaperGrain({ opacity = 0.10 }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: GRAIN_URL, backgroundSize: '120px 120px',
      opacity, mixBlendMode: 'multiply',
    }}/>
  )
}

function AgeStain({ style }) {
  return (
    <div style={{
      position: 'absolute', pointerEvents: 'none',
      background: 'radial-gradient(ellipse, rgba(60,30,4,0.22) 0%, rgba(40,18,2,0.10) 50%, transparent 75%)',
      borderRadius: '50%',
      ...style,
    }}/>
  )
}

/* ─── CONTACT SHEET (GRAPEFRUIT) ─── */
function ContactSheet({ images, label }) {
  return (
    <div style={{ width: 510, position: 'relative' }}>
      {/* stacked paper layers — thicker, more offset */}
      {[
        { top: 14, left: 11, right: -12, rotate: '3.5deg',  bg: '#b8b2a0', shadow: '2px 3px 10px rgba(0,0,0,0.55)' },
        { top:  9, left:  8, right:  -8, rotate: '-2.2deg', bg: '#c8c2b0', shadow: '1px 2px 8px rgba(0,0,0,0.45)' },
        { top:  5, left:  4, right:  -4, rotate:  '1.1deg', bg: '#d4cebe', shadow: '1px 2px 6px rgba(0,0,0,0.35)' },
        { top:  2, left:  2, right:  -1, rotate: '-0.5deg', bg: '#ddd8c8', shadow: '1px 1px 4px rgba(0,0,0,0.24)' },
      ].map((l, i) => (
        <div key={i} style={{ position:'absolute', top:l.top, left:l.left, right:l.right, bottom:-10, background:l.bg, transform:`rotate(${l.rotate})`, boxShadow:l.shadow }} />
      ))}

      {/* main sheet */}
      <div style={{ position:'relative', background:'#e8e2d0', padding:'16px 16px 18px', boxShadow:'6px 8px 32px rgba(0,0,0,0.78)', overflow:'hidden' }}>
        <PaperGrain opacity={0.14}/>
        <AgeStain style={{ bottom:-20, right:-20, width:120, height:120 }}/>
        <AgeStain style={{ top:10, left:-10, width:80, height:60 }}/>

        {/* worn top-right corner fold */}
        <div style={{ position:'absolute', top:0, right:0, width:22, height:22, background:'linear-gradient(225deg,#ccc6b4 0%,#b8b2a0 100%)', clipPath:'polygon(100% 0,100% 100%,0 0)', pointerEvents:'none'}}/>

        {/* header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:12, borderBottom:'1px solid rgba(0,0,0,0.14)', paddingBottom:8 }}>
          <div>
            <div style={{ fontFamily:'"Special Elite",monospace', fontSize:20, color:'#120802', letterSpacing:'0.22em' }}>{label}</div>
            <div style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:12, color:'#3a2410', marginTop:3 }}>Pintura para el viento</div>
          </div>
          <div style={{ fontFamily:'monospace', fontSize:7.5, color:'#6a5040', letterSpacing:'0.1em', textAlign:'right', lineHeight:1.6 }}>CONTACT PRINT<br/>ROLL 01</div>
        </div>

        {/* 3×4 thumbnail grid */}
        {[0,1,2].map(row => (
          <div key={row} style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:4, marginBottom:4 }}>
            {[0,1,2,3].map(col => {
              const idx = (row*4+col) % images.length
              return (
                <div key={col} style={{ aspectRatio:'3/2', overflow:'hidden', background:'#0a0a0a', border:'1px solid rgba(0,0,0,0.28)', position:'relative' }}>
                  <img src={images[idx]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', filter:`grayscale(${60+row*9}%) contrast(1.20)`, opacity:0.88-row*0.08 }}/>
                  <div style={{ position:'absolute', inset:0, boxShadow:'inset 0 0 5px rgba(0,0,0,0.35)'}}/>
                </div>
              )
            })}
          </div>
        ))}

        {/* frame numbers */}
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:7, paddingTop:5, borderTop:'1px solid rgba(0,0,0,0.09)' }}>
          {Array.from({length:12},(_,i)=>(
            <div key={i} style={{ fontFamily:'monospace', fontSize:7, color:'rgba(0,0,0,0.28)'}}>{i+1}</div>
          ))}
        </div>

        {/* paper clip */}
        <div style={{ position:'absolute', top:-18, right:48, width:20, height:42, border:'3px solid #b0a898', borderRadius:'10px 10px 4px 4px', borderBottom:'none' }}/>

        {/* handwritten annotation */}
        <div style={{ position:'absolute', bottom:22, right:18, fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:11, color:'rgba(80,40,10,0.70)', transform:'rotate(-3deg)' }}>
          selección<br/>final
        </div>
      </div>
    </div>
  )
}

/* ─── DOSSIER (EXCLUIR) ─── */
function Dossier({ images, label }) {
  return (
    <div style={{ width: 430, position:'relative' }}>
      {/* folder tab */}
      <div style={{ position:'absolute', top:-18, left:20, width:95, height:20, background:'#9a7828', borderRadius:'6px 6px 0 0' }}/>
      {/* second dossier underneath */}
      <div style={{ position:'absolute', top:6, left:-8, right:-10, bottom:-10, background:'#8a6820', transform:'rotate(2deg)', boxShadow:'3px 4px 14px rgba(0,0,0,0.62)'}}/>
      {/* third dossier */}
      <div style={{ position:'absolute', top:11, left:-14, right:-16, bottom:-16, background:'#7a5c18', transform:'rotate(-1.4deg)', boxShadow:'2px 3px 10px rgba(0,0,0,0.50)'}}/>

      {/* peeking photo upper-right */}
      <div style={{ position:'absolute', top:-14, right:16, width:128, height:96, overflow:'hidden', transform:'rotate(6deg)', border:'2.5px solid #807870', boxShadow:'3px 3px 10px rgba(0,0,0,0.72)' }}>
        <img src={images[1]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'sepia(55%) contrast(1.05)'}}/>
      </div>

      {/* main folder body */}
      <div style={{ background:'linear-gradient(162deg,#c09848 0%,#b08838 55%,#a07830 100%)', padding:'18px 16px 16px', marginTop:2, boxShadow:'6px 7px 28px rgba(0,0,0,0.82)', position:'relative', overflow:'hidden' }}>
        <PaperGrain opacity={0.10}/>
        <AgeStain style={{ bottom:-30, right:-20, width:160, height:140 }}/>
        <AgeStain style={{ top:20, left:10, width:90, height:70 }}/>

        {/* worn bottom-right corner */}
        <div style={{ position:'absolute', bottom:0, right:0, width:90, height:90, background:'radial-gradient(at 100% 100%, rgba(0,0,0,0.20) 0%, transparent 68%)', pointerEvents:'none'}}/>

        {/* preview image */}
        <div style={{ width:'100%', height:155, overflow:'hidden', marginBottom:14, border:'1px solid rgba(0,0,0,0.22)', position:'relative' }}>
          <img src={images[0]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'sepia(28%) contrast(1.08)'}}/>
          <div style={{ position:'absolute', inset:0, boxShadow:'inset 0 0 12px rgba(0,0,0,0.45)'}}/>
        </div>

        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:30, color:'#120800', letterSpacing:'0.30em', marginBottom:5 }}>{label}</div>
        <div style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:13, color:'#3a1800', marginBottom:8, letterSpacing:'0.05em' }}>
          Fotografías en selección.
        </div>

        {/* ARCHIVED stamp */}
        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:22, color:'#c01000', border:'3.5px solid #c01000', padding:'3px 12px', display:'inline-block', transform:'rotate(-9deg)', opacity:0.86, letterSpacing:'0.12em' }}>
          ARCHIVED
        </div>

        {/* handwritten note */}
        <div style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:15, color:'#c04c14', marginTop:12, marginLeft:5, transform:'rotate(-1.8deg)', display:'inline-block' }}>
          obs. descartadas
        </div>

        {/* archive ref */}
        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:9.5, color:'#3a1a00', letterSpacing:'0.14em', marginTop:16 }}>
          REF: 42/84 — ARCHIVO J.D.
        </div>
      </div>
    </div>
  )
}

/* ─── MAP (MAPA) ─── */
function MapObject({ images, label }) {
  return (
    <div style={{ width: 510, position:'relative' }}>
      {/* dog-ear corner fold */}
      <div style={{ position:'absolute', bottom:0, right:0, width:38, height:38, background:'#a89e72', clipPath:'polygon(100% 0,100% 100%,0 100%)', zIndex:10 }}/>
      <div style={{ position:'absolute', bottom:0, right:0, width:38, height:38, background:'rgba(0,0,0,0.18)', clipPath:'polygon(0 0,100% 0,0 100%)', zIndex:9 }}/>

      <div style={{
        background:'#c4b880',
        padding:'14px',
        boxShadow:'6px 7px 28px rgba(0,0,0,0.78)',
        position:'relative',
        overflow:'hidden',
        backgroundImage:`linear-gradient(rgba(0,0,0,0.10) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.10) 1px,transparent 1px),linear-gradient(rgba(70,52,14,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(70,52,14,0.07) 1px,transparent 1px)`,
        backgroundSize:'18px 18px,18px 18px,90px 90px,90px 90px',
        clipPath:'polygon(0 0,100% 0,100% 93%,96% 100%,0 100%)',
      }}>
        <PaperGrain opacity={0.09}/>
        <AgeStain style={{ top:-20, right:30, width:180, height:140 }}/>
        <AgeStain style={{ bottom:30, left:20, width:120, height:100 }}/>

        {/* aged fold line across center */}
        <div style={{ position:'absolute', top:'48%', left:0, right:0, height:1, background:'rgba(0,0,0,0.08)', pointerEvents:'none'}}/>
        <div style={{ position:'absolute', left:'52%', top:0, bottom:0, width:1, background:'rgba(0,0,0,0.06)', pointerEvents:'none'}}/>

        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:21, color:'#160e06', letterSpacing:'0.28em', marginBottom:7 }}>{label}</div>
        <div style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:11, color:'#382810', marginBottom:9, letterSpacing:'0.04em' }}>No hay mapa para esto.</div>

        {/* photo 1 */}
        <div style={{ position:'absolute', top:10, right:10, width:150, height:112, overflow:'hidden', transform:'rotate(6.5deg)', border:'5px solid white', boxShadow:'3px 4px 12px rgba(0,0,0,0.72)' }}>
          <img src={images[0]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
        </div>
        {/* photo 2 */}
        <div style={{ position:'absolute', top:112, right:22, width:120, height:92, overflow:'hidden', transform:'rotate(-4.5deg)', border:'5px solid white', boxShadow:'3px 3px 10px rgba(0,0,0,0.65)' }}>
          <img src={images[2]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
        </div>
        {/* photo 3 */}
        <div style={{ position:'absolute', top:206, left:18, width:108, height:84, overflow:'hidden', transform:'rotate(3.5deg)', border:'5px solid white', boxShadow:'2px 3px 9px rgba(0,0,0,0.60)' }}>
          <img src={images[1]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
        </div>

        <div style={{ height:252 }}/>

        <div style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:14, color:'#1a1004', lineHeight:1.6, marginBottom:8 }}>
          no hay mapa<br/>para esto.
        </div>
        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:9.5, color:'#38240e', letterSpacing:'0.17em' }}>{label}</div>
      </div>
    </div>
  )
}

/* ─── POLAROIDS (BOLETUS) ─── */
function Polaroids({ images, label }) {
  const offsets = [
    { rotate:'-2deg',  tx:0,   ty:0,   z:6 },
    { rotate:'-11deg', tx:-22, ty:14,  z:5 },
    { rotate: '10deg', tx:18,  ty:18,  z:4 },
    { rotate: '-7deg', tx:-12, ty:26,  z:3 },
    { rotate:  '6deg', tx:14,  ty:32,  z:2 },
  ]
  return (
    <div style={{ width:440, position:'relative' }}>
      {/* header notebook card */}
      <div style={{ background:'linear-gradient(160deg,#ead8b8,#dccca8)', padding:'14px 16px 12px', marginBottom:10, boxShadow:'3px 4px 16px rgba(0,0,0,0.65)', position:'relative', overflow:'hidden' }}>
        <PaperGrain opacity={0.12}/>
        <div style={{ position:'absolute', left:36, top:0, bottom:0, width:1, background:'rgba(180,90,70,0.30)'}}/>
        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:22, color:'#140802', letterSpacing:'0.22em', marginBottom:4 }}>{label}</div>
        <div style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:13, color:'#5a3820', marginBottom:12 }}>fotodisco</div>
        <div style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:13, color:'#3a2810', lineHeight:1.7 }}>
          {['track 01','track 02','track 03','track 04','track 05','track 06'].map((t,i)=><div key={i}>{t}</div>)}
        </div>
        <AgeStain style={{ bottom:-20, right:-10, width:100, height:80 }}/>
      </div>

      {/* polaroid stack */}
      <div style={{ position:'relative', height:240 }}>
        {offsets.map((o, i) => (
          <div key={i} style={{
            position:'absolute', top:0, left:0,
            background:'linear-gradient(145deg,#f5efe2,#ede5d4)',
            padding:'9px 9px 32px',
            width:192,
            boxShadow:'4px 6px 20px rgba(0,0,0,0.82)',
            transform:`rotate(${o.rotate}) translate(${o.tx}px,${o.ty}px)`,
            zIndex:o.z,
          }}>
            <div style={{ width:'100%', height:140, overflow:'hidden', background:'#0d0d0d', position:'relative' }}>
              <img src={images[i%images.length]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'contrast(1.08) sepia(10%)'}}/>
              <div style={{ position:'absolute', inset:0, boxShadow:'inset 0 0 8px rgba(0,0,0,0.40)'}}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── DOSSIER CARD (BIO) ─── */
function DossierCard({ images, label }) {
  return (
    <div style={{ width:318, position:'relative' }}>
      <div style={{ position:'absolute', top:7, left:-7, right:-7, bottom:-7, background:'#a09060', transform:'rotate(1.4deg)', boxShadow:'3px 3px 12px rgba(0,0,0,0.65)'}}/>
      <div style={{ position:'absolute', top:12, left:-12, right:-12, bottom:-12, background:'#907850', transform:'rotate(-1deg)', boxShadow:'2px 2px 8px rgba(0,0,0,0.55)'}}/>

      <div style={{ background:'linear-gradient(155deg,#cec29a,#beb088,#b0a07c)', padding:'13px', boxShadow:'5px 7px 28px rgba(0,0,0,0.86)', position:'relative', overflow:'hidden' }}>
        <PaperGrain opacity={0.11}/>
        <AgeStain style={{ bottom:-20, right:-10, width:140, height:120 }}/>
        <AgeStain style={{ top:30, left:-10, width:80, height:60 }}/>

        {/* VERIFIED stamp */}
        <div style={{ position:'absolute', top:11, right:9, fontFamily:'"Special Elite",monospace', fontSize:13, color:'#006000', border:'3px solid #006000', padding:'2px 8px', transform:'rotate(9deg)', opacity:0.78, letterSpacing:'0.06em' }}>
          VERIFIED
        </div>

        {/* portrait */}
        <div style={{ width:'100%', height:205, overflow:'hidden', border:'1px solid rgba(0,0,0,0.24)', marginBottom:12, position:'relative' }}>
          <img src={images[0]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center', filter:'sepia(14%) contrast(1.06)'}}/>
          <div style={{ position:'absolute', inset:0, boxShadow:'inset 0 0 14px rgba(0,0,0,0.45)'}}/>
        </div>

        <div style={{ borderTop:'1px solid rgba(0,0,0,0.22)', paddingTop:8 }}>
          <div style={{ fontFamily:'"Special Elite",monospace', fontSize:8.5, color:'#3a1e08', letterSpacing:'0.13em', marginBottom:6 }}>DOSSIER DE AUTORA</div>
          <div style={{ fontFamily:'"EB Garamond",serif', fontSize:12, color:'#5a3820', fontStyle:'italic' }}>Madrid — 2024/2025</div>
        </div>
      </div>
    </div>
  )
}

/* ─── FRAMER MOTION VARIANTS ─── */
const containerVariants = {
  hidden:  { opacity:0, y:36, scale:0.90 },
  visible: (r) => ({ opacity:1, y:0, scale:1, rotate:r }),
  hover:   (r) => ({ scale:1.035, y:-10, rotate:r }),
}
const glowVariants = {
  visible: { opacity:0 },
  hover:   { opacity:1 },
}

/* ─── MAIN EXPORT ─── */
export default function TableObject({ project, onClick }) {
  const { label, type, images, position, rotation, zIndex, delay } = project
  return (
    <motion.div
      custom={rotation}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration:1.3, delay, ease:[0.22,1,0.36,1] }}
      onClick={() => onClick(project)}
      style={{
        position:'absolute', ...position, zIndex, cursor:'pointer',
        filter:'drop-shadow(2px 14px 38px rgba(0,0,0,0.99)) drop-shadow(0 3px 8px rgba(0,0,0,0.88))',
      }}
    >
      {/* red safelight glow on hover */}
      <motion.div
        variants={glowVariants}
        transition={{ duration:0.26 }}
        style={{ position:'absolute', inset:-34, background:'radial-gradient(ellipse at center, rgba(155,20,5,0.46) 0%, transparent 64%)', filter:'blur(16px)', zIndex:-1, pointerEvents:'none' }}
      />
      {type==='contact-sheet' && <ContactSheet images={images} label={label}/>}
      {type==='dossier'       && <Dossier      images={images} label={label}/>}
      {type==='map'           && <MapObject    images={images} label={label}/>}
      {type==='polaroids'     && <Polaroids    images={images} label={label}/>}
      {type==='dossier-card'  && <DossierCard  images={images} label={label}/>}
    </motion.div>
  )
}
