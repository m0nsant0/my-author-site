import { useMemo } from "react"
import { Points, PointMaterial } from "@react-three/drei"

export default function Starfield() {
  const stars = useMemo(() => {
    const count = 5000 // menos y más débiles
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8000
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8000
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8000
    }
    return positions
  }, [])

  return (
    <Points positions={stars} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#888888"
        size={0.6}  // mucho más pequeñas
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  )
}
