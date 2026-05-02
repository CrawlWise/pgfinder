import React from "react";
import {
  Headset,
  Mail,
  MapPin,
  Send,
  ArrowRight,
  Verified,
  Twitter,
  Instagram,
  Facebook,
  Leaf
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
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
            <Link href="/about" className="text-[#505d6f] font-medium hover:text-[#006b28] transition-colors">About</Link>
            <Link href="/contact" className="text-[#006b28] font-bold">Contact</Link>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#f3f4f5] flex items-center justify-center overflow-hidden border border-gray-200">
             <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200"></div>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="mb-20 md:mb-32 text-center md:text-left pt-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffdf9e] text-[#261a00] rounded-full mb-6">
            <Verified className="w-4 h-4 fill-[#261a00]" />
            <span className="font-label text-[10px] font-bold uppercase tracking-wider">Trusted Energy Partner</span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-black text-[#191c1d] tracking-tighter mb-8 leading-[0.9]">
            Get in <span className="text-[#006b28] italic">Touch</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-[#505d6f] max-w-2xl leading-relaxed font-medium">
            Have questions about your gas delivery or need technical assistance? Our dedicated support team in Lagos is ready to help.
          </p>
        </section>

        {/* Contact Options Bento */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Headset, title: "Phone Support", info: "+234 (0) 800 PGFINDER", desc: "Speak directly with our local agents for immediate assistance.", color: "emerald" },
            { icon: Mail, title: "Email Us", info: "hello@pgfinder.ng", desc: "Drop us a line and we'll get back to you within 24 hours.", color: "emerald" },
            { icon: MapPin, title: "Visit Our Office", info: "Victoria Island, Lagos", desc: "PGFinder HQ, Victoria Island, Lagos State, Nigeria.", color: "emerald" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-gray-50 flex flex-col items-start hover:shadow-2xl transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl bg-[#006b28]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-7 h-7 text-[#006b28]" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3 tracking-tight">{item.title}</h3>
              <p className="text-[#505d6f] mb-8 text-base leading-relaxed opacity-80">{item.desc}</p>
              <span className="font-headline text-[#006b28] font-black text-lg underline underline-offset-8 decoration-2 decoration-[#006b28]/20 group-hover:decoration-[#006b28] transition-all cursor-pointer">
                {item.info}
              </span>
            </div>
          ))}
        </section>

        {/* Form Layout */}
        <section className="flex flex-col lg:flex-row gap-12 items-stretch mb-32">
          {/* Contact Form */}
          <div className="flex-1 bg-[#f3f4f5] p-10 md:p-16 rounded-[3rem]">
            <h2 className="font-headline text-4xl font-black mb-10 tracking-tight">Send a Message</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="font-label text-xs font-black uppercase text-[#505d6f] ml-1 tracking-widest">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white border-none rounded-2xl px-6 py-5 focus:ring-4 focus:ring-[#006b28]/10 transition-all placeholder:text-gray-300 text-lg font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-label text-xs font-black uppercase text-[#505d6f] ml-1 tracking-widest">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.ng"
                    className="w-full bg-white border-none rounded-2xl px-6 py-5 focus:ring-4 focus:ring-[#006b28]/10 transition-all placeholder:text-gray-300 text-lg font-medium"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="font-label text-xs font-black uppercase text-[#505d6f] ml-1 tracking-widest">Your Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you today?"
                  className="w-full bg-white border-none rounded-2xl px-6 py-5 focus:ring-4 focus:ring-[#006b28]/10 transition-all placeholder:text-gray-300 text-lg font-medium resize-none"
                ></textarea>
              </div>
              <button className="w-full md:w-auto px-12 py-6 bg-gradient-to-r from-[#006b28] to-[#008735] text-white font-headline font-black text-xl rounded-2xl shadow-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-4">
                Send Message
                <Send className="w-6 h-6" />
              </button>
            </form>
          </div>

          {/* Side Info */}
          <div className="lg:w-1/3 flex flex-col gap-8">
            <div className="relative h-80 lg:h-auto flex-1 rounded-[3rem] overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                alt="Our Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#006b28]/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                 <p className="text-white font-bold text-xl leading-tight">Join a community of 5,000+ happy users.</p>
              </div>
            </div>
            <div className="bg-[#e1e3e4] p-10 rounded-[3rem] space-y-6">
              <h4 className="font-headline text-2xl font-bold tracking-tight">Quick Answer?</h4>
              <p className="text-[#505d6f] text-base leading-relaxed font-medium">Most questions about delivery times and refills can be answered in seconds.</p>
              <Link href="#" className="flex items-center gap-2 text-[#006b28] font-black group">
                Check the FAQs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Socials */}
        <section className="flex flex-col items-center py-20 bg-[#f3f4f5]/50 rounded-[4rem]">
          <h5 className="font-label text-xs font-black uppercase tracking-[0.2em] text-[#505d6f] mb-12">Follow Our Journey</h5>
          <div className="flex gap-12">
            {[Twitter, Instagram, Facebook].map((Icon, idx) => (
              <Link key={idx} href="#" className="text-[#505d6f] hover:text-[#006b28] transition-all flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <Icon className="w-8 h-8" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-6 bg-white border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-7xl mx-auto">
          <span className="font-headline font-black text-[#006b28] text-3xl tracking-tighter">PGFinder.</span>
          <div className="flex flex-wrap justify-center gap-10 font-bold text-sm text-[#505d6f]">
            <Link href="#" className="hover:text-[#006b28] transition-all">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#006b28] transition-all">Terms of Service</Link>
            <Link href="#" className="hover:text-[#006b28] transition-all">Sustainability Report</Link>
          </div>
          <p className="font-medium text-sm text-[#505d6f] opacity-60">
            © 2024 PGFinder Energy.
          </p>
        </div>
      </footer>
    </div>
  );
}
