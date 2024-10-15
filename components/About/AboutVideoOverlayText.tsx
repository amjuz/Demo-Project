import PlayButton from "./PlayButton";
import { aboutVideoSectionDetails } from "@/constants/about";

export default function AboutVideoOverlayText() {

  // Importing overlay Text from constants folder for better code readability
  const { OverlayText } = aboutVideoSectionDetails;
  return (
      <div className="md:mb-[88px] md:ml-[108px] flex max-h-[262px] h-full justify-around w-fit flex-col text-white">
        {/* A custom made component for playButton on top of video section */}
        <PlayButton className="" />
        <h2 className="font-poppins text-[38px] font-normal">
          {OverlayText.heading}
        </h2>
        <div className="">
          <h6 className="text-[26px] font-poppins font-medium">
            {OverlayText.name}
          </h6>
          <p className="font-poppins text-[20px] font-normal">
            {OverlayText.role}
          </p>
        </div>
      </div>
  );
}
