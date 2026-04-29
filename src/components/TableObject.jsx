import { motion } from 'framer-motion'

/* ─── CONTACT SHEET (GRAPEFRUIT) ─── */
function ContactSheet({ images, label }) {
  return (
    <div style={{ width: 390, position: 'relative' }}>
      {/* stacked paper layers */}
      {[
        { top: 11, left: 9, right: -8, rotate: '3deg',   bg: '#c8c2b0', shadow: '1px 2px 6px rgba(0,0,0,0.45)' },
        { top:  7, left: 6, right: -5, rotate: '-1.8deg', bg: '#d4cebe', shadow: '1px 1px 5px rgba(0,0,0,0.38)' },
        { top:  4, left: 3, right: -2, rotate:  '0.9deg', bg: '#ddd8c8', shadow: '1px 1px 4px rgba(0,0,0,0.30)' },
        { top:  1, left: 1, right:  0, rotate: '-0.4deg', bg: '#e5e0d0', shadow: '1px 1px 3px rgba(0,0,0,0.22)' },
      ].map((l, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: l.top, left: l.left, right: l.right, bottom: -8,
          background: l.bg,
          transform: `rotate(${l.rotate})`,
          boxShadow: l.shadow,
        }} />
      ))}

      {/* main sheet */}
      <div style={{
        position: 'relative',
        background: '#ece6d4',
        padding: '14px 14px 16px',
        boxShadow: '4px 6px 24px rgba(0,0,0,0.65)',
      }}>
        {/* header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10, borderBottom: '1px solid rgba(0,0,0,0.12)', paddingBottom: 7 }}>
          <div>
            <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 17, color: '#160a02', letterSpacing: '0.22em' }}>
              {label}
            </div>
            <div style={{ fontFamily: '"EB Garamond",serif', fontStyle: 'italic', fontSize: 11, color: '#3a2410', marginTop: 2 }}>
              Pintura para el viento
            </div>
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 7, color: '#6a5040', letterSpacing: '0.1em', textAlign: 'right', lineHeight: 1.5 }}>
            CONTACT PRINT<br />ROLL 01
          </div>
        </div>

        {/* 3 rows × 4 cols of thumbnail frames */}
        {[0, 1, 2].map(row => (
          <div key={row} style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 3, marginBottom: 3 }}>
            {[0, 1, 2, 3].map(col => {
              const idx = (row * 4 + col) % images.length
              return (
                <div key={col} style={{ aspectRatio: '3/2', overflow: 'hidden', background: '#0a0a0a', border: '1px solid rgba(0,0,0,0.25)' }}>
                  <img src={images[idx]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: `grayscale(${55 + row * 8}%) contrast(1.18)`, opacity: 0.9 - row * 0.08 }} />
                </div>
              )
            })}
          </div>
        ))}

        {/* frame numbers strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, paddingTop: 4, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} style={{ fontFamily: 'monospace', fontSize: 7, color: 'rgba(0,0,0,0.3)' }}>{i + 1}</div>
          ))}
        </div>

        {/* paper clip */}
        <div style={{ position: 'absolute', top: -16, right: 40, width: 18, height: 38, border: '2.5px solid #aaa098', borderRadius: '9px 9px 4px 4px', borderBottom: 'none' }} />
      </div>
    </div>
  )
}

/* ─── DOSSIER (EXCLUIR) ─── */
function Dossier({ images, label }) {
  return (
    <div style={{ width: 330, position: 'relative' }}>
      {/* folder tab */}
      <div style={{ position: 'absolute', top: -15, left: 18, width: 84, height: 17, background: '#b08838', borderRadius: '5px 5px 0 0' }} />
      {/* second dossier underneath */}
      <div style={{ position: 'absolute', top: 5, left: -6, right: -8, bottom: -8, background: '#a07830', transform: 'rotate(1.8deg)', boxShadow: '2px 3px 10px rgba(0,0,0,0.55)' }} />
      {/* peeking photo upper-right */}
      <div style={{ position: 'absolute', top: -12, right: 14, width: 116, height: 88, overflow: 'hidden', transform: 'rotate(5.5deg)', border: '2px solid #888', boxShadow: '2px 2px 7px rgba(0,0,0,0.65)' }}>
        <img src={images[1]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(45%)' }} />
      </div>

      {/* main folder body */}
      <div style={{ background: '#c4a060', padding: '16px 14px 14px', marginTop: 2, boxShadow: '4px 5px 20px rgba(0,0,0,0.72)', position: 'relative', overflow: 'hidden' }}>
        {/* worn corner stain */}
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 80, height: 80, background: 'radial-gradient(at 100% 100%, rgba(0,0,0,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* preview image */}
        <div style={{ width: '100%', height: 140, overflow: 'hidden', marginBottom: 12, border: '1px solid rgba(0,0,0,0.18)' }}>
          <img src={images[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(22%) contrast(1.06)' }} />
        </div>

        {/* EXCLUIR title */}
        <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 26, color: '#160800', letterSpacing: '0.30em', marginBottom: 4 }}>
          {label}
        </div>
        <div style={{ fontFamily: '"EB Garamond",serif', fontStyle: 'italic', fontSize: 12, color: '#3a1800', marginBottom: 14, letterSpacing: '0.05em' }}>
          Fotografiar es seleccionar.
        </div>

        {/* ARCHIVED stamp */}
        <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 20, color: '#c01000', border: '3px solid #c01000', padding: '3px 10px', display: 'inline-block', transform: 'rotate(-9deg)', opacity: 0.88, letterSpacing: '0.12em' }}>
          ARCHIVED
        </div>

        {/* handwritten note */}
        <div style={{ fontFamily: '"EB Garamond",serif', fontStyle: 'italic', fontSize: 14, color: '#c05018', marginTop: 10, marginLeft: 4, transform: 'rotate(-1.5deg)', display: 'inline-block' }}>
          obs. descartadas
        </div>

        {/* archive ref */}
        <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 9, color: '#3a1a00', letterSpacing: '0.14em', marginTop: 14 }}>
          REF: 42/84 — ARCHIVO J.D.
        </div>
      </div>
    </div>
  )
}

/* ─── MAP (MAPA) ─── */
function MapObject({ images, label }) {
  return (
    <div style={{ width: 400, position: 'relative' }}>
      {/* folded dog-ear corner */}
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 32, height: 32, background: '#b4a87c', clipPath: 'polygon(100% 0,100% 100%,0 100%)', zIndex: 10 }} />

      <div style={{
        background: '#ccc090',
        padding: '13px',
        boxShadow: '4px 5px 22px rgba(0,0,0,0.68)',
        position: 'relative',
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.11) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.11) 1px, transparent 1px),
          linear-gradient(rgba(80,60,20,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(80,60,20,0.07) 1px, transparent 1px)
        `,
        backgroundSize: '16px 16px, 16px 16px, 80px 80px, 80px 80px',
        clipPath: 'polygon(0 0,100% 0,100% 93%,96% 100%,0 100%)',
      }}>
        {/* MAPA header */}
        <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 19, color: '#181008', letterSpacing: '0.28em', marginBottom: 6 }}>
          {label}
        </div>
        <div style={{ fontFamily: '"EB Garamond",serif', fontStyle: 'italic', fontSize: 10, color: '#382810', marginBottom: 8, letterSpacing: '0.04em' }}>
          No hay mapa para esto.
        </div>

        {/* photo 1 — upper right */}
        <div style={{ position: 'absolute', top: 10, right: 10, width: 136, height: 102, overflow: 'hidden', transform: 'rotate(6.5deg)', border: '4px solid white', boxShadow: '2px 3px 8px rgba(0,0,0,0.65)' }}>
          <img src={images[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* photo 2 — mid right */}
        <div style={{ position: 'absolute', top: 100, right: 18, width: 110, height: 84, overflow: 'hidden', transform: 'rotate(-4.5deg)', border: '4px solid white', boxShadow: '2px 3px 7px rgba(0,0,0,0.6)' }}>
          <img src={images[2]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* photo 3 — lower left */}
        <div style={{ position: 'absolute', top: 190, left: 16, width: 95, height: 76, overflow: 'hidden', transform: 'rotate(3deg)', border: '4px solid white', boxShadow: '2px 3px 7px rgba(0,0,0,0.55)' }}>
          <img src={images[1]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* map area spacer */}
        <div style={{ height: 238 }} />

        {/* handwritten note bottom */}
        <div style={{ fontFamily: '"EB Garamond",serif', fontStyle: 'italic', fontSize: 13, color: '#1a1004', lineHeight: 1.55, marginBottom: 7 }}>
          no hay mapa<br />para esto.
        </div>
        <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 9, color: '#38240e', letterSpacing: '0.17em' }}>
          {label}
        </div>
      </div>
    </div>
  )
}

/* ─── POLAROIDS (BOLETUS) ─── */
function Polaroids({ images, label }) {
  const offsets = [
    { rotate: '-2deg',  tx: 0,   ty: 0,   z: 6 },
    { rotate: '-10deg', tx: -18, ty: 12,  z: 5 },
    { rotate:  '9deg',  tx: 16,  ty: 16,  z: 4 },
    { rotate: '-6deg',  tx: -10, ty: 24,  z: 3 },
    { rotate:  '5deg',  tx: 12,  ty: 28,  z: 2 },
  ]
  return (
    <div style={{ width: 340, position: 'relative' }}>
      {/* header notebook card */}
      <div style={{ background: '#e8dcc6', padding: '13px 15px 11px', marginBottom: 8, boxShadow: '2px 3px 12px rgba(0,0,0,0.55)', position: 'relative' }}>
        {/* notebook line */}
        <div style={{ position: 'absolute', left: 32, top: 0, bottom: 0, width: 1, background: 'rgba(180,100,80,0.3)' }} />
        <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 20, color: '#160a02', letterSpacing: '0.22em', marginBottom: 3 }}>
          {label}
        </div>
        <div style={{ fontFamily: '"EB Garamond",serif', fontStyle: 'italic', fontSize: 12, color: '#5a3820', marginBottom: 10 }}>
          fotodisco
        </div>
        {/* handwritten track list */}
        <div style={{ fontFamily: '"EB Garamond",serif', fontStyle: 'italic', fontSize: 12, color: '#3a2810', lineHeight: 1.65 }}>
          {['Track 01','Track 02','Track 03','Track 04','Track 05','Track 06'].map((t, i) => (
            <div key={i}>{t}</div>
          ))}
        </div>
      </div>

      {/* polaroid stack */}
      <div style={{ position: 'relative', height: 220 }}>
        {offsets.map((o, i) => (
          <div key={i} style={{
            position: 'absolute', top: 0, left: 0,
            background: 'white',
            padding: '8px 8px 28px',
            width: 175,
            boxShadow: '3px 4px 14px rgba(0,0,0,0.72)',
            transform: `rotate(${o.rotate}) translate(${o.tx}px,${o.ty}px)`,
            zIndex: o.z,
          }}>
            <div style={{ width: '100%', height: 128, overflow: 'hidden', background: '#0d0d0d' }}>
              <img src={images[i % images.length]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
    <div style={{ width: 240, position: 'relative' }}>
      {/* envelope back layer */}
      <div style={{ position: 'absolute', top: 5, left: -5, right: -5, bottom: -5, background: '#b0a070', transform: 'rotate(1.2deg)', boxShadow: '2px 2px 8px rgba(0,0,0,0.55)' }} />
      <div style={{ background: '#cabe9e', padding: '12px', boxShadow: '3px 5px 20px rgba(0,0,0,0.78)', position: 'relative' }}>
        {/* VERIFIED stamp */}
        <div style={{ position: 'absolute', top: 10, right: 8, fontFamily: '"Special Elite",monospace', fontSize: 12, color: '#006000', border: '2.5px solid #006000', padding: '2px 7px', transform: 'rotate(9deg)', opacity: 0.80 }}>
          VERIFIED
        </div>
        {/* portrait */}
        <div style={{ width: '100%', height: 188, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.2)', marginBottom: 11 }}>
          <img src={images[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'sepia(12%) contrast(1.04)' }} />
        </div>
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.2)', paddingTop: 7 }}>
          <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 8, color: '#3a1e08', letterSpacing: '0.13em', marginBottom: 5 }}>
            DOSSIER DE AUTORA
          </div>
          <div style={{ fontFamily: '"EB Garamond",serif', fontSize: 11, color: '#5a3820', fontStyle: 'italic' }}>
            Madrid — 2024/2025
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── FRAMER MOTION VARIANTS ─── */
const containerVariants = {
  hidden:  { opacity: 0, y: 32, scale: 0.92 },
  visible: (r) => ({ opacity: 1, y: 0, scale: 1, rotate: r }),
  hover:   (r) => ({ scale: 1.04, y: -8, rotate: r }),
}
const glowVariants = {
  visible: { opacity: 0 },
  hover:   { opacity: 1 },
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
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onClick(project)}
      style={{ position: 'absolute', ...position, zIndex, cursor: 'pointer' }}
    >
      {/* red safelight glow on hover */}
      <motion.div
        variants={glowVariants}
        transition={{ duration: 0.28 }}
        style={{
          position: 'absolute',
          inset: -28,
          background: 'radial-gradient(ellipse at center, rgba(155,20,5,0.42) 0%, transparent 65%)',
          filter: 'blur(14px)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
      {type === 'contact-sheet' && <ContactSheet images={images} label={label} />}
      {type === 'dossier'       && <Dossier      images={images} label={label} />}
      {type === 'map'           && <MapObject    images={images} label={label} />}
      {type === 'polaroids'     && <Polaroids    images={images} label={label} />}
      {type === 'dossier-card'  && <DossierCard  images={images} label={label} />}
    </motion.div>
  )
}
