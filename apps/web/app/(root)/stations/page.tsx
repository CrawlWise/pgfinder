import React from "react";
import {
  Star,
  MapPin,
  Search,
  Bell,
  Verified,
  LayoutGrid,
  List,
  Settings2,
  Navigation,
  ChevronRight,
  Map as MapIcon
} from "lucide-react";
import Link from "next/link";

const STATIONS = [
  {
    id: "bovas",
    name: "BOVAS Filling Station",
    image: "https://images.unsplash.com/photo-1545147986-a9d6f2bb03b5?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviews: "1.2k",
    distance: "0.8km",
    prices: { lpg: "₦14,500", pms: "₦685" },
    status: "In Stock"
  },
  {
    id: "enyo",
    name: "Enyo Retail",
    image: "https://images.unsplash.com/photo-1527010150264-77199233bc64?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    reviews: "850",
    distance: "2.4km",
    prices: { lpg: "₦15,200", pms: "₦710" },
    status: "In Stock"
  },
  {
    id: "total",
    name: "TotalEnergies",
    image: "https://images.unsplash.com/photo-1610492488734-932bb649826c?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: "2.4k",
    distance: "3.1km",
    prices: { lpg: "Out of stock", pms: "₦675" },
    status: "Low LPG",
    statusColor: "text-red-500 bg-red-50"
  }
];

export default function StationsPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-32">
      {/* Top Header */}
      <header className="bg-white/80 backdrop-blur-xl sticky top-0 left-0 right-0 z-50 flex justify-between items-center w-full px-6 py-4 shadow-sm">
        <div className="flex items-center gap-8">
          <Link href="/explore" className="text-xl font-black tracking-tighter text-[#191c1d] font-headline">Fluid Energy</Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/explore" className="text-[#505d6f] font-medium hover:text-[#006b28] transition-colors">Home</Link>
            <Link href="/stations" className="text-[#006b28] font-black underline underline-offset-8 decoration-4 decoration-[#006b28]/10">Stations</Link>
            <Link href="#" className="text-[#505d6f] font-medium hover:text-[#006b28] transition-colors">Orders</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-[#f3f4f5] px-6 py-3 rounded-2xl gap-3 text-gray-400 w-80">
            <Search className="w-4 h-4" />
            <input
              type="text"
              placeholder="Search stations..."
              className="bg-transparent border-none focus:ring-0 text-sm w-full font-medium text-[#191c1d]"
            />
          </div>
          <button className="p-3 rounded-2xl hover:bg-[#f3f4f5] transition-colors relative">
            <Bell className="w-5 h-5 text-[#505d6f]" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full border-2 border-white"></span>
          </button>
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-[#006b28]/10 bg-gray-100">
             <div className="w-full h-full bg-gradient-to-br from-[#89fb97] to-[#008735]/30"></div>
          </div>
        </div>
      </header>

      <main className="pt-12 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-black tracking-tight text-[#191c1d] font-headline">Nearby Stations</h1>
              <p className="text-[#505d6f] text-xl font-medium opacity-80">Showing energy hubs within 5km of Ikeja, Lagos.</p>
            </div>
            {/* View Toggle */}
            <div className="bg-[#f3f4f5] p-1.5 rounded-2xl flex w-fit shadow-inner">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#006b28] font-black shadow-lg transition-all">
                <LayoutGrid className="w-4 h-4" />
                <span className="text-sm">Card View</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-[#505d6f] font-bold hover:text-[#191c1d] transition-all">
                <List className="w-4 h-4" />
                <span className="text-sm">List View</span>
              </button>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-3 mt-12">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#006b28] text-white font-black text-sm shadow-xl shadow-[#006b28]/20 active:scale-95 transition-all">
              <Verified className="w-4 h-4 fill-white" />
              Verified Only
            </button>
            {["Open Now", "LPG Gas", "Petrol", "Diesel"].map((filter) => (
              <button key={filter} className="px-6 py-3 rounded-full bg-white text-[#505d6f] font-bold text-sm border border-gray-100 hover:bg-[#f3f4f5] transition-all">
                {filter}
              </button>
            ))}
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#505d6f] font-bold text-sm border border-gray-100 hover:bg-[#f3f4f5] transition-all">
              <Settings2 className="w-4 h-4" />
              More Filters
            </button>
          </div>
        </section>

        {/* Stations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {STATIONS.map((station) => (
            <Link href={`/stations/${station.id}`} key={station.id} className="group bg-white rounded-[3rem] overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-50 flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={station.image}
                  alt={station.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-[#fdc003] text-[#261a00] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg">
                    <Star className="w-3 h-3 fill-[#261a00]" />
                    Verified
                  </span>
                  <span className={`backdrop-blur-xl px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg ${station.status === 'In Stock' ? 'bg-white/80 text-[#006b28]' : 'bg-[#ba1a1a]/10 text-[#ba1a1a]'}`}>
                    {station.status === 'In Stock' && <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>}
                    {station.status}
                  </span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-[#191c1d] tracking-tight">{station.name}</h3>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-[#fdc003] text-[#fdc003]" />
                      <span className="text-sm font-black text-[#191c1d]">{station.rating}</span>
                      <span className="text-xs font-bold text-[#505d6f] opacity-60">({station.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest block mb-1">Distance</span>
                    <span className="text-sm font-black text-[#006b28] bg-[#006b28]/5 px-3 py-1 rounded-lg">{station.distance}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="bg-[#f8f9fa] p-5 rounded-3xl group-hover:bg-[#f3f4f5] transition-colors">
                    <span className="text-[10px] font-black text-[#505d6f] uppercase tracking-widest block mb-2 opacity-60">LPG Gas (12.5kg)</span>
                    <p className={`text-xl font-black ${station.prices.lpg.includes('Out') ? 'text-gray-300' : 'text-[#191c1d]'}`}>{station.prices.lpg}</p>
                  </div>
                  <div className="bg-[#f8f9fa] p-5 rounded-3xl group-hover:bg-[#f3f4f5] transition-colors">
                    <span className="text-[10px] font-black text-[#505d6f] uppercase tracking-widest block mb-2 opacity-60">Petrol (Lit)</span>
                    <p className="text-xl font-black text-[#191c1d]">{station.prices.pms}</p>
                  </div>
                </div>

                <button className="mt-8 w-full py-5 rounded-2xl bg-[#f3f4f5] group-hover:bg-[#006b28] group-hover:text-white group-hover:shadow-xl group-hover:shadow-[#006b28]/20 font-black text-base transition-all flex items-center justify-center gap-3">
                  Get Directions
                  <Navigation className="w-5 h-5" />
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* List View Section */}
        <div className="mt-24 mb-32">
          <h2 className="text-xl font-black text-gray-300 mb-10 uppercase tracking-[0.3em]">Other Nearby Hubs</h2>
          <div className="space-y-6">
            {[
              { name: "Rainoil Ikeja", info: "Ikeja GRA, Lagos • 4.2km away", price: "₦14,800" },
              { name: "Ardova Plc", info: "Oba Akran Ave • 5.1km away", price: "₦15,000" }
            ].map((hub, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] flex items-center justify-between group hover:bg-[#f3f4f5] transition-all border border-gray-50 shadow-sm">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-[#f8f9fa] flex items-center justify-center text-[#006b28] group-hover:bg-white transition-all">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-[#191c1d]">{hub.name}</h4>
                    <p className="text-sm font-bold text-[#505d6f] opacity-60">{hub.info}</p>
                  </div>
                </div>
                <div className="flex items-center gap-16 text-right">
                  <div className="hidden sm:block">
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest block mb-1">LPG Price</span>
                    <span className="font-black text-[#191c1d] text-lg">{hub.price}</span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest block mb-1">Status</span>
                    <span className="text-[#006b28] text-sm font-black">Available</span>
                  </div>
                  <button className="p-4 rounded-2xl bg-[#f3f4f5] text-[#505d6f] group-hover:bg-[#006b28] group-hover:text-white transition-all">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-12 right-12 h-20 w-20 bg-[#006b28] text-white rounded-[2rem] shadow-2xl shadow-[#006b28]/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-40 border-4 border-white/20">
        <MapIcon className="w-10 h-10" />
      </button>
    </div>
  );
}
