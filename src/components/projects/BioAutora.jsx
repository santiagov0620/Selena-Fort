import { motion } from 'framer-motion'
import { BIO } from '../../assets.js'

const BIO_PARAGRAPHS = [
  'A punto de cumplir veinte años, comenzó a entender su recorrido desde otro lugar. Madrid marcó el inicio de una etapa de independencia, búsqueda y construcción personal.',
  'Desde pequeña ha crecido en movimiento. Viajar, conocer distintas culturas y participar en experiencias de voluntariado le enseñaron a observar sin juzgar y a acercarse a otras realidades con atención.',
  'Su trabajo nace de esa curiosidad constante por las personas, los lugares y las historias que los atraviesan. A través de la fotografía, la escritura y el diseño, busca construir una mirada sensible, abierta y en evolución.',
  'Sus proyectos parten de la observación y de la experiencia personal, pero buscan generar conexiones, transmitir sensaciones y explorar la complejidad de lo humano.',
  'Su mayor referencia ha sido siempre su abuela, cuya fuerza y forma de enfrentarse a la vida marcó profundamente su manera de mirar el mundo. Este archivo reúne una etapa de aprendizaje, búsqueda y comienzo.',
]

export default function BioAutora() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '100px 40px 120px' }}>
      {/* portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: '100%', maxHeight: '76vh', overflow: 'hidden', marginBottom: 56 }}
      >
        <img
          src={BIO}
          alt="Dossier de Autora"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'sepia(10%) contrast(1.04)' }}
        />
      </motion.div>

      {/* identity header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        style={{ borderTop: '1px solid rgba(178,152,116,0.30)', paddingTop: 28, marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}
      >
        <div>
          <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 9, letterSpacing: '0.3em', color: 'rgba(175,28,8,0.62)', marginBottom: 9 }}>
            DOSSIER DE AUTORA — ARCHIVO PERSONAL
          </div>
          <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 'clamp(16px,2.8vw,26px)', letterSpacing: '0.26em', color: 'rgba(222,202,172,0.95)', marginBottom: 7 }}>
            DOSSIER DE AUTORA
          </div>
          <div style={{ fontFamily: '"EB Garamond",serif', fontStyle: 'italic', fontSize: 14, color: 'rgba(178,152,116,0.60)' }}>
            Madrid — 2024 / 2025
          </div>
        </div>
        <div style={{ fontFamily: '"Special Elite",monospace', fontSize: 13, color: 'rgba(0,120,0,0.60)', border: '2px solid rgba(0,120,0,0.58)', padding: '3px 11px', transform: 'rotate(8deg)', marginTop: 4, flexShrink: 0 }}>
          VERIFIED
        </div>
      </motion.div>

      {/* bio paragraphs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 30, marginBottom: 100 }}>
        {BIO_PARAGRAPHS.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.06 }}
            viewport={{ once: true }}
            style={{ fontFamily: '"EB Garamond",serif', fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.95, color: 'rgba(198,178,148,0.76)', margin: 0 }}
          >
            {para}
          </motion.p>
        ))}
      </div>

      {/* diamond closing mark */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.2 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', fontFamily: '"Special Elite",monospace', fontSize: 22, color: 'rgba(178,152,116,0.38)' }}
      >
        ◆
      </motion.div>
    </div>
  )
}
