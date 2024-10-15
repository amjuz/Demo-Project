import { Separator } from "@radix-ui/react-separator";
import FooterHeader from "./FooterHeader";
import FooterBody from "./FooterBody";
import FooterCopyRight from "./FooterCopyRight";

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center justify-center text-white">
      <div className="absolute -z-10 h-full w-full bg-[#002A3A]"></div>
      {/* Footer header , contains navigation links as well  */}
      <FooterHeader />
      {/* Separating line */}
      <Separator
        className="h-[2px] w-full bg-[#004974]"
        orientation="horizontal"
      />
      {/* Footer main body contents, contains 3 columns with data inside */}
      <FooterBody />
      {/* Separating line */}
      <Separator
        className="h-[2px] w-full bg-[#004974]"
        orientation="horizontal"
      />
      {/* footer copy right text */}
      <FooterCopyRight />
    </div>
  );
}
