import ProjectList from "@/components/projects";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import { projectsData } from "../../data";

/* dynamic: Permette di caricare il componente in modo dinamico, ovvero solo quando è necessario. Questo ottimizza i tempi di caricamento della pagina iniziale,
perché il componente non viene incluso nel bundle JavaScript principale

ssr: false: Non eseguire il rendering lato server (SSR) per il componente. Questo è utile quando il componente dipende da API o funzionalità disponibili solo nel browser, oppure quando il rendering lato server potrebbe essere troppo costoso in termini di prestazioni */

const Staff = dynamic(() => import("@/components/models/Staff"), { ssr: false })

export const metadata = {
   title: "Salvatore Bono | Projects",
};


export default function Home() {
   return (
      <>
         <Image priority sizes="100vw" src={bg} alt="background-image" className="-z-50 fixed h-full top-0 left-0 w-full object-cover object-center opacity-50" />
         <ProjectList projects={projectsData} />

         <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
            <RenderModel>
               <Staff />
            </RenderModel>
         </div>
      </>
   );
}
