import { insights } from "@/constants/insights";
import Bounded from "../Bounded";
import InsightCard from "./InsightCard";
import CarouselButtons from "./CarouselButtons";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

export default function Insights() {
  const { insightCardInfo } = insights;
  return (
    <Bounded className="font-poppins my-[100px] space-y-[67px]">
      <div className="flex items-center justify-between">
        <h2 className="font-light text-[54px]">Latest Insights</h2>
        <CarouselButtons />
      </div>
      <div className="flex max-lg:flex-col max-lg:space-y-[40px] max-lg:items-center justify-between">
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
      {/* <Carousel className="w-full max-w-xs border">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="bg-blue h-20 w-20 p-1">hey</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>{" "} */}
    </Bounded>
  );
}
