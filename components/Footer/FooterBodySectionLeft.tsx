import { footerList } from "@/constants/footer";
import CustomLogo from "../Custom/CustomLogo";

export default function FooterBodySectionLeft() {
  // static text import for footer section
  const { listOne } = footerList;

  return (
    <div className="flex basis-[35%] flex-col gap-[19px] px-[55px]">
      {/* mapping over multiple list items */}
      {listOne.map((item, i) => {
        return (
          <div
            key={`${item.title}+${item.icon}-${i}`}
            className="flex h-[73px] items-center bg-[#093041] p-[10px]"
          >
            {/* Custom logo component to import svgs */}
            <CustomLogo src={item.icon} alt={item.alt} className="" />
            <p className="px-[10px] text-[20px] font-medium">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}
