"use client";

import React, { useState } from "react";
import {
  Star,
  MapPin,
  Search,
  Bell,
  LayoutGrid,
  List,
  Settings2,
  Navigation,
  ChevronRight,
  Map as MapIcon,
  Heart,
  BadgeCheck,
  BadgeAlert
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { retailStoreData } from "@/site-content/home";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function StationsPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [distance, setDistance] = useState(5);
  const [viewMode, setViewMode] = useState<"card" | "list">("card");

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-32">

      <main className="pt-12 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h1 className="text-display-md md:text-display-lg text-[#191c1d] tracking-tighter leading-[0.9]">Nearby Stations</h1>
              <p className="text-[#505d6f] text-xl font-medium opacity-60">Showing energy hubs within 5km of Ikeja, Lagos.</p>
            </div>
            {/* View Toggle - Sectioning */}
            <div className="bg-[#f3f4f5] p-1.5 rounded-xl flex w-fit shadow-inner">
              <button
                onClick={() => setViewMode("card")}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-black transition-all ${viewMode === 'card' ? 'bg-white text-[#006b28] shadow-ambient' : 'text-[#505d6f] hover:text-[#191c1d]'}`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="text-sm">Card View</span>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-black transition-all ${viewMode === 'list' ? 'bg-white text-[#006b28] shadow-ambient' : 'text-[#505d6f] hover:text-[#191c1d]'}`}
              >
                <List className="w-4 h-4" />
                <span className="text-sm">List View</span>
              </button>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-col gap-4 mt-12">
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#505d6f] font-black text-sm border border-gray-100 hover:bg-[#f3f4f5] transition-all shadow-sm">
                <BadgeCheck className="w-5 h-5 text-blue-500" />
                <span>Verified Only</span>
              </button>

              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#505d6f] font-black text-sm border border-gray-100 hover:bg-[#f3f4f5] transition-all shadow-sm">
                <BadgeAlert className="w-5 h-5 text-gray-400" />
                <span>Unverified</span>
              </button>

              <button className="px-6 py-3 rounded-full bg-[#006b28] text-white font-black text-sm shadow-md transition-all">
                Gas Stations
              </button>

              {["Open Now", "Petrol", "Diesel"].map((filter) => (
                <button key={filter} className="px-6 py-3 rounded-full bg-white text-[#505d6f] font-black text-sm border border-gray-100 hover:bg-[#f3f4f5] transition-all shadow-sm">
                  {filter}
                </button>
              ))}

              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm border transition-all shadow-sm ${showFilters ? 'bg-[#006b28] text-white border-[#006b28]' : 'bg-white text-[#505d6f] border-gray-100 hover:bg-[#f3f4f5]'}`}
              >
                <Settings2 className="w-4 h-4" />
                More Filters
              </button>
            </div>

            {/* Extended Filters Panel */}
            {showFilters && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-2 animate-in fade-in slide-in-from-top-4 duration-200">
                <div className="max-w-md">
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-bold text-[#191c1d]">Distance Radius</label>
                    <span className="font-black text-[#006b28] bg-[#006b28]/10 px-3 py-1 rounded-lg">
                      {distance} km
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={distance}
                    onChange={(e) => setDistance(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#006b28]"
                  />
                  <div className="flex justify-between text-xs font-bold text-gray-400 mt-2">
                    <span>1 km</span>
                    <span>50 km</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Stations View Mode */}
        {viewMode === "card" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
            {retailStoreData.map((station) => (
              <div key={station.id} className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 flex flex-col shadow-sm group">
                <div className="relative w-full h-56">
                  <Image
                    src={station.storeImg}
                    alt={station.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full shadow-sm backdrop-blur-sm cursor-pointer hover:bg-white transition-colors group/heart">
                    <Heart className="w-5 h-5 text-gray-400 group-hover/heart:text-red-500 group-hover/heart:fill-red-500 transition-all" />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center mb-3 gap-2">
                    <h3 className="font-bold text-lg text-[#212529] truncate">{station.name}</h3>
                    <span className="shrink-0 flex items-center justify-center">
                      {station.verified ? (
                        <BadgeCheck className="text-blue-500" size={20} />
                      ) : (
                        <BadgeAlert className="text-gray-400" size={20} />
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#0B8F3A]" />
                    <span>Price: <span className="font-semibold text-gray-900">{station.price}</span></span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-5 text-sm text-gray-500 mt-auto">
                    <Star className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
                    <span className="font-semibold text-gray-700">{station.rating} stars</span>
                    <span>({station.reviews} reviews)</span>
                  </div>
                  <Link href={`/stations/${station.id}`} className="w-full">
                    <button className="w-full bg-[#0B8F3A] hover:bg-[#09732f] text-white font-medium py-3 rounded-lg transition-colors shadow-sm">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white shadow-sm overflow-hidden mb-32">
            <Table className="border-none">
              <TableHeader className="bg-[#f8f9fa] border-none">
                <TableRow className="border-none">
                  <TableHead className="w-[100px] font-black text-[#505d6f]">Image</TableHead>
                  <TableHead className="font-black text-[#505d6f]">Name</TableHead>
                  <TableHead className="font-black text-[#505d6f]">Status</TableHead>
                  <TableHead className="font-black text-[#505d6f]">Distance</TableHead>
                  <TableHead className="font-black text-[#505d6f]">Reviews</TableHead>
                  <TableHead className="text-right font-black text-[#505d6f]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {retailStoreData.map((station) => (
                  <TableRow key={station.id} className="hover:bg-[#f3f4f5] transition-colors group border-none">
                    <TableCell>
                      <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                        <Image src={station.storeImg} alt={station.name} fill className="object-cover" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-bold text-[#191c1d] text-base">{station.name}</div>
                    </TableCell>
                    <TableCell>
                      {station.verified ? (
                        <div className="flex items-center gap-1.5 text-blue-500 bg-blue-50 px-2.5 py-1 rounded-full w-fit">
                          <BadgeCheck className="w-4 h-4" />
                          <span className="text-xs font-bold">Verified</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full w-fit">
                          <BadgeAlert className="w-4 h-4" />
                          <span className="text-xs font-bold">Unverified</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-[#006b28]">
                        <MapPin className="w-4 h-4" />
                        {(Math.sqrt(Math.pow(station.latOffset, 2) + Math.pow(station.lngOffset, 2)) * 111).toFixed(1)} km
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <Star className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
                        <span className="font-bold">{station.rating}</span>
                        <span className="text-gray-400">({station.reviews})</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link href={`/stations/${station.id}`}>
                        <button className="bg-white hover:bg-[#006b28] border border-gray-200 hover:border-transparent text-[#505d6f] hover:text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm">
                          View Details
                        </button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </main>

      {/* Floating Action Button - Glass Style */}
      <button className="fixed bottom-12 right-12 h-20 w-20 bg-primary-gradient text-white rounded-xl shadow-ambient flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-40 border border-white/20">
        <MapIcon className="w-10 h-10" />
      </button>
    </div>
  );
}
