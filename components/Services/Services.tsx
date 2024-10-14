import { services } from "@/constants/services";
import Bounded from "../Bounded";
import Image from "next/image";

export default function Services() {
  const { heading, imagesSectionOne, imagesSectionTwo } = services;
  return (
    <div className="bg-[#F2F2F2] py-[140px]">
      <Bounded>
        <h1 className="font-poppins mb-[50px] w-full max-w-[891px] text-[54px] font-normal">
          {heading}
        </h1>
        <div className="flex flex-col md:flex-row gap-[30px]">
          <div className="flex flex-col gap-[30px]">
            {imagesSectionOne.map((item, i) => {
              return (
                <div
                  className=""
                  key={`${item.alt}+${item.src}-${i}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1920}
                    height={1080}
                    className="h-full w-full max-w-[750px] object-contain"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-[30px]">
            {imagesSectionTwo.map((item, i) => {
              return (
                <div
                  className=""
                  key={`${item.alt}+${item.src}-${i}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1920}
                    height={1080}
                    className="h-full w-full max-w-[750px] object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Bounded>
    </div>
  );
}
