import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function StarfieldPersonalizado() {
  // ⭐ Tres estrellas fijas (más pequeñas y alejadas)
  const customStars = [
    [1500, 400, -3000],   // más lejos
    [-2000, -600, -2800],
    [800, 1000, -3200],
  ]

  // 🌠 Cuatro estrellas móviles (viajeras)
  const movingStars = [
    { position: [3000, 1200, -6000], speed: 0.8 }, // estrella superior en movimiento
    { position: [-3500, -1000, -6500], speed: 1.0 },
    { position: [2000, -800, -7000], speed: 0.7 }, // estrella inferior en movimiento
    { position: [-2500, 600, -6800], speed: 0.9 },
  ]

  // refs para las estrellas móviles
  const refs = useRef<(THREE.Mesh | null)[]>([])

  // Animación en cada frame
  useFrame(() => {
    refs.current.forEach((star, i) => {
      if (star) {
        star.position.z += movingStars[i].speed * 15

        // 🔄 Reset: si pasan la cámara, regresan al fondo
        if (star.position.z > 200) {
          star.position.z = -7000
        }
      }
    })
  })

  return (
    <group>
      {/* 🌌 Estrellas fijas pequeñas */}
      {customStars.map(([x, y, z], i) => (
        <mesh key={`fixed-${i}`} position={[x, y, z]}>
          <sphereGeometry args={[2, 8, 8]} /> {/* 🔹 tamaño pequeño */}
          <meshStandardMaterial emissive="#ffffff" emissiveIntensity={3} />
        </mesh>
      ))}

      {/* 🌠 Estrellas viajeras */}
      {movingStars.map((star, i) => (
        <mesh
          key={`moving-${i}`}
          position={star.position as [number, number, number]}
          ref={(el) => (refs.current[i] = el)}
        >
          <sphereGeometry args={[3, 12, 12]} /> {/* un poco más grandes */}
          <meshStandardMaterial emissive="#ffffff" emissiveIntensity={5} />
        </mesh>
      ))}
    </group>
  )
}
