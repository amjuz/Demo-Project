import { cn } from "@/lib/utils";
import MainDescriptionSection from "./MainDescriptionSection";
import AsideDescriptionSection from "./AsideDescriptionSection";
import { Separator } from "../ui/separator";
import Bounded from "../Custom/Bounded";

export default function Blogs() {
  return (
// Bounded a custom made component which helps us to maintain uniform width throughout the web pages

    <Bounded className={cn(" flex justify-between my-[100px] overflow-clip")}>
      {/* Text data for blogs section */}
      <MainDescriptionSection />
      <div className="hidden lg:flex flex-col justify-around ">
        <AsideDescriptionSection />
        {/* A shadcn Component to create a separator line between components */}
        <Separator orientation="horizontal" className="max-w-[515px]"/>
        <AsideDescriptionSection />
      </div>
    </Bounded>
  );
}
