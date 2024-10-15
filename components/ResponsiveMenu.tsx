import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheets";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import CustomLogo from "./Custom/CustomLogo";

export default function ResponsiveMenu() {
  return (
    // A shadcn sidebar component which helps us to open a side bar for responsive navigation bar 
    <Sheet>
      {/* sheetTrigger responsible for sheet opening */}
      <SheetTrigger className="block lg:hidden">
        {/* menu icon from lucide react */}
        <MenuIcon size={40} />
      </SheetTrigger>
      <SheetContent className="bg-black">
        {/* sidebar contents goes here */}
        <div className="font-poppins text-white">
          <div className="py-5">
            <CustomLogo
              src={"/assets/DemoLogo.svg"}
              alt="Demo logo"
              className="h-[42px] w-[134px]"
            />
          </div>
          {/* navigation links */}
          <ul className="my-5 space-y-[10px] text-[30px] font-medium">
            <li>
              <Link href="#" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                How We Help
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Insights
              </Link>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
