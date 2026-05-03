import React from "react";
import {
  Star,
  MapPin,
  Phone,
  Navigation,
  Verified,
  Fuel,
  Car,
  Wrench,
  ShoppingBasket,
  ChevronLeft,
  Info
} from "lucide-react";
import Link from "next/link";

export default function StationDetailsPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24">
      {/* Top Header - Mobile Navigation Style */}
      <header className="sticky top-0 z-50 glass-nav shadow-ambient h-16 flex items-center">
        <div className="flex items-center justify-between w-full px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/stations" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </Link>
            <span className="text-lg font-bold tracking-tight text-[#006b28] font-headline">Fluid Energy</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Verified className="w-5 h-5 text-[#006b28]" />
            </button>
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
                  src="https://images.unsplash.com/photo-1545147986-a9d6f2bb03b5?auto=format&fit=crop&q=80&w=2000"
                  alt="Enyo Retail Station"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-6 right-6 chip-verified shadow-lg">
                <Verified className="w-4 h-4 fill-current" />
                <span>Verified Station</span>
              </div>
            </section>

            {/* Info Header */}
            <section className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1">
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#191c1d] font-headline">Enyo Retail Station</h1>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 bg-[#ffdf9e] px-2 py-0.5 rounded-lg">
                      <Star className="w-4 h-4 fill-[#261a00] text-[#261a00]" />
                      <span className="text-sm font-bold text-[#261a00]">4.9</span>
                    </div>
                    <span className="text-[#505d6f] font-medium opacity-60">1.2k Reviews</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-[#006b28] font-bold">Open 24 Hours</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="bg-[#f3f4f5] hover:bg-gray-200 text-[#191c1d] font-bold px-6 py-4 rounded-xl transition-all flex items-center gap-2 shadow-sm">
                    <Phone className="w-5 h-5" />
                    Call Station
                  </button>
                  <button className="bg-primary-gradient text-white font-bold px-8 py-4 rounded-xl shadow-ambient transition-all flex items-center gap-2">
                    <Navigation className="w-5 h-5" />
                    Get Directions
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-2 text-[#505d6f] max-w-xl">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <p className="text-lg leading-relaxed font-medium opacity-80">Km 23, Lekki-Epe Expressway, Ajah Roundabout, Victoria Island Annex, Lagos State.</p>
              </div>
            </section>

            {/* Fuel Availability - Traffic Light Bento */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight font-headline">Fuel Availability</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* PMS */}
                <div className="bg-white p-6 rounded-xl shadow-ambient flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#505d6f] opacity-40 font-label">Petrol</span>
                    <div className="w-10 h-10 rounded-full bg-[#006b28]/10 flex items-center justify-center">
                      <Fuel className="w-5 h-5 text-[#006b28]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#191c1d]">PMS</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-sm font-bold text-emerald-700">In Stock</span>
                    </div>
                  </div>
                  <p className="text-3xl font-extrabold text-[#191c1d] mt-2">₦620<span className="text-sm font-medium text-gray-400">/L</span></p>
                </div>

                {/* AGO */}
                <div className="bg-white p-6 rounded-xl shadow-ambient flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#505d6f] opacity-40 font-label">Diesel</span>
                    <div className="w-10 h-10 rounded-full bg-[#006b28]/10 flex items-center justify-center">
                      <Fuel className="w-5 h-5 text-[#006b28]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#191c1d]">AGO</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-sm font-bold text-emerald-700">In Stock</span>
                    </div>
                  </div>
                  <p className="text-3xl font-extrabold text-[#191c1d] mt-2">₦1,150<span className="text-sm font-medium text-gray-400">/L</span></p>
                </div>

                {/* DPK */}
                <div className="bg-[#f3f4f5] p-6 rounded-xl flex flex-col gap-4 opacity-60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 font-label tracking-widest">Kerosene</span>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <Info className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#191c1d]">DPK</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                      <span className="text-sm font-bold text-gray-500">Out of Stock</span>
                    </div>
                  </div>
                  <p className="text-3xl font-extrabold text-[#191c1d] mt-2">—</p>
                </div>
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
              <div className="p-4 bg-[#ffdf9e]/30 rounded-xl flex gap-3 items-start">
                <Info className="w-5 h-5 text-[#5b4300] shrink-0" />
                <p className="text-sm font-medium text-[#5b4300] leading-tight">Prices and availability are updated every 30 minutes by station management.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
