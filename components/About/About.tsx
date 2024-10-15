import Image from "next/image";
import Bounded from "../Custom/Bounded";
import { aboutVideoSectionDetails } from "@/constants/about";
import AboutVideoOverlayText from "./AboutVideoOverlayText";

export default function About() {

  // Importing image source and alt text from constants folder
  const {
    Video: { alt, src },
  } = aboutVideoSectionDetails;

  return (
    // Bounded a custom made component which helps us to maintain uniform width throughout the web pages
    <Bounded className="relative my-[100px] ">
      <div className="h-[648px] flex md:justify-start justify-center items-center md:items-end ">
        <div className="">
          {/* Background Image for about section, make sure to use Image tag which nextjs gives out
           of the box for Image optimization */}
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover -z-10"
          />
        </div>
        {/* Overlay text for about section */}
       <AboutVideoOverlayText/> 
      </div>
    </Bounded>
  );
}

