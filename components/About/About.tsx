import Image from "next/image";
import Bounded from "../Bounded";
import { aboutVideoSectionDetails } from "@/constants/about";
import PlayButton from "./PlayButton";
import AboutVideoOverlayText from "./AboutVideoOverlayText";
import AboutSectionDescriptiveDetails from "./AboutSectionDescriptiveDetails";

export default function About() {
  const { Video } = aboutVideoSectionDetails;
  return (
    <Bounded className="py-[100px]">
      <div className="relative my-[50px]">
        <Image
          src={Video.src}
          alt={Video.alt}
          width={1920}
          height={1080}
          className="w-[1527px]"
        />
        <AboutVideoOverlayText/>
      </div>
        <AboutSectionDescriptiveDetails/>
    </Bounded>
  );
}
