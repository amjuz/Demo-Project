import { benefits } from "@/constants/benefits";
import Image from "next/image";
import BenefitsCard from "./BenefitsCard";
import BenefitsText from "./BenefitsText";
import Bounded from "../Bounded";

export default function Benefits() {
  return (
    <div className="relative h-[833px] border-black">
      <Image
        src={benefits.bgImage.src}
        alt={benefits.bgImage.alt}
        width={1920}
        height={1080}
        className="absolute top-0 -z-10 h-full object-cover"
      />
      <Bounded className="h-full py-[100px]">
        <div className="flex justify-between h-[633px]">
          <BenefitsText />
          <BenefitsCard />
        </div>
      </Bounded>
    </div>
  );
}
