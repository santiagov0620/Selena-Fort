import { motion } from 'framer-motion'
import { EXCLUIR } from '../../assets.js'

const STAMPS = { 2: 'ARCHIVED', 4: 'SELECTED' }
const STAMP_STYLE = { 2: { top: 18, right: 18, rotate: '-8deg' }, 4: { bottom: 18, left: 18, rotate: '5deg' } }

export default function Excluir() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '110px 40px 140px' }}>
      {/* dossier header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        style={{ marginBottom: 80, borderLeft: '2px solid rgba(175,28,8,0.48)', paddingLeft: 24 }}
      >
        <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 10, letterSpacing: '0.3em', color: 'rgba(175,28,8,0.72)', marginBottom: 12 }}>
          INVESTIGACIÓN VISUAL — REF: 42/84
        </div>
        <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 'clamp(26px,4.8vw,50px)', letterSpacing: '0.38em', color: 'rgba(222,202,172,0.95)', marginBottom: 16 }}>
          EXCLUIR
        </div>
        <div style={{ fontFamily: '"EB Garamond",serif', fontSize: 'clamp(15px,2.3vw,21px)', fontStyle: 'italic', color: 'rgba(178,152,116,0.70)', marginBottom: 38 }}>
          Fotografiar es seleccionar.
        </div>
        <div style={{ fontFamily: '"EB Garamond",serif', fontSize: 'clamp(14px,1.75vw,17px)', color: 'rgba(158,138,106,0.62)', maxWidth: 520, lineHeight: 1.95 }}>
          Una aproximación documental a aquello que queda fuera: espacios abandonados, restos urbanos, márgenes y señales de exclusión.
        </div>
      </motion.div>

      {/* images */}
      {EXCLUIR.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          style={{ marginBottom: 76, position: 'relative' }}
        >
          {STAMPS[i] && (
            <div style={{
              position: 'absolute',
              fontFamily: '"Special Elite",monospace',
              fontSize: 18,
              color: 'rgba(175,28,8,0.50)',
              border: '2px solid rgba(175,28,8,0.48)',
              padding: '3px 11px',
              zIndex: 2,
              pointerEvents: 'none',
              ...STAMP_STYLE[i],
              transform: `rotate(${STAMP_STYLE[i].rotate})`,
            }}>
              {STAMPS[i]}
            </div>
          )}
          <img
            src={src}
            alt=""
            style={{
              width: i % 2 === 0 ? '100%' : '68%',
              marginLeft: i % 2 === 0 ? 0 : '32%',
              display: 'block',
              filter: 'contrast(1.05)',
            }}
          />
        </motion.div>
      ))}

      {/* closing */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginTop: 50, fontFamily: '"Special Elite",monospace', fontSize: 'clamp(11px,1.7vw,15px)', color: 'rgba(175,28,8,0.48)', letterSpacing: '0.22em' }}
      >
        "Cada imagen elegida deja otra fuera."
      </motion.div>
    </div>
  )
}
