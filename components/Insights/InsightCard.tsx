import { insights } from "@/constants/insights";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

type InsightCardProps = {
    imageSrc: string
    imageAlt: string
    imageClassName?: string
    className?: string 
    date: Date
    title: string
};
export default function InsightCard({className, date, imageAlt, imageClassName, imageSrc}: InsightCardProps) {
  const { insightCardInfo } = insights;
  const DateIsoString = date.toISOString()
  const formattedDate = format(DateIsoString, 'dd MMM yyyy')
  return (
    <div className={cn("rounded-[17px] max-w-[463px] w-full h-[584px] relative font-poppins", className)}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1920}
        height={1080}
        className={cn("object-cover max-w-[463px] max-h-[584px] w-full", imageClassName)}
      />
      <div className="absolute bottom-0 flex flex-col text-white m-[47px]">
        <p className="text-[16px] font-normal my-[13px]">{formattedDate}</p>
        <h3 className="text-[28px] font-medium mb-[50px]">{insightCardInfo[0].title}</h3>
        <Link href={'#'} className="">Read More</Link>
      </div>
    </div>
  );
}
