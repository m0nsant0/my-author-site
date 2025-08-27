// src/components/RedGiant.tsx
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export default function RedGiant() {
  const tex = useTexture("/textures/red_giant_color.jpg");
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 8;

  return (
    <mesh position={[-12, 0, 0]}>
      <sphereGeometry args={[6, 128, 128]} />
      <meshPhysicalMaterial
        map={tex}
        emissive={"#ff5a2b"}
        emissiveIntensity={2.6}
        roughness={1}
        metalness={0}
        toneMapped={false}
      />
    </mesh>
  );
}
