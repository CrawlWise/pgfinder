import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import Providers from "@/components/provider/providers";
import NavbarMain from "@/components/navbar/navbarMain";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PGFinder",
  description: "Mobile-first, location-based marketplace for discovering gas sellers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", poppins.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <div className="sticky top-0 left-0 right-0 z-[9999] bg-[#f8f9fa] shadow-sm">
            <NavbarMain />
          </div>
          <main className="flex-1 flex flex-col h-full relative">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
