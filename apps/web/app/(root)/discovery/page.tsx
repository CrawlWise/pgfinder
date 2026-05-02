import React from "react";
import {
  Menu,
  Search,
  LayoutGrid,
  List as ListIcon,
  Verified,
  ChevronRight,
  Navigation,
  Map as MapIcon,
  Home,
  Fuel,
  User
} from "lucide-react";
import Link from "next/link";

const LIST_ITEMS = [
  {
    id: "total-ikoyi",
    name: "TotalEnergies - Ikoyi",
    distance: "0.8km away",
    price: "₦14,500",
    status: "In Stock",
    image: "https://images.unsplash.com/photo-1545147986-a9d6f2bb03b5?auto=format&fit=crop&q=80&w=300",
    verified: true
  },
  {
    id: "nnpc-mega",
    name: "NNPC Mega Station",
    distance: "1.4km away",
    price: "₦14,200",
    status: "In Stock",
    image: "https://images.unsplash.com/photo-1527010150264-77199233bc64?auto=format&fit=crop&q=80&w=300",
    verified: false
  },
  {
    id: "ardova-ap",
    name: "Ardova Plc (AP)",
    distance: "2.1km away",
    price: "₦14,800",
    status: "Out of Stock",
    image: "https://images.unsplash.com/photo-1610492488734-932bb649826c?auto=format&fit=crop&q=80&w=300",
    verified: false,
    outOfStock: true
  },
  {
    id: "mobil-filling",
    name: "Mobil Filling Station",
    distance: "2.5km away",
    price: "₦14,650",
    status: "In Stock",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300",
    verified: true
  }
];

export default function DiscoveryListPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* Top Navigation - Frosted Glass */}
      <header className="sticky top-0 z-40 glass-nav flex items-center justify-between px-6 py-4 w-full shadow-ambient">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-all active:scale-95">
            <Menu className="w-6 h-6 text-[#505d6f]" />
          </button>
          <h1 className="font-headline font-bold tracking-tight text-[#006b28] text-xl">Discovery</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-all active:scale-95">
            <Search className="w-6 h-6 text-[#505d6f]" />
          </button>
        </div>
      </header>

      <main className="pb-32 px-6">
        {/* View Toggle */}
        <section className="py-6">
          <div className="bg-[#f3f4f5] p-1.5 rounded-xl flex items-center shadow-inner">
            <Link href="/stations" className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-[#505d6f] font-bold transition-all hover:bg-white/50">
              <LayoutGrid className="w-5 h-5" />
              <span className="text-sm font-headline">Card View</span>
            </Link>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#006b28] text-white font-bold shadow-ambient transition-all">
              <ListIcon className="w-5 h-5" />
              <span className="text-sm font-headline">List View</span>
            </button>
          </div>
        </section>

        {/* Filter Chips */}
        <section className="pb-8 overflow-x-auto flex gap-3 no-scrollbar -mx-6 px-6">
          <div className="flex items-center gap-2 chip-verified shadow-sm py-3 px-6 whitespace-nowrap">
            <Verified className="w-4 h-4 fill-current" />
            <span>Verified Only</span>
          </div>
          {["Open Now", "LPG Gas", "Price: Low to High"].map((filter) => (
            <button key={filter} className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 text-[#505d6f] rounded-full text-xs font-black whitespace-nowrap hover:bg-[#f3f4f5] transition-all shadow-sm">
              {filter}
            </button>
          ))}
        </section>

        {/* Vertical List - Stacking white cards on surface */}
        <section className="flex flex-col gap-6">
          {LIST_ITEMS.map((item) => (
            <div key={item.id} className={`bg-white rounded-xl p-5 flex gap-5 items-center group active:bg-[#f3f4f5] transition-all duration-300 shadow-ambient border border-gray-50 ${item.outOfStock ? 'opacity-80' : ''}`}>
              <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-xl bg-[#f3f4f5]">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${item.outOfStock ? 'grayscale' : ''}`}
                />
                {item.verified && (
                  <div className="absolute top-1 right-1 bg-[#fdc003] p-1 rounded-full shadow-lg">
                    <Verified className="w-3.5 h-3.5 text-[#261a00] fill-[#261a00]" />
                  </div>
                )}
              </div>
              <div className="flex-1 flex flex-col justify-between min-w-0 h-24 py-1">
                <div className="flex justify-between items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="font-headline font-black text-lg truncate text-[#191c1d] tracking-tight">{item.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1 text-[#505d6f] text-xs font-bold opacity-40 uppercase tracking-widest">
                      <Navigation className="w-3.5 h-3.5" />
                      {item.distance}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className={`w-2.5 h-2.5 rounded-full ${item.outOfStock ? 'bg-gray-300' : 'bg-[#006b28] ring-4 ring-[#006b28]/10'}`}></div>
                    <span className={`text-[10px] font-black uppercase tracking-wider ${item.outOfStock ? 'text-gray-400' : 'text-[#006b28]'}`}>{item.status}</span>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-[#505d6f] uppercase tracking-widest opacity-40 mb-0.5 uppercase">LPG 12.5KG</span>
                    <span className={`text-xl font-headline font-black ${item.outOfStock ? 'text-gray-300' : 'text-[#006b28]'}`}>{item.price}</span>
                  </div>
                  <button className="bg-[#f3f4f5] p-3 rounded-xl text-[#505d6f] group-hover:bg-[#006b28] group-hover:text-white transition-all shadow-sm">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Bottom Navigation - Glass */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-10 pt-4 glass-nav shadow-ambient rounded-t-xl border-t border-gray-100/15">
        <Link href="/explore" className="flex flex-col items-center justify-center text-[#505d6f] p-2 hover:text-[#006b28] transition-all">
          <Home className="w-6 h-6" />
          <span className="font-label text-[10px] font-black uppercase tracking-widest mt-1.5">Home</span>
        </Link>
        <Link href="/discovery" className="flex flex-col items-center justify-center bg-[#006b28] text-white rounded-xl px-6 py-2.5 scale-110 shadow-ambient transition-all">
          <MapIcon className="w-5 h-5" />
          <span className="font-label text-[10px] font-black uppercase tracking-widest mt-1">Discovery</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center text-[#505d6f] p-2 hover:text-[#006b28] transition-all">
          <Fuel className="w-6 h-6" />
          <span className="font-label text-[10px] font-black uppercase tracking-widest mt-1.5">Orders</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center text-[#505d6f] p-2 hover:text-[#006b28] transition-all">
          <User className="w-6 h-6" />
          <span className="font-label text-[10px] font-black uppercase tracking-widest mt-1.5">Profile</span>
        </Link>
      </nav>

      {/* FAB - Search Area */}
      <button className="fixed right-6 bottom-32 w-16 h-16 rounded-xl bg-primary-gradient text-white flex items-center justify-center shadow-ambient active:scale-90 transition-all z-40 border border-white/20">
        <MapIcon className="w-8 h-8" />
      </button>
    </div>
  );
}
