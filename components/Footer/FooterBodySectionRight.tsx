import { footerContactInfo, FooterLogo } from "@/constants/footer";
import Link from "next/link";
import CustomLogo from "../Custom/CustomLogo";

export default function FooterBodySectionRight() {
  // static data import
  const { email, phone, text } = footerContactInfo;

  return (
    <div className="flex basis-[35%] flex-col gap-[30px] px-[55px]">
      {/* contact us test heading */}
      <h3 className="text-center text-[20px] md:text-[50px] font-medium lg:text-left lg:text-[26px]">
        Contact Us
      </h3>
      {/* Contact us description */}
      <p className="text-center text-[16px] font-normal lg:w-[213px] lg:text-left">
        {text}
      </p>
      <div className="text-center lg:text-left">
        {/* Redirecting phone numberr links */}
        <Link href={`tel:919562103255`} className="text-[16px] font-semibold">
          {phone}
        </Link>
        {/* email information */}
        <p className="sm:text-[16px] font-semibold overflow-clip">{email}</p>
      </div>
      {/* other social links */}
      <div className="flex flex-col items-center leading-8 lg:items-start">
        <p className="w-fit text-[16px] font-semibold">Follow us on</p>
        <div className="flex flex-wrap w-fit gap-[14px]">
          {/* mapping over different logo */}
          {FooterLogo.map((item, i) => {
            return (
              <div
                key={`${item}*${i}`}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[8px] bg-[#093041] p-2"
              >
                <CustomLogo
                  src={item.src}
                  alt={item.alt}
                  className="w-[20px]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
