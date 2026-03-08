"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import EarthAnimation from "./EarthAnimation";

export default function EarthCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 7] }}>
      <Suspense fallback={null}>
        <EarthAnimation />
      </Suspense>
    </Canvas>
  );
}
