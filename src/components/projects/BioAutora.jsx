import { motion } from 'framer-motion'
import { BIO } from '../../assets.js'

const BIO_PARAGRAPHS = [
  'Estaba a punto de cumplir veinte años cuando empezó a entender muchas cosas desde otro lugar. No fue un cambio repentino, sino un proceso silencioso y progresivo, en el que todo lo vivido hasta entonces —los viajes, las personas, las experiencias— empezó a adquirir un nuevo sentido. Madrid apareció en ese momento como una continuación más exigente y consciente. Allí comenzó una etapa de independencia total: aprender a sostenerse, a tomar decisiones, a equivocarse y a construir un camino propio desde cero.',
  'Desde pequeña, ha crecido en constante movimiento. Viajar no ha sido algo puntual, sino una forma de estar en el mundo. Lugares como Berlín, Irlanda o Tailandia le enseñaron no solo diferentes culturas, sino, sobre todo, a mirar: a observar sin juzgar, a escuchar y a comprender la diversidad de realidades que existen. Su experiencia como voluntaria, participando en proyectos y enseñando, reforzó esa necesidad constante de acercarse a otras historias y formas de vida.',
  'Siempre ha sentido un interés profundo por las personas: por cómo piensan, cómo sienten y cómo interpretan su entorno. De ahí nace su conexión con la literatura, la escritura y la fotografía, disciplinas que le permiten explorar una misma inquietud: contar. A lo largo de este proceso, también ha ido ampliando su lenguaje creativo, explorando el diseño y otras formas de expresión visual. Todo ello ha contribuido a construir una mirada más completa, abierta y en constante evolución.',
  'Este recorrido personal ha influido directamente en sus proyectos, que nacen de la observación, la experiencia y el deseo de comprender y narrar lo que le rodea. Su trabajo no se limita a lo técnico, sino que busca generar conexiones, transmitir sensaciones y reflejar la complejidad de las realidades humanas. Durante este camino, ha encontrado inspiración en múltiples referentes de distintos ámbitos, que le han enseñado nuevas formas de mirar y de contar.',
  'Sin embargo, su mayor referencia ha sido siempre su abuela, cuya fuerza y manera de enfrentarse a la vida han marcado profundamente su forma de entender el mundo. Se define por una curiosidad constante y un deseo de aprender que no se detiene. Aspira a seguir creciendo, explorando y construyendo una trayectoria profesional que no solo destaque por lo que hace, sino por cómo impacta en los demás. Este es solo el comienzo.',
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
