import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {

title: {
default: "AI Trip Planner",
template: "%s | AI Trip Planner"
},

description:
"AI powered travel planner for India. Generate itineraries, explore travel guides and discover destinations.",

metadataBase: new URL("https://yourdomain.com"),

openGraph: {
title: "AI Trip Planner",
description:
"Plan your perfect India trip with AI generated itineraries.",
type: "website",
},

};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
