import { features } from "@/constants/features";
import Bounded from "../Custom/Bounded";
import FeatureCard from "./FeatureCard";

// features page
export default function Features() {
  return (
    <Bounded className="flex flex-col gap-[72px] md:py-[125px]">
      <header className="flex w-full max-w-[903px] flex-col gap-[36px]">
        <h2 className="overflow-clip font-poppins text-[54px] font-normal">
          {features.title}
        </h2>
        <p className="overflow-clip font-poppins text-[20px]">
          {features.description}
        </p>
      </header>
    {/*  A custom component which helps to map over data and create card components*/}
      <FeatureCard />
    </Bounded>
  );
}
