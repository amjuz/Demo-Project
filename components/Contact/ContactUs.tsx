import Image from "next/image";
import { contact } from "@/constants/contact";
import ContactUsText from "./ContactUsText";

export default function ContactUs() {
  const { backgroundImageAlt, backgroundImageSrc } =
    contact;
  return (
    <div className="relative flex min-h-[450px] items-center justify-center text-white">
      <div className="absolute -z-10 h-full w-full">
        <Image
          src={backgroundImageSrc}
          alt={backgroundImageAlt}
          width={1920}
          height={1080}
          className="relative h-[450px] w-full object-cover"
        />
      </div>
      <ContactUsText />
    </div>
  );
}
