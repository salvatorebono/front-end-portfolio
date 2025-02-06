"use client";

import useScreenSize from "./hooks/useScreenSize";

const ResponsiveComponent = ({ children }) => {
  // Custom hook useScreenSize serve per ottenere la larghezza dello schermo
  const size = useScreenSize();

  /* Permette al componente "figlio" di accedere alle dimensioni dello schermo e di adattare di conseguenza il suo rendering */
  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
