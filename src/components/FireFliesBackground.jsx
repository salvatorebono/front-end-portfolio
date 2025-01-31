"use client";

import { useEffect, useState } from "react";

const createFirefly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const FireFliesBackground = () => {
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {
    const addFireflyPeriodically = () => {
      //crea una nuova lucciola
      const newFirefly = createFirefly();

      //aggiornare lo stato in React quando il nuovo stato dipende dallo stato precedente
      setFireflies((currentFireflies) => [
        //Controlla se sono presenti massimo 15 lucciole, nel caso in cui questo limite venga superato, le lucciole più vecchie verranno rimosse
        ...currentFireflies.slice(-14),
        //la nuova lucciola viene inserita
        newFirefly,
      ]);
    };

    //ogni secondo aggiunge nuove lucciole
    const interval = setInterval(addFireflyPeriodically, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {fireflies.map((firefly) => {
        return (
          <div
            key={firefly.id}
            className="absolute rounded-full w-[10px] h-[10px] bg-firefly-radial"
            style={{
              top: firefly.top,
              left: firefly.left,
              animation: `move ${firefly.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FireFliesBackground;
