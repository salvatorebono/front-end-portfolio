"use client";

import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    //ottenere la larghezza della finestra del browser
    function getScreenSize() {
      return window.innerWidth;
    }
    //Questa funzione viene chiamata ogni volta che la finestra viene ridimensionata
    function handleResize() {
      setScreenSize(getScreenSize());
    }

    handleResize();

    //Ogni volta che la finestra viene ridimensionata, viene richiamata la funzione handleResize
    window.addEventListener("resize", handleResize);

    //Questa è una funzione di pulizia. Viene richiamata quando il componente si smonta. È essenziale  per evitare perdite di memoria.
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
