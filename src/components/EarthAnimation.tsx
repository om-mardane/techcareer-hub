"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

export default function EarthAnimation() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (earthRef.current) {
      earthRef.current.rotation.y = elapsedTime / 6;
      earthRef.current.rotation.x = elapsedTime / 15;
    }
    if (cloudRef.current) {
      cloudRef.current.rotation.y = elapsedTime / 5;
      cloudRef.current.rotation.x = elapsedTime / 15;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      
      {/* Stars Background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Earth Sphere */}
      <Sphere ref={earthRef} args={[2.8, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#1e40af"
          roughness={0.6}
          metalness={0.2}
          wireframe={true}
        />
      </Sphere>

      {/* Cloud layer (slightly larger, distorted) */}
      <Sphere ref={cloudRef} args={[2.9, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#ffffff"
          transparent
          opacity={0.3}
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </>
  );
}
