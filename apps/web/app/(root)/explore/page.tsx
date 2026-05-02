"use client";

import React from "react";
import InteractiveMap from "@/components/map/InteractiveMap";
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
