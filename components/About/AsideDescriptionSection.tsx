import { aboutDescription } from "@/constants/about";
import { Separator } from "../ui/separator";

export default function AsideDescriptionSection() {
  const { subContent } = aboutDescription;
  return (
    <aside className="flex justify-between h-[164px] w-full max-w-[590px] gap-[44px]">
      <Separator orientation="vertical" className="border-black border-[2px]"/>
      <div className="max-w-[544px] w-full">
        <h4 className="font-poppins text-[26px] font-medium">
          {subContent.heading}
        </h4>
        <p className="font-poppins text-[18px] font-normal">
          {subContent.description}
        </p>
      </div>
    </aside>
  );
}
