import Image from "next/image";
import { contact } from "@/constants/contact";
import ContactUsContent from "./ContactUsContent";

export default function ContactUs() {
  // importing static data from constants folder
  const { backgroundImageAlt, backgroundImageSrc } =
    contact;
  return (
    // Contact us section
    <div className="relative flex min-h-[450px] items-center justify-center text-white">
      <div className="absolute -z-10 h-full w-full">
        {/* Background Image */}
        <Image
          src={backgroundImageSrc}
          alt={backgroundImageAlt}
          width={1920}
          height={1080}
          className="relative h-[450px] w-full object-cover"
        />
      </div>
      {/* component contains Contact us text data and button */}
      <ContactUsContent />
    </div>
  );
}
