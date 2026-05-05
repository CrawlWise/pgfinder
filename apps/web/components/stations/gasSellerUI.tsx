import React from "react";
import {
  Star,
  MapPin,
  Phone,
  Navigation,
  Verified,
  Car,
  Wrench,
  ShoppingBasket,
  ChevronLeft,
  Check,
  Heart,
  X
} from "lucide-react";
import Link from "next/link";
import Branches from "./Branches";
import { retailStoreData } from "@/site-content/home";
import type { RetailStoreData } from "@/types/home";

export default function GasSellerUI({ station, isGasAvailable }: { station: any, isGasAvailable: boolean }) {
  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24">
      {/* Top Header - Mobile Navigation Style */}
      <header className="sticky top-0 z-50 glass-nav shadow-ambient h-16 flex items-center">
        <div className="flex items-center justify-between w-full px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/stations" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </Link>
            <span className="text-lg font-bold tracking-tight text-[#006b28] font-headline">{station.name}</span>
          </div>
          <div className="flex items-center gap-2">
            {station.verified && (
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Verified className="w-5 h-5 text-[#006b28]" />
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column */}
          <div className="lg:col-span-8 space-y-8">

            {/* Hero Image - Asymmetrical Layout */}
            <section className="relative group">
              <div className="aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden bg-[#f3f4f5] shadow-ambient">
                <img
                  src={station.storeImg || "https://images.unsplash.com/photo-1545147986-a9d6f2bb03b5?auto=format&fit=crop&q=80&w=2000"}
                  alt={station.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                <div>
                  {station.verified && (
                    <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-lg pointer-events-auto">
                      <Verified className="w-6 h-6 md:w-8 md:h-8 fill-[#006b28] text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg text-gray-400 hover:text-red-500 hover:bg-white pointer-events-auto transition-all">
                    <Heart className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
              </div>
            </section>

            {/* Info Header */}
            <section className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center flex-wrap gap-3">
                  {station.verified && (
                    <Verified className="w-8 h-8 md:w-10 md:h-10 text-[#006b28] shrink-0" />
                  )}
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#191c1d] font-headline">{station.name}</h1>
                  <div className="flex items-center gap-2 md:ml-2">
                    <button className="bg-[#f3f4f5] hover:bg-gray-200 text-[#191c1d] p-3 rounded-full transition-all flex items-center justify-center shadow-sm" aria-label="Call Station">
                      <Phone className="w-5 h-5" />
                    </button>
                    <button className="bg-primary-gradient text-white p-3 rounded-full shadow-ambient transition-all flex items-center justify-center" aria-label="Get Directions">
                      <Navigation className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center flex-wrap gap-3">
                  <div className="flex items-center gap-1 bg-[#ffdf9e] px-2 py-0.5 rounded-lg">
                    <Star className="w-4 h-4 fill-[#261a00] text-[#261a00]" />
                    <span className="text-sm font-bold text-[#261a00]">{station.rating}</span>
                  </div>
                  <span className="text-[#505d6f] font-medium opacity-60">{station.reviews} Reviews</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="text-[#006b28] font-bold">Open 24 Hours</span>
                </div>
              </div>

              {/* Gas Availability Toggle Indicator */}
              <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-xl shadow-ambient border border-gray-100/50 w-fit mb-6 mt-4">
                <span className={`text-sm font-extrabold tracking-widest uppercase ${isGasAvailable ? 'text-[#006b28]' : 'text-gray-300'}`}>
                  Available
                </span>
                
                <div className={`relative w-16 h-8 rounded-full flex items-center p-1 transition-colors duration-300 ${isGasAvailable ? 'bg-[#e5eedd]' : 'bg-gray-200'}`}>
                  <div className={`absolute w-6 h-6 rounded-full flex items-center justify-center shadow-sm transition-transform duration-300 ${isGasAvailable ? 'bg-[#006b28] translate-x-0' : 'bg-gray-500 translate-x-8'}`}>
                    {isGasAvailable ? (
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    ) : (
                      <X className="w-4 h-4 text-white stroke-[3]" />
                    )}
                  </div>
                </div>

                <span className={`text-sm font-extrabold tracking-widest uppercase ${!isGasAvailable ? 'text-gray-700' : 'text-gray-300'}`}>
                  Not Available
                </span>
              </div>
            </section>

            {/* Services Grid */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight font-headline">On-Site Services</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-ambient hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#d6e4f9] flex items-center justify-center">
                    <Car className="w-6 h-6 text-[#3a4859]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#191c1d]">Car Wash</p>
                    <p className="text-xs text-[#505d6f]">Premium cleaning</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-ambient hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#ffdf9e] flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-[#5b4300]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#191c1d]">Lube Bay</p>
                    <p className="text-xs text-[#505d6f]">Expert mechanics</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-ambient hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#89fb97] flex items-center justify-center">
                    <ShoppingBasket className="w-6 h-6 text-[#00531d]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#191c1d]">Mini-Mart</p>
                    <p className="text-xs text-[#505d6f]">Snacks & drinks</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Branches Section */}
            <Branches branches={retailStoreData.filter((s) => s.id !== station.id)} />

          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Map Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-ambient border border-gray-100/15">
              <div className="h-64 bg-[#f3f4f5] relative">
                <div className="absolute inset-0 bg-[#e5eedd] flex items-center justify-center opacity-50">
                  <MapPin className="w-10 h-10 text-[#006b28]" />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-[#191c1d]">Location</h3>
                  <span className="text-[#006b28] font-bold text-sm">2.4 km away</span>
                </div>

                <div className="flex items-start gap-2 text-[#505d6f] max-w-xl">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <p className="text-lg leading-relaxed font-medium opacity-80">Km 23, Lekki-Epe Expressway, Ajah Roundabout, Victoria Island Annex, Lagos State.</p>
                </div>
                <button className="w-full py-4 bg-[#f3f4f5] hover:bg-gray-200 text-[#191c1d] font-bold rounded-xl transition-all">
                  Open in Google Maps
                </button>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-8 rounded-xl shadow-ambient border border-gray-100/15 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-[#191c1d]">Operational Hours</h3>
                <span className="px-3 py-1 bg-[#006b28]/10 text-[#006b28] text-xs font-bold rounded-full uppercase tracking-widest">Active</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="font-medium text-[#505d6f]">Monday - Sunday</span>
                  <span className="font-bold text-[#006b28]">Open 24 Hours</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-medium text-[#505d6f]">Public Holidays</span>
                  <span className="font-bold text-[#006b28]">Open 24 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
