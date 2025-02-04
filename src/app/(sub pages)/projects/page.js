import Staff from "@/components/models/Staff";
import ProjectList from "@/components/projects";
import RenderModel from "@/components/RenderModel";
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import { projectsData } from "../../data";

export default function Home() {
   return (
      <>
         <Image src={bg} alt="background-image" className="-z-50 fixed h-full top-0 left-0 w-full object-cover object-center opacity-25" />
         <ProjectList projects={projectsData} />

         <div className="flex items-center justify-center fixed top-20 -left-24 h-screen">
            <RenderModel>
               <Staff />
            </RenderModel>
         </div>
      </>
   );
}
