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
