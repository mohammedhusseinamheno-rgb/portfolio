import './index.css'
import Header from './Header'
import Content from './Content'
import PixelTrail from "@/components/PixelTrail"
import { useEffect } from "react"

function App() {
useEffect(() => {
  // Mouse tracer for pixel trail effect
  const forward = (e) => {
      const canvas = document.querySelector(".trail-overlay canvas")
      canvas?.dispatchEvent(new PointerEvent("pointermove", e))
    }
    window.addEventListener("pointermove", forward)
    return () => window.removeEventListener("pointermove", forward)
  }, [])
  return (
    <div className="bg-base text-white min-h-screen ">
      <Header />
      <Content />

      {/* Trail on top of the whole site */}
      <div className="trail-overlay"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <PixelTrail
          gridSize={100}
          trailSize={0.04}
          maxAge={300}
          interpolate={2.7}
          color="#00a6ff"
          gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
          gooeyEnabled
          gooStrength={1}
        />
      </div>
    </div>
  )
}

export default App