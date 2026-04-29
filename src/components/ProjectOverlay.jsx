import { motion } from 'framer-motion'
import { useState } from 'react'
import Grapefruit from './projects/Grapefruit.jsx'
import Excluir    from './projects/Excluir.jsx'
import Mapa       from './projects/Mapa.jsx'
import Boletus    from './projects/Boletus.jsx'
import BioAutora  from './projects/BioAutora.jsx'

const COMPONENTS = {
  grapefruit: Grapefruit,
  excluir:    Excluir,
  mapa:       Mapa,
  boletus:    Boletus,
  bio:        BioAutora,
}

function CloseButton({ onClose }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      onClick={onClose}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        top: 22,
        right: 30,
        zIndex: 300,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: '"Special Elite", monospace',
        fontSize: 20,
        color: hovered ? 'rgba(210,50,30,0.85)' : 'rgba(190,162,120,0.5)',
        letterSpacing: '0.06em',
        padding: '8px 12px',
        transition: 'color 0.25s ease',
        lineHeight: 1,
      }}
    >
      ✕
    </motion.button>
  )
}

export default function ProjectOverlay({ project, onClose }) {
  const Component = COMPONENTS[project.id]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: '#0d0a08',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <CloseButton onClose={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        <Component />
      </motion.div>
    </motion.div>
  )
}
