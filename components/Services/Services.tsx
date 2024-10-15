import { services } from "@/constants/services";
import Bounded from "../Bounded";
import Image from "next/image";

export default function Services() {
  const { heading, imagesSectionOne, imagesSectionTwo } = services;
  return (
    <div className="bg-[#F2F2F2] py-[140px] font-poppins">
      <Bounded>
        <h1 className="mb-[50px] w-full max-w-[891px]  text-[54px] font-normal">
          {heading}
        </h1>
        <div className="flex flex-col gap-[30px] md:flex-row">
          <div className="flex flex-col gap-[30px]">
            {imagesSectionOne.map((item, i) => {
              return (
                <div
                  className="relative border-4"
                  key={`${item.alt}+${item.src}-${i}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1920}
                    height={1080}
                    className="-z-10 h-full w-full max-w-[750px] object-contain"
                  />
                  <div className="absolute bottom-0 text-white my-[50px] mx-[30px]">
                    <h3 className="font-medium text-[28px]">{item.title}</h3>
                    <p className="font-light text-[18px]">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-[30px]">
            {imagesSectionTwo.map((item, i) => {
              return (
                <div className="relative" key={`${item.alt}+${item.src}-${i}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1920}
                    height={1080}
                    className="h-full w-full max-w-[750px] object-contain"
                  />
                  <div className="absolute bottom-0 text-white my-[50px] mx-[30px]">
                    <h3 className="font-medium text-[28px]">{item.title}</h3>
                    <p className="font-light text-[18px]">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Bounded>
    </div>
  );
}
