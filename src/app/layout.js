import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Salvatore Bono",
  description: "A unique creative portfolio with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <head>
          <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" sizes="any" />
          <link rel="icon" href="/icons/favicon-16x16.png" type="image/png" sizes="16x16" />
          <link rel="icon" href="/icons/favicon-32x32.png" type="image/png" sizes="32x32" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" sizes="180x180" />
          <link rel="manifest" href="/icons/site.webmanifest" />
          <link rel="icon" href="/icons/android-chrome-192x192.png" type="image/png" sizes="192x192" />
          <link rel="icon" href="/icons/android-chrome-512x512.png" type="image/png" sizes="512x512" />
        </head>
      </head>
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>{children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
