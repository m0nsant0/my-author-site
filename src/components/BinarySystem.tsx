// src/components/BinarySystem.tsx
import { useRef } from "react"
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import * as THREE from "three"

export default function BinarySystem() {
  const giantRef = useRef<THREE.Mesh>(null)
  const dwarfRef = useRef<THREE.Mesh>(null)
  const maxAniso = useThree((s) => s.gl.capabilities.getMaxAnisotropy())

  // 🔴 Red giant texture (sharper + correct color)
  const redGiantTexture = useLoader(THREE.TextureLoader, "/textures/red_giant_color.jpg")
  redGiantTexture.colorSpace = THREE.SRGBColorSpace
  redGiantTexture.anisotropy = maxAniso
  redGiantTexture.minFilter = THREE.LinearMipmapLinearFilter
  redGiantTexture.magFilter = THREE.LinearFilter
  redGiantTexture.wrapS = THREE.RepeatWrapping
  redGiantTexture.wrapT = THREE.ClampToEdgeWrapping
  redGiantTexture.repeat.set(2, 1) // increase feature density (looks crisper)
  redGiantTexture.generateMipmaps = true
  redGiantTexture.needsUpdate = true

  // ⚪ White dwarf texture (sharper + correct color)
  const whiteDwarfTexture = useLoader(THREE.TextureLoader, "/textures/white_dwarf_color.jpg")
  whiteDwarfTexture.colorSpace = THREE.SRGBColorSpace
  whiteDwarfTexture.anisotropy = maxAniso
  whiteDwarfTexture.minFilter = THREE.LinearMipmapLinearFilter
  whiteDwarfTexture.magFilter = THREE.LinearFilter
  whiteDwarfTexture.wrapS = THREE.RepeatWrapping
  whiteDwarfTexture.wrapT = THREE.ClampToEdgeWrapping
  whiteDwarfTexture.generateMipmaps = true
  whiteDwarfTexture.needsUpdate = true

  // Orbital params
  const giantOrbitRadius = 80
  const dwarfOrbitRadius = 300
  const orbitSpeedGiant = 0.100
  const orbitSpeedDwarf = 0.25
  const eccentricity = 0.2

  // Self-spin
  const spinSpeed = 0.1            // red giant spin
  const dwarfSpinSpeed = 0.3       // white dwarf spin (faster)

  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime()

    // self-rotation
    if (giantRef.current) giantRef.current.rotation.y += spinSpeed * delta
    if (dwarfRef.current) dwarfRef.current.rotation.y += dwarfSpinSpeed * delta

    // orbits positions
    const giantX = Math.cos(t * orbitSpeedGiant) * giantOrbitRadius
    const giantZ = Math.sin(t * orbitSpeedGiant) * giantOrbitRadius * (1 - eccentricity)

    const dwarfX = Math.cos(t * orbitSpeedDwarf + Math.PI) * dwarfOrbitRadius
    const dwarfZ = Math.sin(t * orbitSpeedDwarf + Math.PI) * dwarfOrbitRadius * (1 - eccentricity)

    if (giantRef.current) giantRef.current.position.set(giantX, 0, giantZ)
    if (dwarfRef.current) dwarfRef.current.position.set(dwarfX, 0, dwarfZ)
  })

  return (
    <>
      {/* 🔴 Red Giant (textured + emissive) */}
      <mesh ref={giantRef}>
        <sphereGeometry args={[120, 128, 128]} />
        <meshStandardMaterial
          map={redGiantTexture}
          emissiveMap={redGiantTexture}
          emissive={"#ff5a2b"}
          emissiveIntensity={1.9}
          roughness={1}
          metalness={0}
          toneMapped={false}
        />
      </mesh>

      {/* ⚪ White Dwarf (textured + emissive) */}
      <mesh ref={dwarfRef}>
        <sphereGeometry args={[15, 128, 128]} />
        <meshStandardMaterial
          map={whiteDwarfTexture}
          emissiveMap={whiteDwarfTexture}
          emissive={"#cfe9ff"}
          emissiveIntensity={2.0}
          toneMapped={false}
        />
      </mesh>
    </>
  )
}
 