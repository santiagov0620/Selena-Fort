import { motion } from 'framer-motion'
import { GRAPEFRUIT } from '../../assets.js'

const fadeUp = {
  hidden:  { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0,  transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function Grapefruit() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '110px 40px 140px' }}>
      {/* header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.3 }}
        style={{ marginBottom: 110, textAlign: 'center' }}
      >
        <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 'clamp(26px,4.8vw,50px)', letterSpacing: '0.42em', color: 'rgba(222,202,172,0.95)', marginBottom: 18 }}>
          GRAPEFRUIT
        </div>
        <div style={{ fontFamily: '"EB Garamond",serif', fontSize: 'clamp(15px,2.3vw,21px)', fontStyle: 'italic', color: 'rgba(178,152,116,0.70)', marginBottom: 52 }}>
          Pintura para el viento
        </div>
        <div style={{ fontFamily: '"EB Garamond",serif', fontSize: 'clamp(14px,1.75vw,17px)', color: 'rgba(158,138,106,0.62)', maxWidth: 460, margin: '0 auto', lineHeight: 1.95 }}>
          Un estudio sobre mirar a través: ventanas, huecos, cerraduras y límites que convierten la visión en una experiencia parcial.
        </div>
        {/* divider */}
        <div style={{ width: 1, height: 60, background: 'rgba(178,152,116,0.25)', margin: '60px auto 0' }} />
        <div style={{ fontFamily: '"EB Garamond",serif', fontSize: 'clamp(14px,1.9vw,18px)', fontStyle: 'italic', color: 'rgba(198,168,126,0.48)', marginTop: 50, letterSpacing: '0.04em' }}>
          "Hacer un agujero. Dejarlo al viento."
        </div>
      </motion.div>

      {/* images */}
      {GRAPEFRUIT.map((src, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ marginBottom: i < GRAPEFRUIT.length - 1 ? 190 : 100, display: 'flex', justifyContent: 'center' }}
        >
          <img
            src={src}
            alt=""
            style={{ maxWidth: '100%', maxHeight: '82vh', objectFit: 'contain', filter: 'grayscale(14%) contrast(1.07)' }}
          />
        </motion.div>
      ))}

      {/* closing */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.2 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginTop: 100, fontFamily: '"EB Garamond",serif', fontStyle: 'italic', fontSize: 'clamp(13px,1.9vw,18px)', color: 'rgba(155,135,100,0.48)', letterSpacing: '0.05em', lineHeight: 1.85 }}
      >
        "Mirar también es aceptar lo que no termina de mostrarse."
      </motion.div>
    </div>
  )
}
