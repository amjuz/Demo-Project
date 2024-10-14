import PlayButton from "./PlayButton";
import { aboutVideoSectionDetails } from "@/constants/about";

export default function AboutVideoOverlayText() {
  const { OverlayText } = aboutVideoSectionDetails;
  return (
    <div className="absolute bottom-[89px] left-[108px] flex h-[262px] flex-col justify-between text-white">
      <PlayButton className="" />
      <h2 className="font-poppins text-[38px] font-normal">{OverlayText.heading}</h2>
      <div className="">
        <h6 className="font-poppins text-[26px font-medium">{OverlayText.name}</h6>
        <p className="font-poppins text-[20px] font-normal">{OverlayText.role}</p>
      </div>
    </div>
  );
}
