import React from "react";
import {
  Star,
  Phone,
  Truck,
  Verified,
  ShoppingBasket,
  ShieldCheck,
  PackageCheck,
  ShoppingCart,
  Bell,
  ChevronLeft
} from "lucide-react";
import Link from "next/link";

export default function ShopDetailsPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24">
      {/* Top Header - Frosted Glass */}
      <header className="sticky top-0 z-50 glass-nav shadow-ambient h-16 flex items-center">
        <div className="flex items-center justify-between w-full px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/explore" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6 text-[#505d6f]" />
            </Link>
            <span className="text-xl font-bold tracking-tight text-[#191c1d] font-headline">Fluid Energy</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto mt-6">
        {/* Hero Section - Carousel Simulation */}
        <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden md:rounded-xl px-0 md:px-8">
          <div className="w-full h-full md:rounded-xl overflow-hidden">
             <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover shadow-ambient"
              alt="Lagos Premium Gas"
            />
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
          </div>
        </section>

        {/* Shop Info Card - Lowest on Low Background */}
        <section className="px-6 -mt-12 relative z-10">
          <div className="bg-white p-8 rounded-xl shadow-ambient border border-gray-100/15">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-3xl font-extrabold font-headline tracking-tight text-[#191c1d]">Lagos Premium Gas</h1>
                  <div className="inline-flex items-center gap-1 chip-verified shadow-sm">
                    <Verified className="w-3.5 h-3.5 fill-current" />
                    <span>Verified Vendor</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[#505d6f] opacity-80">
                  <div className="flex items-center gap-1 text-[#785900]">
                    <Star className="w-4 h-4 fill-[#fdc003] text-[#fdc003]" />
                    <span className="font-bold">4.8</span>
                  </div>
                  <span className="text-sm">·</span>
                  <span className="text-sm font-medium">2.4k Reviews</span>
                  <span className="text-sm">·</span>
                  <span className="text-sm font-medium">Lekki Phase 1, Lagos</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-[#f3f4f5] text-[#191c1d] font-bold rounded-xl hover:bg-gray-200 transition-all active:scale-95 shadow-sm">
                  <Phone className="w-5 h-5" />
                  Call Shop
                </button>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-primary-gradient text-white font-bold rounded-xl shadow-ambient transition-all active:scale-95">
                  <Truck className="w-5 h-5" />
                  Request Delivery
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 mt-12 pb-20">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-16">

            {/* Cylinder Stock */}
            <section>
              <h2 className="text-2xl font-bold font-headline mb-8 text-[#191c1d]">Cylinder Stock Availability</h2>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {[
                  { size: "3KG", stock: 100 },
                  { size: "6KG", stock: 80 },
                  { size: "12.5KG", stock: 100 },
                  { size: "25KG", stock: 100 },
                  { size: "50KG", stock: 0 },
                ].map((item, idx) => (
                  <div key={idx} className={`bg-[#f3f4f5] p-6 rounded-xl text-center transition-all ${item.stock > 0 ? 'border-b-4 border-[#006b28]' : 'border-b-4 border-gray-300 opacity-60'}`}>
                    <span className="text-xs font-black text-[#505d6f] font-label tracking-widest opacity-60 uppercase">{item.size}</span>
                    <div className="my-6 h-20 flex items-end justify-center">
                      <div className={`w-10 bg-[#006b28]/10 rounded-t-xl relative transition-all`} style={{ height: `${Math.max(30, idx * 15 + 20)}%` }}>
                        {item.stock > 0 && <div className="absolute bottom-0 w-full h-full bg-primary-gradient rounded-t-xl"></div>}
                      </div>
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider ${item.stock > 0 ? 'text-[#006b28]' : 'text-gray-400'}`}>
                      {item.stock > 0 ? 'In Stock' : 'Out Stock'}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-2xl font-bold font-headline mb-8 text-[#191c1d]">Services Provided</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Truck, title: "Home Delivery", desc: "Fast delivery within 30-45 minutes." },
                  { icon: PackageCheck, title: "Cylinder Refill", desc: "Precision weighing and safety checks." },
                  { icon: ShoppingBasket, title: "Accessories", desc: "Hoses, regulators, and camping stoves." }
                ].map((service, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-xl shadow-ambient hover:scale-[1.02] transition-all flex flex-col gap-6 border border-gray-50">
                    <div className="w-14 h-14 rounded-2xl bg-[#006b28]/10 flex items-center justify-center shrink-0">
                      <service.icon className="w-7 h-7 text-[#006b28]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#191c1d] mb-2">{service.title}</h3>
                      <p className="text-sm text-[#505d6f] leading-relaxed font-medium opacity-80">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* Delivery Info */}
            <div className="bg-[#f3f4f5] p-10 rounded-xl space-y-8 shadow-sm">
              <h3 className="text-xl font-extrabold font-headline flex items-center gap-3 text-[#191c1d]">
                <ShieldCheck className="w-6 h-6 text-[#006b28]" />
                Delivery Info
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#006b28] mt-2.5 shrink-0"></div>
                  <div>
                    <span className="block font-bold text-[#191c1d] mb-1">Primary Area</span>
                    <p className="text-sm text-[#505d6f] leading-relaxed font-medium opacity-60">Lekki Phase 1, Phase 2, Ikate, and Oniru.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#006b28] mt-2.5 shrink-0"></div>
                  <div>
                    <span className="block font-bold text-[#191c1d] mb-1">Standard Fee</span>
                    <p className="text-sm text-[#505d6f] leading-relaxed font-medium opacity-60">₦1,500 within primary area.</p>
                  </div>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200/50 space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/60 rounded-2xl border border-white">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-[#191c1d]">DPR Certified</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/60 rounded-2xl border border-white">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-bold text-[#191c1d]">SON Safety Compliant</span>
                </div>
              </div>
            </div>

            {/* Promo Card */}
            <div className="bg-gradient-to-br from-[#fdc003] to-[#785900] p-10 rounded-xl text-white relative overflow-hidden group shadow-ambient">
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-2">Bulk Discount!</h4>
                <p className="text-sm mb-6 opacity-90 leading-relaxed font-bold">Get 10% off when you refill 4 or more 12.5kg cylinders.</p>
                <button className="px-6 py-3 bg-white text-[#785900] rounded-xl text-xs font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all">
                  Claim Offer
                </button>
              </div>
              <Verified className="absolute -bottom-8 -right-8 w-40 h-40 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
