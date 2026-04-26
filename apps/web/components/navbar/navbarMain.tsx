
import React from 'react'
import Link from 'next/link'
import { NavbarItem } from '@/components/types/website'

function NavbarMain() {
  const NAVBARMAIN: NavbarItem[] = [
    { name: "Explore", link: "/explore" },
    { name: "Stations", link: "/stations" }
  ]

  return (
    <div className='tabs-navigation flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div className='tab-group flex gap-4'>
          {NAVBARMAIN.map((item, index) => (
            <Link key={index} href={item.link} className="font-medium hover:text-[#0B8F3A] transition-colors">{item.name}</Link>
          ))}
        </div>
        <div className='tab-indicator'>

        </div>
      </div>

      <div className='nav-actions flex gap-4 items-center'>
        <button className='search-btn font-medium hover:text-[#0B8F3A] transition-colors'>Search</button>
        <button className='signup-btn bg-[#0B8F3A] text-white px-4 py-2 rounded font-medium hover:bg-[#09732f] transition-colors'>Sign Up</button>
      </div>
    </div>
  )
}

export default NavbarMain