"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { MapPin, Star, Heart } from "lucide-react";
import { useUserLocationQuery } from "@/serverQuery/website";

const DUMMY_STATIONS = [
  { id: 1, name: "Bovas Filling Station", price: "₦1,150/kg", rating: 4.8, reviews: "500+", latOffset: 0.01, lngOffset: 0.01 },
  { id: 2, name: "TotalEnergies Gas", price: "₦1,200/kg", rating: 4.5, reviews: "200+", latOffset: -0.015, lngOffset: -0.02 },
  { id: 3, name: "NNPC Retail", price: "₦1,100/kg", rating: 4.2, reviews: "150+", latOffset: 0.02, lngOffset: -0.01 },
];

const customIcon = L.divIcon({
  html: `<div class="bg-white rounded-full p-1 shadow-md border-2 border-[#0B8F3A] flex items-center justify-center w-8 h-8"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B8F3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg></div>`,
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
        {DUMMY_STATIONS.map((station) => (
          <Marker
            key={station.id}
            position={[center[0] + station.latOffset, center[1] + station.lngOffset]}
            icon={customIcon}
          >
            <Popup className="custom-popup" closeButton={false} autoPanPadding={[50, 50]}>
              <div className="p-2 w-56">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-[#FFC107] text-[10px] font-bold px-2 py-0.5 rounded-full text-[#0D1B2A] uppercase tracking-wider">
                    Verified
                  </span>
                  <Heart className="w-4 h-4 text-gray-300 hover:text-red-500 cursor-pointer transition-colors" />
                </div>
                <h3 className="font-bold text-base text-[#212529] mb-1">{station.name}</h3>
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
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
