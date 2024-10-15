import Image from "next/image";
import { Button } from "../ui/button";

export default function CarouselButtons() {
  return (
    <div className="hidden lg:flex gap-[22px]">
      <Button className="flex h-[49px] w-[49px] items-center justify-center rounded-full bg-[#EDEDED] hover:bg-gray-200">
        <Image
          src={"/assets/Play.svg"}
          alt=""
          width={1920}
          height={1080}
          className="h-[14px] w-[10px] rotate-180"
        />
      </Button>
      <Button className="flex h-[49px] w-[49px] items-center justify-center rounded-full bg-[#EDEDED] hover:bg-gray-200">
        <Image
          src={"/assets/Play.svg"}
          alt=""
          width={1920}
          height={1080}
          className="h-[14px] w-[10px] "
        />
      </Button>
    </div>
  );
}
