"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { MapPin, Star, Heart } from "lucide-react";
import { useUserLocationQuery } from "@/serverQuery/website";
import MarkerClusterGroup from "react-leaflet-cluster";
import { renderToString } from 'react-dom/server';
import { FireExtinguisher } from 'lucide-react';
import { BadgeAlert } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';
import { Fuel } from 'lucide-react';
import { retailStoreData } from "@/site-content/home";
import Image from "next/image";

const iconHTML = renderToString(
  <div className="bg-white rounded-full p-1 shadow-md border-2 border-[#0B8F3A] flex items-center justify-center w-8 h-8">
    <FireExtinguisher className="text-[#0B8F3A]" size={16} />
  </div>
)

const DUMMY_STATIONS = [
  { id: 1, name: "Bovas Filling Station", price: "₦1,150/kg", rating: 4.8, reviews: "500+", latOffset: 0.01, lngOffset: 0.01 },
  { id: 2, name: "TotalEnergies Gas", price: "₦1,200/kg", rating: 4.5, reviews: "200+", latOffset: -0.015, lngOffset: -0.02 },
  { id: 3, name: "NNPC Retail", price: "₦1,100/kg", rating: 4.2, reviews: "150+", latOffset: 0.02, lngOffset: -0.01 },
];

const customIcon = L.divIcon({
  html: `
    <div class="bg-white rounded-full p-1 shadow-md border-2 border-[#0B8F3A] flex items-center justify-center w-8 h-8">
      ${iconHTML}
    </div>
  `,
  className: "custom-leaflet-icon",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function MapController({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 13);
  }, [center, map]);
  return null;
}

const DEFAULT_CENTER: [number, number] = [9.0820, 8.6753];

export default function InteractiveMap() {
  const { data: location } = useUserLocationQuery();
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const center = location || DEFAULT_CENTER;

  return (
    <div className="absolute inset-0 z-0">
      <MapContainer
        center={center}
        zoom={location ? 13 : 6}
        style={{ height: "100%", width: "100%", background: "#e5eedd" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <MapController center={center} />

        {/* User Location Marker */}
        <MarkerClusterGroup>
          {location && (
            <Marker
              position={location}
              icon={L.divIcon({
                html: `<div class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>`,
                className: "user-location-icon",
                iconSize: [16, 16],
                iconAnchor: [8, 8]
              })}
            />
          )}

          {/* Stations */}
          {retailStoreData.map((station) => (
            <Marker
              key={station.id}
              position={[center[0] + station.latOffset, center[1] + station.lngOffset]}
              icon={customIcon}
            >
              <Popup className="custom-popup" closeButton={false} autoPanPadding={[50, 50]}>
                <div className="w-56 flex flex-col bg-white">
                  <div className="relative w-full h-32">
                    <Image
                      src={station.storeImg}
                      alt={station.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 z-10 bg-white/90 p-1.5 rounded-full shadow-sm backdrop-blur-sm cursor-pointer hover:bg-white transition-colors group">
                      <Heart className="w-4 h-4 text-gray-400 group-hover:text-red-500 group-hover:fill-red-500 transition-all" />
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center mb-2 gap-1.5">
                      <h3 className="font-bold text-base text-[#212529] truncate">{station.name}</h3>
                      <span className="shrink-0 flex items-center justify-center">
                        {station.verified ? (
                          <BadgeCheck className="text-blue-500" size={18} />
                        ) : (
                          <BadgeAlert className="text-gray-400" size={18} />
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-sm">
                      <MapPin className="w-4 h-4 text-[#0B8F3A]" />
                      <span>Price: <span className="font-semibold">{station.price}</span></span>
                    </div>
                    <div className="flex items-center gap-1 mb-4 text-xs text-gray-500">
                      <Star className="w-3 h-3 fill-[#FFC107] text-[#FFC107]" />
                      <span className="font-semibold text-gray-700">{station.rating} stars</span>
                      <span>({station.reviews} reviews)</span>
                    </div>
                    <button className="w-full bg-[#0B8F3A] hover:bg-[#09732f] text-white font-medium py-2 rounded-lg transition-colors shadow-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
