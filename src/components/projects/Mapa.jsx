import { motion } from 'framer-motion'
import { MAPA } from '../../assets.js'

const COORDS = [
  'N 40°25\'08" — W 003°41\'31"',
  'N 40°25\'22" — W 003°41\'52"',
  'N 40°24\'56" — W 003°41\'15"',
  'N 40°25\'44" — W 003°42\'08"',
  'N 40°25\'01" — W 003°41\'28"',
]

export default function Mapa() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '110px 40px 140px' }}>
      {/* header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        style={{ marginBottom: 100 }}
      >
        <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 'clamp(26px,4.8vw,50px)', letterSpacing: '0.42em', color: 'rgba(222,202,172,0.95)', marginBottom: 18 }}>
          MAPA
        </div>
        <div style={{ fontFamily: '"EB Garamond",serif', fontSize: 'clamp(15px,2.3vw,21px)', fontStyle: 'italic', color: 'rgba(178,152,116,0.70)', marginBottom: 36 }}>
          No hay mapa para esto.
        </div>
        <div style={{ fontFamily: '"EB Garamond",serif', fontSize: 'clamp(14px,1.75vw,17px)', color: 'rgba(158,138,106,0.62)', maxWidth: 500, lineHeight: 1.95, marginBottom: 32 }}>
          Un recorrido visual por la ciudad como experiencia fragmentada: direcciones, edificios, señales, ritmos y desorientación urbana.
        </div>
        <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg, rgba(178,152,116,0.4) 0%, rgba(178,152,116,0.05) 100%)' }} />
      </motion.div>

      {/* images */}
      {MAPA.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -18 : 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          style={{ marginBottom: 96 }}
        >
          <img src={src} alt="" style={{ width: '100%', display: 'block' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, paddingTop: 8, borderTop: '1px solid rgba(178,152,116,0.14)' }}>
            <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 9, color: 'rgba(158,138,106,0.42)', letterSpacing: '0.1em' }}>
              {COORDS[i]}
            </div>
            <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 9, color: 'rgba(158,138,106,0.32)' }}>
              {String(i + 1).padStart(2,'0')} / {String(MAPA.length).padStart(2,'0')}
            </div>
          </div>
        </motion.div>
      ))}

      {/* phrase */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: 60, fontFamily: '"EB Garamond",serif', fontStyle: 'italic', fontSize: 'clamp(14px,2vw,19px)', color: 'rgba(158,138,106,0.48)', letterSpacing: '0.07em' }}
      >
        "Ciudad, gente, colores, ruido, vida."
      </motion.div>

      {/* closing */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', fontFamily: '"EB Garamond",serif', fontStyle: 'italic', fontSize: 'clamp(13px,1.8vw,17px)', color: 'rgba(148,128,96,0.44)', letterSpacing: '0.05em' }}
      >
        "Perderse también puede ser una forma de encontrarse."
      </motion.div>
    </div>
  )
}
