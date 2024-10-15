import { features } from "@/constants/features";
import { Separator } from "../ui/separator";


// Created a single card component and mapped over the card information from the constants folder to reduce code duplication

export default function FeatureCard() {
  return (
    <article className="flex gap-[19px]">
      {features.cards.map((item, i) => {
        return (
          <div
            key={`${item.key}-${i}+${item.title}`}
            className="h-full w-full max-w-[497px] bg-[#ECFAFF] p-[37px] hover:bg-[#002A3A] hover:text-white rounded-[15px]"
          >
            <h2 className="font-poppins text-[36px] font-semibold">
              {item.key}
            </h2>
            <Separator
              orientation="horizontal"
              className="mb-[35px] mt-[22px] hover:bg-black"
            />
            <div className="flex flex-col gap-[20px]">
              <h3 className="font-poppins text-[28px] font-semibold">
                {item.title}
              </h3>
              <p className="font-poppins text-[18px] font-normal">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </article>
  );
}
