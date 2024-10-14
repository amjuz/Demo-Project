import { features } from "@/constants/features";
import Bounded from "../Bounded";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <Bounded className="py-[125px] flex flex-col gap-[72px]">
      <header className="max-w-[903px] w-full flex flex-col gap-[36px]">
        <h2 className="font-poppins text-[54px] font-normal">
          {features.title}
        </h2>
        <p className="font-poppins text-[20px]">{features.description}</p>
      </header>
      <FeatureCard />
    </Bounded>
  );
}
