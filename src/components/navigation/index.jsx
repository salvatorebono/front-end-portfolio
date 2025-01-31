"use client";

import { BtnList } from "@/app/data";
import NavButton from "./NavButton";

const Navigation = () => {
  //per ottenere dei pulsanti uniformemente distanziati attorno a un cerchio.
  const angleIncrement = 360 / BtnList.length;
  return (
    <div className="flex w-full fixed h-screen items-center justify-center">
      <div className="w-max flex justify-center items-center relative animate-spin-slow hover:pause group">
        {BtnList.map((btn, index) => {
          //convertire in radianti
          const angleRad = (index * angleIncrement * Math.PI) / 180;

          //raggio
          const radius = "calc(20vw - 1rem)";

          //coordinata x del cerchio
          const x = `calc(${radius}*${Math.cos(angleRad)})`;

          //coordinata y del cerchio
          const y = `calc(${radius}*${Math.sin(angleRad)})`;

          return <NavButton key={btn.label} x={x} y={y} {...btn} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;
