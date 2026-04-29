import { motion } from 'framer-motion'

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' seed='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

/* ── paper grain overlay ── */
function Grain({ opacity = 0.13 }) {
  return <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:GRAIN, backgroundSize:'110px 110px', opacity, mixBlendMode:'multiply' }}/>
}

/* ── age/stain overlay ── */
function Stain({ style }) {
  return <div style={{ position:'absolute', pointerEvents:'none', background:'radial-gradient(ellipse, rgba(55,26,4,0.20) 0%, rgba(38,15,2,0.09) 52%, transparent 76%)', borderRadius:'50%', ...style }}/>
}

/* ─── CONTACT SHEET (GRAPEFRUIT) — 410px ─── */
function ContactSheet({ images, label }) {
  return (
    <div style={{ width:410, position:'relative' }}>
      {/* stacked paper layers */}
      {[
        { top:12, left:10, right:-11, rotate: '3.4deg',  bg:'#b0aa98' },
        { top: 8, left: 7, right: -7, rotate:'-2.1deg',  bg:'#c0baa8' },
        { top: 4, left: 4, right: -3, rotate: '1.0deg',  bg:'#d0cab8' },
        { top: 1, left: 1, right:  0, rotate:'-0.4deg',  bg:'#dcd6c4' },
      ].map((l,i) => (
        <div key={i} style={{ position:'absolute', top:l.top, left:l.left, right:l.right, bottom:-8, background:l.bg, transform:`rotate(${l.rotate})`, boxShadow:'1px 2px 7px rgba(0,0,0,0.50)' }}/>
      ))}

      {/* main sheet */}
      <div style={{ position:'relative', background:'#e4deca', padding:'14px 14px 16px', boxShadow:'5px 7px 28px rgba(0,0,0,0.80)', overflow:'hidden' }}>
        <Grain opacity={0.18}/>
        <Stain style={{ bottom:-15, right:-15, width:110, height:90 }}/>
        <Stain style={{ top:5, left:-5, width:70, height:55 }}/>

        {/* worn corner */}
        <div style={{ position:'absolute', top:0, right:0, width:18, height:18, background:'linear-gradient(225deg,#c4be9e 0%,#aaa890 100%)', clipPath:'polygon(100% 0,100% 100%,0 0)', pointerEvents:'none'}}/>

        {/* header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:10, borderBottom:'1px solid rgba(0,0,0,0.13)', paddingBottom:7 }}>
          <div>
            <div style={{ fontFamily:'"Special Elite",monospace', fontSize:18, color:'#120802', letterSpacing:'0.22em' }}>{label}</div>
            <div style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:11, color:'#3a2410', marginTop:2 }}>Pintura para el viento</div>
          </div>
          <div style={{ fontFamily:'monospace', fontSize:7, color:'#6a5040', letterSpacing:'0.09em', textAlign:'right', lineHeight:1.55 }}>CONTACT PRINT<br/>ROLL 01</div>
        </div>

        {/* 3×4 grid */}
        {[0,1,2].map(row => (
          <div key={row} style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:3, marginBottom:3 }}>
            {[0,1,2,3].map(col => {
              const idx = (row*4+col) % images.length
              return (
                <div key={col} style={{ aspectRatio:'3/2', overflow:'hidden', background:'#0a0a0a', border:'1px solid rgba(0,0,0,0.26)', position:'relative' }}>
                  <img src={images[idx]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', filter:`grayscale(${58+row*9}%) contrast(1.18)`, opacity:0.88-row*0.07 }}/>
                  <div style={{ position:'absolute', inset:0, boxShadow:'inset 0 0 4px rgba(0,0,0,0.32)'}}/>
                </div>
              )
            })}
          </div>
        ))}

        {/* frame numbers */}
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:6, paddingTop:4, borderTop:'1px solid rgba(0,0,0,0.08)' }}>
          {Array.from({length:12},(_,i) => <div key={i} style={{ fontFamily:'monospace', fontSize:6.5, color:'rgba(0,0,0,0.27)'}}>{i+1}</div>)}
        </div>

        {/* paper clip */}
        <div style={{ position:'absolute', top:-16, right:44, width:19, height:38, border:'2.5px solid #b0a898', borderRadius:'9px 9px 4px 4px', borderBottom:'none' }}/>

        {/* handwritten annotation */}
        <div style={{ position:'absolute', bottom:20, right:16, fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:10.5, color:'rgba(70,35,8,0.68)', transform:'rotate(-3deg)' }}>
          selección<br/>final
        </div>
      </div>
    </div>
  )
}

/* ─── DOSSIER (EXCLUIR) — 350px ─── */
function Dossier({ images, label }) {
  return (
    <div style={{ width:350, position:'relative' }}>
      {/* folder tab */}
      <div style={{ position:'absolute', top:-16, left:18, width:88, height:18, background:'#8a6c20', borderRadius:'5px 5px 0 0' }}/>
      {/* dossiers underneath */}
      <div style={{ position:'absolute', top:5, left:-7, right:-9, bottom:-9, background:'#7c6018', transform:'rotate(2deg)', boxShadow:'2px 3px 12px rgba(0,0,0,0.60)'}}/>
      <div style={{ position:'absolute', top:10, left:-13, right:-15, bottom:-14, background:'#6e5412', transform:'rotate(-1.3deg)', boxShadow:'2px 2px 9px rgba(0,0,0,0.50)'}}/>

      {/* peeking photo */}
      <div style={{ position:'absolute', top:-12, right:14, width:118, height:88, overflow:'hidden', transform:'rotate(5.5deg)', border:'2px solid #7a7268', boxShadow:'2px 2px 8px rgba(0,0,0,0.70)' }}>
        <img src={images[1]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'sepia(55%)'}}/>
      </div>

      {/* main folder */}
      <div style={{ background:'linear-gradient(158deg,#b89440 0%,#a88430 58%,#987420 100%)', padding:'16px 14px 14px', marginTop:2, boxShadow:'5px 6px 26px rgba(0,0,0,0.84)', position:'relative', overflow:'hidden' }}>
        <Grain opacity={0.12}/>
        <Stain style={{ bottom:-25, right:-15, width:140, height:115 }}/>
        <Stain style={{ top:14, left:6, width:80, height:62 }}/>
        <div style={{ position:'absolute', bottom:0, right:0, width:80, height:80, background:'radial-gradient(at 100% 100%, rgba(0,0,0,0.18) 0%, transparent 68%)', pointerEvents:'none'}}/>

        {/* preview */}
        <div style={{ width:'100%', height:130, overflow:'hidden', marginBottom:12, border:'1px solid rgba(0,0,0,0.20)', position:'relative' }}>
          <img src={images[0]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'sepia(28%) contrast(1.06)'}}/>
          <div style={{ position:'absolute', inset:0, boxShadow:'inset 0 0 10px rgba(0,0,0,0.42)'}}/>
        </div>

        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:28, color:'#120800', letterSpacing:'0.30em', marginBottom:4 }}>{label}</div>
        <div style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:12, color:'#3a1800', marginBottom:8 }}>Fotografías en selección.</div>

        {/* ARCHIVED stamp */}
        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:20, color:'#c01000', border:'3px solid #c01000', padding:'2px 10px', display:'inline-block', transform:'rotate(-9deg)', opacity:0.84, letterSpacing:'0.12em' }}>
          ARCHIVED
        </div>

        {/* handwritten */}
        <div style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:14, color:'#c04812', marginTop:10, marginLeft:4, transform:'rotate(-1.5deg)', display:'inline-block' }}>
          obs. descartadas
        </div>

        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:8.5, color:'#3a1a00', letterSpacing:'0.13em', marginTop:13 }}>
          REF: 42/84 — ARCHIVO J.D.
        </div>
      </div>
    </div>
  )
}

/* ─── MAP (MAPA) — 420px ─── */
function MapObject({ images, label }) {
  return (
    <div style={{ width:420, position:'relative' }}>
      {/* dog-ear */}
      <div style={{ position:'absolute', bottom:0, right:0, width:34, height:34, background:'#a49c6c', clipPath:'polygon(100% 0,100% 100%,0 100%)', zIndex:10 }}/>
      <div style={{ position:'absolute', bottom:0, right:0, width:34, height:34, background:'rgba(0,0,0,0.16)', clipPath:'polygon(0 0,100% 0,0 100%)', zIndex:9 }}/>

      <div style={{
        background:'#beb47a',
        padding:'13px',
        boxShadow:'5px 6px 24px rgba(0,0,0,0.76)',
        position:'relative', overflow:'hidden',
        backgroundImage:`linear-gradient(rgba(0,0,0,0.09) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.09) 1px,transparent 1px),linear-gradient(rgba(65,50,12,0.065) 1px,transparent 1px),linear-gradient(90deg,rgba(65,50,12,0.065) 1px,transparent 1px)`,
        backgroundSize:'16px 16px,16px 16px,80px 80px,80px 80px',
        clipPath:'polygon(0 0,100% 0,100% 93%,96% 100%,0 100%)',
      }}>
        <Grain opacity={0.10}/>
        <Stain style={{ top:-14, right:24, width:160, height:120 }}/>
        <Stain style={{ bottom:20, left:14, width:100, height:80 }}/>

        {/* fold lines */}
        <div style={{ position:'absolute', top:'46%', left:0, right:0, height:1, background:'rgba(0,0,0,0.07)', pointerEvents:'none'}}/>
        <div style={{ position:'absolute', left:'50%', top:0, bottom:0, width:1, background:'rgba(0,0,0,0.055)', pointerEvents:'none'}}/>

        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:19, color:'#160e06', letterSpacing:'0.28em', marginBottom:6 }}>{label}</div>
        <div style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:10.5, color:'#382810', marginBottom:8 }}>No hay mapa para esto.</div>

        {/* photos */}
        <div style={{ position:'absolute', top:10, right:10, width:135, height:101, overflow:'hidden', transform:'rotate(6.5deg)', border:'4px solid white', boxShadow:'2px 3px 10px rgba(0,0,0,0.68)' }}>
          <img src={images[0]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
        </div>
        <div style={{ position:'absolute', top:105, right:20, width:110, height:84, overflow:'hidden', transform:'rotate(-4.5deg)', border:'4px solid white', boxShadow:'2px 3px 9px rgba(0,0,0,0.62)' }}>
          <img src={images[2]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
        </div>
        <div style={{ position:'absolute', top:192, left:16, width:98, height:76, overflow:'hidden', transform:'rotate(3.2deg)', border:'4px solid white', boxShadow:'2px 3px 8px rgba(0,0,0,0.58)' }}>
          <img src={images[1]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
        </div>

        <div style={{ height:232 }}/>

        <div style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:12.5, color:'#1a1004', lineHeight:1.6, marginBottom:7 }}>
          no hay mapa<br/>para esto.
        </div>
        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:9, color:'#38240e', letterSpacing:'0.17em' }}>{label}</div>
      </div>
    </div>
  )
}

/* ─── POLAROIDS (BOLETUS) — 360px ─── */
function Polaroids({ images, label }) {
  const offsets = [
    { rotate:'-2.5deg', tx:0,   ty:0,  z:6 },
    { rotate:'-11deg',  tx:-20, ty:12, z:5 },
    { rotate: '9.5deg', tx:16,  ty:16, z:4 },
    { rotate: '-7deg',  tx:-11, ty:24, z:3 },
    { rotate:  '5.5deg',tx:12,  ty:30, z:2 },
  ]
  return (
    <div style={{ width:360, position:'relative' }}>
      {/* header card */}
      <div style={{ background:'linear-gradient(158deg,#e4d2b0,#d8c698)', padding:'13px 15px 11px', marginBottom:9, boxShadow:'3px 4px 14px rgba(0,0,0,0.62)', position:'relative', overflow:'hidden' }}>
        <Grain opacity={0.14}/>
        <div style={{ position:'absolute', left:34, top:0, bottom:0, width:1, background:'rgba(175,88,65,0.28)'}}/>
        <div style={{ fontFamily:'"Special Elite",monospace', fontSize:20, color:'#140802', letterSpacing:'0.22em', marginBottom:3 }}>{label}</div>
        <div style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:12, color:'#5a3820', marginBottom:10 }}>fotodisco</div>
        <div style={{ fontFamily:'"EB Garamond",serif', fontStyle:'italic', fontSize:12, color:'#3a2810', lineHeight:1.7 }}>
          {['track 01','track 02','track 03','track 04','track 05','track 06'].map((t,i)=><div key={i}>{t}</div>)}
        </div>
        <Stain style={{ bottom:-18, right:-8, width:90, height:72 }}/>
      </div>

      {/* polaroid stack */}
      <div style={{ position:'relative', height:225 }}>
        {offsets.map((o,i) => (
          <div key={i} style={{
            position:'absolute', top:0, left:0,
            background:'linear-gradient(142deg,#f4eedd,#eae2ce)',
            padding:'8px 8px 30px', width:178,
            boxShadow:'3px 5px 18px rgba(0,0,0,0.80)',
            transform:`rotate(${o.rotate}) translate(${o.tx}px,${o.ty}px)`,
            zIndex:o.z,
          }}>
            <div style={{ width:'100%', height:132, overflow:'hidden', background:'#0d0d0d', position:'relative' }}>
              <img src={images[i%images.length]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'contrast(1.06) sepia(10%)'}}/>
              <div style={{ position:'absolute', inset:0, boxShadow:'inset 0 0 7px rgba(0,0,0,0.38)'}}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── DOSSIER CARD (BIO) — 260px ─── */
function DossierCard({ images, label }) {
  return (
    <div style={{ width:260, position:'relative' }}>
      <div style={{ position:'absolute', top:6, left:-6, right:-6, bottom:-6, background:'#968c58', transform:'rotate(1.3deg)', boxShadow:'2px 3px 10px rgba(0,0,0,0.62)'}}/>
      <div style={{ position:'absolute', top:11, left:-11, right:-11, bottom:-11, background:'#857c4c', transform:'rotate(-0.9deg)', boxShadow:'2px 2px 7px rgba(0,0,0,0.52)'}}/>

      <div style={{ background:'linear-gradient(152deg,#c8bc94,#b8ac84,#a89c74)', padding:'12px', boxShadow:'4px 6px 24px rgba(0,0,0,0.88)', position:'relative', overflow:'hidden' }}>
        <Grain opacity={0.13}/>
        <Stain style={{ bottom:-18, right:-8, width:120, height:100 }}/>
        <Stain style={{ top:22, left:-8, width:70, height:54 }}/>

        {/* VERIFIED stamp */}
        <div style={{ position:'absolute', top:10, right:8, fontFamily:'"Special Elite",monospace', fontSize:12, color:'#006000', border:'2.5px solid #006000', padding:'2px 7px', transform:'rotate(9deg)', opacity:0.76, letterSpacing:'0.05em' }}>
          VERIFIED
        </div>

        {/* portrait */}
        <div style={{ width:'100%', height:175, overflow:'hidden', border:'1px solid rgba(0,0,0,0.22)', marginBottom:10, position:'relative' }}>
          <img src={images[0]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center', filter:'sepia(12%) contrast(1.04)'}}/>
          <div style={{ position:'absolute', inset:0, boxShadow:'inset 0 0 12px rgba(0,0,0,0.42)'}}/>
        </div>

        <div style={{ borderTop:'1px solid rgba(0,0,0,0.20)', paddingTop:7 }}>
          <div style={{ fontFamily:'"Special Elite",monospace', fontSize:8, color:'#3a1e08', letterSpacing:'0.12em', marginBottom:5 }}>DOSSIER DE AUTORA</div>
          <div style={{ fontFamily:'"EB Garamond",serif', fontSize:11, color:'#5a3820', fontStyle:'italic' }}>Madrid — 2024/2025</div>
        </div>
      </div>
    </div>
  )
}

/* ─── VARIANTS ─── */
const containerVariants = {
  hidden:  { opacity:0, y:34, scale:0.90 },
  visible: (r) => ({ opacity:1, y:0, scale:1, rotate:r }),
  hover:   (r) => ({ scale:1.04, y:-10, rotate:r }),
}
const glowVariants = {
  visible: { opacity:0 },
  hover:   { opacity:1 },
}

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
        filter:'drop-shadow(0 16px 42px rgba(0,0,0,0.99)) drop-shadow(2px 4px 10px rgba(0,0,0,0.85))',
      }}
    >
      <motion.div
        variants={glowVariants}
        transition={{ duration:0.26 }}
        style={{ position:'absolute', inset:-30, background:'radial-gradient(ellipse at center, rgba(148,18,5,0.44) 0%, transparent 62%)', filter:'blur(16px)', zIndex:-1, pointerEvents:'none' }}
      />
      {type==='contact-sheet' && <ContactSheet images={images} label={label}/>}
      {type==='dossier'       && <Dossier      images={images} label={label}/>}
      {type==='map'           && <MapObject    images={images} label={label}/>}
      {type==='polaroids'     && <Polaroids    images={images} label={label}/>}
      {type==='dossier-card'  && <DossierCard  images={images} label={label}/>}
    </motion.div>
  )
}
