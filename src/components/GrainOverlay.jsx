const noiseUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"

export default function GrainOverlay() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: '-50%',
        width: '200%',
        height: '200%',
        backgroundImage: `url("${noiseUrl}")`,
        backgroundSize: '200px 200px',
        animation: 'grain 0.8s steps(2) infinite',
        opacity: 0.038,
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'overlay',
      }}
    />
  )
}
