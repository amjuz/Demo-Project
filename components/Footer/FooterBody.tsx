import Bounded from "../Custom/Bounded";
import FooterBodySectionLeft from "./FooterBodySectionLeft";
import FooterBodySectionRight from "./FooterBodySectionRight";
import FooterBodySectionMiddle from "./FooterBodySectionMiddle";

export default function FooterBody() {
  return (
    <Bounded className="py-[100px] flex max-lg:flex-col max-lg:gap-[40px] ">
      {/* footer body id divided into 3 sections */}
      <FooterBodySectionLeft />
      <FooterBodySectionMiddle />
      <FooterBodySectionRight />
    </Bounded>
  );
}
