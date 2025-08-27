import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function Tiamat() {
  const planetRef = useRef<THREE.Mesh>(null);

  // Load texture
  const colorMap = useLoader(THREE.TextureLoader, "/textures/tiamat_color.jpg");

  const orbitRadius = 800;
  const orbitSpeed = 0.015;
  const eccentricity = 0.1;
  const planetSize = 3;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = Math.cos(t * orbitSpeed) * orbitRadius;
    const z = Math.sin(t * orbitSpeed) * orbitRadius * (1 - eccentricity);

    if (planetRef.current) {
      // 🔹 Orbital position
      planetRef.current.position.set(x, 0, z);

      // 🔹 Apply axial tilt (40°)
      planetRef.current.rotation.z = (40 * Math.PI) / 180;

      // 🔹 Spin the planet (rotation on its axis)
      planetRef.current.rotation.y = t * 0.3; // ajusta 0.3 para más lento/rápido
    }
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[planetSize, 64, 64]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  );
}
