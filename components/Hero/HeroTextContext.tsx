import { hero } from "@/constants/hero";
import Bounded from "../Custom/Bounded";

export default function HeroTextContext() {

  // Importing text data from constants folder for hero section 
  const { description, title } = hero;

  return (
    <Bounded className="text-white">
      <div className="flex h-[232px] max-w-[1172px] flex-col gap-[10px] xl:mb-[140px] xl:gap-[38px]">
        <h2 className="font-poppins text-[30px] font-medium lg:text-[54px]">
          {title}
        </h2>
        <p className="w-full max-w-[1028px] overflow-hidden font-poppins text-[13px] font-normal md:text-[18px]">
          {description}
        </p>
      </div>
    </Bounded>
  );
}
