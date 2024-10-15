import { services } from "@/constants/services";
import Image from "next/image";

export default function ServicesImageSectionLeft() {
  // importing static data from constants
  const { imagesSectionOne } = services;
  return (
    <div className="flex flex-col gap-[30px]">
      {/* mapping over image data */}
      {imagesSectionOne.map((item, i) => {
        return (
          <div className="relative" key={`${item.alt}+${item.src}-${i}`}>
            <Image
              src={item.src}
              alt={item.alt}
              width={1920}
              height={1080}
              className="-z-10 h-full w-full max-w-[750px] object-contain"
            />
            <div className="absolute bottom-0 lg:mx-[30px] lg:my-[50px] p-[18px] text-white">
              <h3 className="text-[15px] md:max-lg:text-[20px] lg:text-[28px] font-medium">{item.title}</h3>
              <p className="hidden sm:block text-[10px] md:max-lg:text-[15px] lg:text-[18px] font-light">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
