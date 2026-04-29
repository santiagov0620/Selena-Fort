import { motion } from 'framer-motion'
import { BOLETUS } from '../../assets.js'

const ROTATIONS = ['-2deg','1.5deg','-3deg','2.2deg','-1.2deg','2.8deg','-1.8deg','3.1deg','-2.5deg','1.2deg','-3.5deg','2deg','-1deg','3.5deg']
const TRACKS    = ['track 01','track 02','track 03','track 04','track 05','track 06','track 07','track 08','track 09','track 10','track 11','track 12','track 13','track 14']

export default function Boletus() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '110px 40px 140px' }}>
      {/* header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        style={{ marginBottom: 80 }}
      >
        <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 'clamp(26px,4.8vw,50px)', letterSpacing: '0.38em', color: 'rgba(222,202,172,0.95)', marginBottom: 18 }}>
          BOLETUS
        </div>
        <div style={{ fontFamily: '"EB Garamond",serif', fontSize: 'clamp(15px,2.3vw,21px)', fontStyle: 'italic', color: 'rgba(178,152,116,0.70)', marginBottom: 36 }}>
          Fotodisco
        </div>
        <div style={{ fontFamily: '"EB Garamond",serif', fontSize: 'clamp(14px,1.75vw,17px)', color: 'rgba(158,138,106,0.62)', maxWidth: 500, lineHeight: 1.95 }}>
          Un proyecto de energía colectiva: música, amistad, humor, texto manuscrito, performance y memoria juvenil.
        </div>
      </motion.div>

      {/* images as polaroids */}
      {BOLETUS.map((src, i) => {
        const isRight = i % 2 !== 0
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-80px' }}
            style={{ marginBottom: 56, display: 'flex', justifyContent: isRight ? 'flex-end' : 'flex-start' }}
          >
            <div style={{ width: isRight ? '65%' : '70%' }}>
              {/* polaroid frame */}
              <div style={{
                background: 'white',
                padding: '10px 10px 32px',
                boxShadow: '4px 5px 22px rgba(0,0,0,0.72)',
                transform: `rotate(${ROTATIONS[i]})`,
              }}>
                <img src={src} alt="" style={{ width: '100%', display: 'block' }} />
                <div style={{ textAlign: 'center', marginTop: 8, fontFamily: '"EB Garamond",serif', fontStyle: 'italic', fontSize: 13, color: '#221808' }}>
                  {TRACKS[i]}
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}

      {/* closing */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginTop: 60, fontFamily: '"Special Elite",monospace', fontSize: 'clamp(11px,1.7vw,15px)', color: 'rgba(178,152,116,0.48)', letterSpacing: '0.22em' }}
      >
        "El archivo también puede sonar."
      </motion.div>
    </div>
  )
}
