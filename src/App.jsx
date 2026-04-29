import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import HomePage       from './components/HomePage.jsx'
import ProjectOverlay from './components/ProjectOverlay.jsx'
import GrainOverlay   from './components/GrainOverlay.jsx'

export default function App() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <GrainOverlay />
      <HomePage onOpen={setActiveProject} />
      <AnimatePresence>
        {activeProject && (
          <ProjectOverlay
            key={activeProject.id}
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
