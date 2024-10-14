import { cn } from "@/lib/utils";
import Image from "next/image";

type PlayButton = {
  className?: string;
};

export default function PlayButton({ className }: PlayButton) {
  return (
    <div className={cn("flex items-center justify-center rounded-full w-[80px] h-[80px] bg-white", className)}>
      <Image src={"/assets/Play.svg"} alt="" width={1920} height={1080} className="w-[30px] h-[37px]"/>
    </div>
  );
}
