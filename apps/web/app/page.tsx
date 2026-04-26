import React from 'react'
import dynamic from 'next/dynamic'
import NavbarMain from '@/components/navbar/navbarMain'
import MapOverlays from '@/components/map/MapOverlays'

const InteractiveMap = dynamic(() => import('@/components/map/InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#e5eedd] flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#0B8F3A] border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-[#0B8F3A] font-medium animate-pulse">Finding your location...</p>
    </div>
  )
})

export default function Page() {
  return (
    <main className="relative h-screen w-full overflow-hidden flex flex-col bg-[#e5eedd]">
      <div className="relative z-[2000] bg-white">
        <NavbarMain />
      </div>
      <div className="flex-1 relative z-[1000]">
        <InteractiveMap />
        <MapOverlays />
      </div>
    </main>
  )
}