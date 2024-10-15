import { cn } from "@/lib/utils";
import Image from "next/image";

type TPlayButtonProps = {
  className?: string;
};

export default function PlayButton({ className }: TPlayButtonProps) {
  return (
    <div
      className={cn(
        "flex h-[80px] w-[80px] items-center justify-center rounded-full bg-white",
        className,
      )}
    >
      <Image
        src={"/assets/Play.svg"}
        alt=""
        width={1920}
        height={1080}
        className="h-[37px] w-[30px]"
      />
    </div>
  );
}
