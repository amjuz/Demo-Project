import Bounded from "../Custom/Bounded";
import ServicesHeader from "./ServicesHeader";
import ServicesImageSectionLeft from "./ServicesImageSectionLeft";
import ServicesImageSectionRight from "./ServicesImageSectionRight";

export default function Services() {
  return (
    <div className="bg-[#F2F2F2] py-[140px] font-poppins">
      <Bounded>
        <ServicesHeader />
        <div className="flex flex-col items-center gap-[30px] xl:flex-row xl:items-start">
          {/* Divided the image gallery section to two components */}
          <ServicesImageSectionLeft />
          <ServicesImageSectionRight />
        </div>
      </Bounded>
    </div>
  );
}
