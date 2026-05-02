import React from "react";
import {
  Verified,
  Handshake,
  ShieldCheck,
  CheckCircle,
  Smile,
  Award,
  Leaf
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
       {/* Top Navigation */}
       <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <Link href="/explore" className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-[#006b28]" />
            <span className="text-xl font-bold text-[#006b28] tracking-tight font-headline">PGFinder</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/explore" className="text-[#505d6f] font-medium hover:text-[#006b28] transition-colors">Home</Link>
            <Link href="/about" className="text-[#006b28] font-bold">About</Link>
            <Link href="/contact" className="text-[#505d6f] font-medium hover:text-[#006b28] transition-colors">Contact</Link>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#f3f4f5] flex items-center justify-center overflow-hidden border border-gray-200">
             <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-32">
        {/* Hero Section */}
        <section className="relative w-full min-h-[500px] flex items-center px-6 md:px-12 py-20 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdf9e] text-[#261a00] text-sm font-bold tracking-wide font-label">
                <Verified className="w-4 h-4 fill-[#261a00]" />
                NIGERIA&apos;S ENERGY CONDUIT
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-[#191c1d] leading-[1.1] tracking-tight">
                Connecting Nigeria to <span className="text-[#006b28] italic">Reliable</span> Energy
              </h1>
              <p className="text-lg md:text-xl text-[#505d6f] max-w-lg leading-relaxed">
                We are transforming the energy landscape by bridging the gap between local gas retailers and consumers through a seamless digital experience.
              </p>
              <div className="pt-4">
                <Link href="/explore" className="bg-gradient-to-r from-[#006b28] to-[#008735] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:opacity-90 active:scale-95 transition-all shadow-xl inline-block">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#89fb97]/20 blur-3xl rounded-full -z-10 group-hover:bg-[#89fb97]/30 transition-all"></div>
              <img
                src="https://images.unsplash.com/photo-1541913193026-66f6f3630f9d?auto=format&fit=crop&q=80&w=1200"
                alt="Nigerian Innovation"
                className="rounded-[3rem] w-full aspect-[4/5] object-cover shadow-2xl transform md:rotate-2 hover:rotate-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-28 px-6 bg-[#f3f4f5]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
              <div className="md:col-span-5">
                <h2 className="text-4xl font-black font-headline mb-8 text-[#191c1d] tracking-tight">The PGFinder Story</h2>
                <div className="w-24 h-2 bg-[#fdc003] rounded-full"></div>
              </div>
              <div className="md:col-span-7 space-y-8">
                <p className="text-2xl text-[#505d6f] leading-relaxed font-medium">
                  Born from a simple observation in the heart of Lagos, PGFinder began as a solution to a daily struggle: the inconsistent access to cooking gas and clean energy.
                </p>
                <p className="text-lg text-[#191c1d] leading-relaxed opacity-80">
                  Our origin story is one of innovation meeting necessity. We&apos;ve built a platform that doesn&apos;t just deliver cylinders, but delivers peace of mind. By digitizing the supply chain, we empower local vendors to reach more customers while ensuring every household has a reliable energy partner at their fingertips.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-28 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
              <h2 className="text-4xl font-black font-headline tracking-tight">What Drives Us</h2>
              <p className="text-[#505d6f] font-bold uppercase tracking-widest text-sm">Built on principles of integrity and safety.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Value 1 */}
              <div className="bg-[#f8f9fa] p-12 rounded-[2.5rem] group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-[#006b28]/10 flex items-center justify-center mb-10 group-hover:bg-[#006b28] transition-colors duration-500">
                  <Handshake className="w-8 h-8 text-[#006b28] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4">Trust</h3>
                <p className="text-[#505d6f] leading-relaxed">We foster transparent relationships between vendors and users, ensuring every transaction is backed by accountability.</p>
              </div>
              {/* Value 2 */}
              <div className="bg-[#f8f9fa] p-12 rounded-[2.5rem] md:translate-y-12 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-[#fdc003]/10 flex items-center justify-center mb-10 group-hover:bg-[#fdc003] transition-colors duration-500">
                  <CheckCircle className="w-8 h-8 text-[#785900] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4">Reliability</h3>
                <p className="text-[#505d6f] leading-relaxed">Energy is a necessity, not a luxury. We guarantee timely fulfillment and consistent availability across our network.</p>
              </div>
              {/* Value 3 */}
              <div className="bg-[#f8f9fa] p-12 rounded-[2.5rem] group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-[#ba1a1a]/10 flex items-center justify-center mb-10 group-hover:bg-[#ba1a1a] transition-colors duration-500">
                  <ShieldCheck className="w-8 h-8 text-[#ba1a1a] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4">Safety</h3>
                <p className="text-[#505d6f] leading-relaxed">Adhering to strict regulatory standards, we prioritize the safety of our riders, vendors, and the communities we serve.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Bento */}
        <section className="py-28 px-6 bg-[#f3f4f5]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black font-headline mb-4 tracking-tight">Impact in Numbers</h2>
              <p className="text-[#505d6f] font-medium">Our growing community is reshaping energy access.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2 bg-[#006b28] rounded-[3rem] p-16 text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <span className="text-7xl font-black font-headline block mb-4">5,000+</span>
                  <p className="text-2xl font-medium opacity-90">Satisfied Customers</p>
                </div>
                <Smile className="absolute right-[-5%] bottom-[-5%] w-64 h-64 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              </div>
              <div className="bg-white rounded-[3rem] p-12 flex flex-col justify-center border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <span className="text-5xl font-black font-headline text-[#006b28] mb-2">450+</span>
                <p className="text-xs font-black uppercase tracking-widest text-[#505d6f]">Active Sellers</p>
              </div>
              <div className="bg-[#fdc003] rounded-[3rem] p-12 flex flex-col justify-center text-[#261a00] shadow-xl">
                <span className="text-5xl font-black font-headline mb-2">1,200+</span>
                <p className="text-xs font-black uppercase tracking-widest opacity-80">Verified Riders</p>
              </div>
              <div className="md:col-span-4 bg-white rounded-[3rem] p-12 flex items-center justify-between overflow-x-auto border border-gray-100 shadow-sm gap-12 no-scrollbar">
                <p className="text-[#505d6f] font-black text-sm shrink-0 tracking-widest">TRUSTED BY INDUSTRY LEADERS</p>
                <div className="flex items-center gap-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <span className="text-2xl font-black font-headline whitespace-nowrap">ECOWAS Energy</span>
                  <span className="text-2xl font-black font-headline whitespace-nowrap">Lagos CleanAir</span>
                  <span className="text-2xl font-black font-headline whitespace-nowrap">PowerGrid NG</span>
                  <span className="text-2xl font-black font-headline whitespace-nowrap">NitroGas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-28 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold font-headline mb-16 text-[#505d6f] uppercase tracking-widest">Certified & Verified Excellence</h2>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24">
              {[
                { icon: ShieldCheck, label: "ISO CERTIFIED", color: "#006b28" },
                { icon: Award, label: "ENERGY TECH AWARD", color: "#fdc003" },
                { icon: Leaf, label: "SUSTAINABILITY MARK", color: "#006b28" }
              ].map((cert, idx) => (
                <div key={idx} className="flex flex-col items-center gap-6 group">
                  <div className="w-24 h-24 bg-[#f8f9fa] rounded-full flex items-center justify-center border border-gray-100 group-hover:shadow-lg transition-all" style={{ color: cert.color }}>
                    <cert.icon className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-black font-label text-[#505d6f] tracking-widest">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="w-full py-16 px-6 bg-[#191c1d] text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-7xl mx-auto">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-headline font-black text-[#89fb97] text-2xl">PGFinder Energy.</span>
            <p className="text-sm opacity-60">© 2024 PGFinder Energy. Powering Nigeria Responsibly.</p>
          </div>
          <div className="flex gap-10 text-sm font-medium opacity-80">
            <Link href="#" className="hover:text-[#89fb97] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#89fb97] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
