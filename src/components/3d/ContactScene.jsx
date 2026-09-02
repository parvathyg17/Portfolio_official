import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingCyberMesh() {
  const meshRef = useRef();
  const sphereRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y -= delta * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <group position={[0, 0, 0]}>
        {/* Wireframe Geosphere */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[2.5, 2]} />
          <meshStandardMaterial
            color="#06b6d4"
            wireframe
            emissive="#06b6d4"
            emissiveIntensity={0.5}
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Inner Glowing Core */}
        <mesh ref={sphereRef}>
          <sphereGeometry args={[1.2, 24, 24]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.7}
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>

        <pointLight color="#06b6d4" intensity={2} distance={6} />
        <pointLight color="#8b5cf6" intensity={2} distance={6} position={[0, -1, 0]} />
      </group>
    </Float>
  );
}

export default function ContactScene() {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none opacity-45">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <FloatingCyberMesh />
      </Canvas>
    </div>
  );
}
