import { cn } from "@/lib/utils";
import MainDescriptionSection from "./MainDescriptionSection";
import AsideDescriptionSection from "./AsideDescriptionSection";
import { Separator } from "../ui/separator";

export default function AboutSectionDescriptiveDetails() {
  return (
    <div className={cn(" flex justify-between py-[50px]")}>
      <MainDescriptionSection />
      <div className="flex flex-col justify-around">
        <AsideDescriptionSection />
        <Separator orientation="horizontal" className="max-w-[515px]"/>
        <AsideDescriptionSection />
      </div>
    </div>
  );
}
