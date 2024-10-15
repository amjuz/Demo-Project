import Bounded from "./Custom/Bounded";
import ContactUsButton from "./Contact/ContactUsButton";
import ResponsiveMenu from "./ResponsiveMenu";
import CustomLogo from "./Custom/CustomLogo";

export default function Navbar() {
  return (
    <nav className="fixed z-20 flex h-[106px] w-full items-center justify-center text-white">
      {/* Custom component which helps to maintain uniform spacing */}
      <Bounded className="flex h-[60px] items-center justify-between">
        <CustomLogo
          src={"/assets/DemoLogo.svg"}
          alt="Demo logo"
          className="h-[42px] w-[134px]"
        />
        {/* Navigation links */}
        <div className="hidden lg:block">
          <ul className="flex cursor-pointer xl:gap-10 gap-5 font-poppins font-medium">
            <li>About Us</li>
            <li>How We Help</li>
            <li>Pricing</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
            <li>Insights</li>
          </ul>
        </div>
        {/* component contains button for contact */}
        <ContactUsButton />
        {/* component contains responsive menu for small screen sizes */}
        <ResponsiveMenu />
      </Bounded>
    </nav>
  );
}
