import { Canvas } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { OrbitControls } from "@react-three/drei"

// Componentes
import Starfield from "./components/Starfield"
import StarfieldPersonalizado from "./components/StarfieldPersonalizado"
import BinarySystem from "./components/BinarySystem"
import Tiamat from "./components/Tiamat"

export default function App() {
  return (
    <Canvas
      style={{ width: "100%", height: "100vh", background: "black" }}
      camera={{ fov: 60, near: 0.1, far: 20000, position: [0, 0, 1000] }}
    >
      {/* Luces */}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 200]} intensity={2} />

      {/* Escena */}
      <Starfield />
      <StarfieldPersonalizado />
      <BinarySystem />
      <Tiamat />

      {/* Cámara tipo telescopio */}
      <OrbitControls
        
        enablePan={false}            // no mover la escena lateralmente
        minPolarAngle={Math.PI / 2}  // 🔒 bloquea arriba/abajo
        maxPolarAngle={Math.PI / 2}
        minDistance={1}              // límite de zoom in (para no "meterte" en el centro exacto)
        maxDistance={20000}          // límite de zoom out
        target={[0, 0, 0]}           // 👈 centro del sistema binario (los soles)
        rotateSpeed={0.5}            // sensibilidad de rotación
        zoomSpeed={1.0}              // sensibilidad de zoom
      />

      {/* Postprocesado */}
      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.2} luminanceSmoothing={0.05} />
      </EffectComposer>
    </Canvas>
  )
}
