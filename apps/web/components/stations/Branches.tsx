"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, MapPin, Heart, BadgeCheck, BadgeAlert, Navigation, Phone } from "lucide-react";
import type { RetailStoreData } from "@/types/home";

export default function Branches({ branches }: { branches: RetailStoreData[] }) {
  const [favoriteBranches, setFavoriteBranches] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    if (favoriteBranches.includes(id)) {
      setFavoriteBranches(favoriteBranches.filter(bId => bId !== id));
    } else {
      setFavoriteBranches([...favoriteBranches, id]);
    }
  };

  if (!branches || branches.length === 0) return null;

  return (
    <section className="space-y-6 mt-12">
      <h2 className="text-2xl font-bold tracking-tight font-headline">Branches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {branches.map((branch) => (
          <div key={branch.id} className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 flex flex-col shadow-sm group">
            <div className="relative w-full h-48">
              <Image
                src={branch.storeImg}
                alt={branch.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button 
                onClick={() => toggleFavorite(branch.id)}
                className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full shadow-sm backdrop-blur-sm hover:bg-white transition-colors"
                aria-label="Toggle Favorite"
              >
                <Heart className={`w-5 h-5 transition-all ${favoriteBranches.includes(branch.id) ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`} />
              </button>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center mb-3 gap-2">
                <h3 className="font-bold text-lg text-[#212529] truncate">{branch.name}</h3>
                <span className="shrink-0 flex items-center justify-center">
                  {branch.verified ? (
                    <BadgeCheck className="text-blue-500" size={20} />
                  ) : (
                    <BadgeAlert className="text-gray-400" size={20} />
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-[#006b28]" />
                <span>Price: <span className="font-semibold text-gray-900">{branch.price}</span></span>
              </div>
              <div className="flex items-center gap-1.5 mb-5 text-sm text-gray-500 mt-auto">
                <Star className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
                <span className="font-semibold text-gray-700">{branch.rating} stars</span>
                <span>({branch.reviews} reviews)</span>
              </div>
              <div className="flex gap-3 w-full">
                <button className="flex-1 bg-[#f3f4f5] hover:bg-gray-200 text-[#191c1d] font-bold py-3 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 text-sm">
                  <Phone className="w-4 h-4" />
                  Call
                </button>
                <button className="flex-1 bg-primary-gradient text-white font-bold py-3 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 text-sm">
                  <Navigation className="w-4 h-4" />
                  Directions
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
