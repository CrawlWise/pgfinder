"use client";

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'

function NavbarMain() {
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showSearch) {
        setShowSearch(false);
        return;
      }

      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA' ||
        e.metaKey || e.ctrlKey || e.altKey
      ) {
        return;
      }

      if (e.key.length === 1) {
        setShowSearch(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSearch]);

  const NAVBAR_LINKS = [
    { name: "Explore", link: "/explore" },
    { name: "Stations", link: "/stations" }
    // { name: "Orders", link: "#" }
  ]

  return (
    <header className=" top-4 mx-4 md:mx-auto max-w-7xl z-50 flex justify-between items-center px-6 py-4 bg-transparent rounded-full">
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
              className="text-[#505D6F] font-headline font-bold hover:text-[#006B28] transition-all px-2 py-1"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {showSearch ? (
          <div className="relative flex items-center transition-all duration-300">
            <Search className="w-4 h-4 text-gray-400 absolute left-3" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="input-minimalist pl-9 pr-8 py-2 rounded-full text-sm w-48 md:w-64 font-headline"
            />
            <button
              onClick={() => setShowSearch(false)}
              className="absolute right-2 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowSearch(true)}
            className="p-2.5 rounded-full hover:bg-gray-100 transition-all active:scale-90 group"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-[#505D6F] group-hover:text-[#006B28] transition-colors" />
          </button>
        )}
        <button className="hidden md:flex bg-primary-gradient text-white px-8 py-3 rounded-full font-black transition-all active:scale-95 shadow-ambient font-headline">
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
