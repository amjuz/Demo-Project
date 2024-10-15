import { benefits } from "@/constants/benefits";
import Image from "next/image";
import BenefitsCard from "./BenefitsCard";
import BenefitsText from "./BenefitsText";
import Bounded from "../Custom/Bounded";

export default function Benefits() {
  return (
    <div className="relative h-[833px]">
      <Image
        src={benefits.bgImage.src}
        alt={benefits.bgImage.alt}
        width={1920}
        height={1080}
        className="absolute top-0 -z-10 h-full w-full object-cover"
      />
      <Bounded className="h-full lg:py-[100px]">
        <div className="flex h-full flex-col justify-center gap-5 lg:h-[633px] lg:flex-row lg:justify-between">
          <BenefitsText />
          <BenefitsCard />
        </div>
      </Bounded>
    </div>
  );
}
