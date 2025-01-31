/* "use client" è essenziale perché assicura che il componente RenderModel, venga renderizzato correttamente nel client (browser) e non nel server.*/
"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { Suspense } from "react";

//RenderModel è un componente wrapper per la renderizzazione di modelli 3D
const RenderModel = ({ children, className }) => {
  return (
    //Canvas crea un ambiente 3D per la visualizzazione del modello.
    <Canvas className={clsx("w-screen h-screen relative -z-10", className)}>
      {/* Suspense si assicura che l'utente abbia qualcosa da vedere durante il caricamento del modello, in questo caso nulla perché fallback è null */}
      <Suspense fallback={null}>{children}</Suspense>
      {/* Environment serve a definire l'illuminazione di un modello 3D */}
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;
