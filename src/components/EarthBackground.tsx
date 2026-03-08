"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import the heavy Three.js components — this avoids blocking initial render
const EarthCanvas = dynamic(() => import("./EarthCanvas"), {
  ssr: false,
  loading: () => <EarthFallback />,
});

// A beautiful CSS-only fallback shown while textures load
function EarthFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className="rounded-full opacity-30 animate-pulse"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle at 35% 35%, #6ee7ff, #1a6aff 40%, #0a0a2a 80%)",
          boxShadow: "0 0 120px 40px rgba(100,180,255,0.15)",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}

export default function EarthBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay so the rest of the page renders first, then load 3D
    const timer = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return <EarthFallback />;

  return (
    <Suspense fallback={<EarthFallback />}>
      <EarthCanvas />
    </Suspense>
  );
}

