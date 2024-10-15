import { insights } from "@/constants/insights";
import Bounded from "../Custom/Bounded";
import InsightCard from "./InsightCard";
import CarouselButtons from "./CarouselButtons";

export default function Insights() {
  const { insightCardInfo } = insights;
  return (
    <Bounded className="my-[70px] font-poppins md:my-[100px] md:space-y-[30px]">
      <div className="flex items-center justify-between">
        {/* Heading for Insights section */}
        <h2 className="overflow-clip text-center text-[54px] font-light lg:text-start">
          Latest Insights
        </h2>
        {/* Buttons for carousel like components */}
        <CarouselButtons />
      </div>
      <div className="flex flex-col items-center justify-between md:gap-[20px] lg:flex-row lg:items-start">
        {/* mapping over multiple images and text data to create card components */}
        {/* Update yet to be brought to create a carousel, ignoring this update due to time constraint */}
        {insightCardInfo.map((item, i) => {
          return (
            <div className="" key={`${item.imageAlt}+${item.title}-${i}`}>
              <InsightCard
                imageAlt={item.imageAlt}
                imageSrc={item.imageSrc}
                title={item.title}
                date={item.date}
              />
            </div>
          );
        })}
      </div>
    </Bounded>
  );
}
