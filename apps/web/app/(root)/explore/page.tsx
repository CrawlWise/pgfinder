"use client";

import React from "react";
import dynamic from "next/dynamic";

const InteractiveMap = dynamic(() => import("@/components/map/InteractiveMap"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#e5eedd] flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#0B8F3A] border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-[#0B8F3A] font-medium animate-pulse">Finding your location...</p>
    </div>
  )
});
import MapOverlays from "@/components/map/MapOverlays";

export default function ExplorePage() {
  return (
    <main className="relative h-[calc(100vh-64px)] w-full overflow-hidden bg-[#f3f4f5]">
      {/* Map Layer */}
      <InteractiveMap />

      {/* Floating UI Overlays */}
      <MapOverlays />

      {/* Mobile Bottom Navigation Hint (if needed, but shared component handles it) */}
    </main>
  );
}
