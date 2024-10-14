import Image from "next/image";
import { Button } from "./ui/button";
import Bounded from "./Bounded";

export default function Navbar() {
  return (
    <nav className="fixed z-20 flex h-[106px] w-full items-center justify-center text-white">
      <Bounded className="flex h-[60px] items-center justify-between">
        <Image
          src={"/assets/DemoLogo.svg"}
          alt=""
          height={1080}
          width={1920}
          className="h-[42px] w-[134px]"
        />
        <ul className="font-poppins flex cursor-pointer gap-10 font-medium">
          <li>About Us</li>
          <li>How We Help</li>
          <li>Pricing</li>
          <li>Portfolio</li>
          <li>Testimonials</li>
          <li>Insights</li>
        </ul>
        <Button
          className="font-poppins h-[60px] w-[200px] rounded-[10px] bg-white px-[55px] py-[18px] text-[16px] font-semibold text-black"
          variant={"secondary"}
        >
          Contact Us
        </Button>
      </Bounded>
    </nav>
  );
}
