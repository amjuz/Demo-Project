import { features } from "@/constants/features";
import { Separator } from "../ui/separator";

export default function FeatureCard() {

  return (
    <div className="max-w-[497px] px-[32px] h-full border pt-[38px] bg-[#ECFAFF]">
        <h2 className="font-poppins font-semibold text-[36px]">{features.cards[0].key}</h2>
        <Separator orientation="horizontal" className="mt-[22px] mb-[35px]"/>
        <h3 className=" text-26px font-poppins font-semibold">{features.cards[0].title}</h3>
        <p>{features.cards[0].desc}</p>
    </div>
  )
}
