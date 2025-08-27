import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Mesh } from "three"

export default function Planet() {
  const ref = useRef<Mesh>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={ref} position={[25, 0, 0]}>
      <sphereGeometry args={[4, 32, 32]} />
      <meshStandardMaterial color="#224466" />
    </mesh>
  )
}
