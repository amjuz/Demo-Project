import { services } from "@/constants/services";
import Image from "next/image";

export default function ServicesImageSectionRight() {
  // Importing static data from constants 
  const { imagesSectionTwo } = services;
  return (
    <div className="flex flex-col gap-[30px]">
      {/* mapping over image data */}
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
            <div className="absolute bottom-0 p-[18px] text-white lg:mx-[30px] lg:my-[50px]">
              <h3 className="text-[15px] font-medium md:max-lg:text-[20px] lg:text-[28px]">
                {item.title}
              </h3>
              <p className="overflow-hidden text-[10px] font-light md:max-lg:text-[15px] lg:text-[18px]">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
