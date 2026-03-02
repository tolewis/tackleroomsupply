"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "./use-reduced-motion";

function Terrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  const reducedMotion = useReducedMotion();

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(10, 10, 64, 64);
    const positions = geo.attributes.position;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z =
        Math.sin(x * 0.5) * 0.4 +
        Math.cos(y * 0.7) * 0.3 +
        Math.sin(x * 1.2 + y * 0.8) * 0.15;
      positions.setZ(i, z);
    }

    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (reducedMotion || !meshRef.current) return;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.02;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -1, 0]}>
      <meshStandardMaterial
        color="#2d5a3d"
        roughness={0.9}
        metalness={0.05}
        wireframe={false}
        flatShading
      />
    </mesh>
  );
}

export function HeroTerrain() {
  return (
    <Canvas
      camera={{ position: [0, 3, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 3]} intensity={0.8} color="#ffd4a3" />
      <directionalLight position={[-3, 4, -2]} intensity={0.3} color="#a3c4ff" />
      <fog attach="fog" args={["#0f0f0f", 5, 15]} />
      <Terrain />
    </Canvas>
  );
}
