
import React from 'react'
import Link from 'next/link'
import { Search, Menu } from 'lucide-react'

function NavbarMain() {
  const NAVBAR_LINKS = [
    { name: "Explore", link: "/explore" },
    { name: "Stations", link: "/stations" },
    { name: "Orders", link: "#" }
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex items-center gap-12">
        <Link href="/explore" className="text-2xl font-black tracking-tighter text-[#006B28] font-headline">
          PGFinder
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-8 items-center">
          {NAVBAR_LINKS.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-[#505D6F] font-bold hover:text-[#006B28] transition-all px-2 py-1 rounded-lg"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2.5 rounded-full hover:bg-gray-100 transition-all active:scale-90 group">
          <Search className="w-5 h-5 text-[#505D6F] group-hover:text-[#006B28] transition-colors" />
        </button>
        <button className="hidden md:flex bg-gradient-to-br from-[#006B28] to-[#008735] text-white px-8 py-3 rounded-2xl font-black transition-all active:scale-95 shadow-lg shadow-[#006B28]/20">
          Sign Up
        </button>
        <button className="md:hidden p-2.5 rounded-full hover:bg-gray-100 transition-all">
          <Menu className="w-6 h-6 text-[#505D6F]" />
        </button>
      </div>
    </header>
  )
}

export default NavbarMain
