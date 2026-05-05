"use client";

import React, { useState } from "react";
import { Search, LocateFixed, Plus, X } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

export default function MapOverlays() {
  const queryClient = useQueryClient();
  const [showCard, setShowCard] = useState(true);

  const handleLocate = () => {
    queryClient.invalidateQueries({ queryKey: ["userLocation"] });
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-[1000] flex flex-col justify-between p-4 md:p-8">
      <div /> {/* Spacer */}
      
      <div className="flex justify-between items-end w-full">
        {/* Bottom Left Card */}
        {showCard ? (
          <div className="pointer-events-auto bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl w-[320px] border border-white/20 relative">
            <button 
              onClick={() => setShowCard(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <h2 className="text-base md:text-lg font-bold text-[#212529] mb-1 tracking-tight pr-6">Refill your gas today</h2>
            <p className="text-xs md:text-sm text-gray-500 mb-4 leading-relaxed">
              Browse 12+ verified stations near your location with real-time pricing.
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a station..."
                className="w-full pl-9 pr-4 py-2.5 bg-gray-50/80 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#0B8F3A]/20 focus:bg-white border border-gray-100 transition-all placeholder:text-gray-400"
              />
            </div>
          </div>
        ) : (
          <div /> /* Empty spacer to maintain flex layout for right-aligned FABs */
        )}

        {/* Bottom Right FABs */}
        <div className="pointer-events-auto flex flex-col gap-3">
          <button 
            onClick={handleLocate}
            title="Find my location"
            className="w-12 h-12 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center hover:bg-gray-50 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] group border border-gray-100/50"
          >
            <LocateFixed className="w-5 h-5 text-[#0B8F3A] group-hover:scale-110 transition-transform" />
          </button>
          <button 
            title="Add new station"
            className="w-14 h-14 bg-[#0B8F3A] rounded-full shadow-[0_8px_30px_rgba(11,143,58,0.3)] flex items-center justify-center hover:bg-[#09732f] transition-all hover:scale-105 active:scale-95 border-2 border-white/20"
          >
            <Plus className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
