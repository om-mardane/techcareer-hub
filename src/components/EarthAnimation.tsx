"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function EarthAnimation() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudRef = useRef<THREE.Mesh>(null);

  // Load high-resolution photo-realistic textures downloaded locally
  const [colorMap, normalMap, specularMap, cloudsMap] = useTexture([
    '/textures/earth_atmos_2048.jpg',
    '/textures/earth_normal_2048.jpg',
    '/textures/earth_specular_2048.jpg',
    '/textures/earth_clouds_1024.png' // .png has transparency for clouds
  ]);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    
    // Smoothly interpolate the user's mouse pointer into a 3D rotation angle
    // state.pointer.x and y range from -1 to 1 based on screen position
    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = (state.pointer.y * Math.PI) / 6;

    if (earthRef.current) {
      // Base continuous rotation + interactive mouse parallax rotation
      earthRef.current.rotation.y = (elapsedTime / 10) + targetX;
      earthRef.current.rotation.x = (elapsedTime / 25) + targetY;
    }
    if (cloudRef.current) {
      // Clouds rotate slightly faster to simulate atmospheric movement
      cloudRef.current.rotation.y = (elapsedTime / 8) + targetX;
      cloudRef.current.rotation.x = (elapsedTime / 20) + targetY;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      {/* Sun Light hitting the front edge of the earth */}
      <directionalLight position={[5, 3, 5]} intensity={2.5} color="#ffffff" />
      {/* Subtle purple rim light for aesthetic */}
      <directionalLight position={[-5, -3, -5]} intensity={0.5} color="#4b0082" />
      
      {/* Stars Background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Earth Sphere - Solid Planet */}
      <Sphere ref={earthRef} args={[2.8, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={specularMap}
          metalness={0.1}
          roughness={0.8}
        />
      </Sphere>

      {/* Cloud layer - Floating slightly above the planet surface */}
      <Sphere ref={cloudRef} args={[2.83, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          map={cloudsMap}
          transparent={true}
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </Sphere>
    </>
  );
}
