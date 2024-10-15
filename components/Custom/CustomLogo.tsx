import { cn } from "@/lib/utils";
import Image from "next/image";

type TCustomLogoProps = {
  className?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
};
export default function CustomLogo({
  alt,
  src,
  height,
  width,
  className,
}: TCustomLogoProps) {
  return (
    <Image
      alt={alt}
      src={src}
      width={width ?? 1920}
      height={height ?? 1080}
      className={cn("object-cover w-[25px]", className)}
    />
  );
}
