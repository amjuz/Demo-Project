import { benefits } from "@/constants/benefits";
import Image from "next/image";

export default function BenefitsCard() {
  return (
    <article className="w-full max-w-[532px] rounded-[14px] bg-white p-[10px] font-poppins">
      <h1 className="text-[29px] font-medium px-[42px] mb-[22px] mt-[25px] overflow-clip">{benefits.cardImage.heading}</h1>
      <div className=" relative">
        <Image
          src={benefits.cardImage.src}
          alt={benefits.cardImage.alt}
          width={1920}
          height={1080}
          className="object-cover w-full max-w-[512px] h-[527px]"
        />
        <div className=" absolute bottom-0 p-[42px] space-y-[20px] overflow-clip">
            <h4 className="sm:text-[29px] font-medium overflow-clip">{benefits.cardImage.title}</h4>
            <p className="sm:text-[16px] font-normal max-h-[100px] overflow-clip">{benefits.cardImage.description}</p>
        </div>
      </div>
    </article>
  );
}
