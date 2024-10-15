import Link from "next/link";
import Bounded from "../Custom/Bounded";

export default function FooterHeader() {
  return (
    <Bounded className="flex flex-col">
      <div className="flex items-center justify-between py-[60px]">
        <h3 className="pl-[20px] pr-20 text-[24px] font-medium lg:pl-0">
          Quick Links
        </h3>
        {/* navigation links */}
        <div className="hidden lg:block">
          <ul className="flex gap-[50px] text-[17px] font-medium">
            {/* Link tag an alternative for anchor tag in HTML which nextjs gives out of the box for optimising the app */}
            <Link href={"#"}>
              <li>Home</li>
            </Link>
            <Link href={"#"}>
              <li>About Us</li>
            </Link>
            <Link href={"#"}>
              <li>Pricing</li>
            </Link>
            <Link href={"#"}>
              <li>Portfolios</li>
            </Link>
            <Link href={"#"}>
              <li>Insights</li>
            </Link>
          </ul>
        </div>
      </div>
    </Bounded>
  );
}
