import { footerList } from "@/constants/footer";

export default function FooterBodySectionMiddle() {
  const { listTwo } = footerList;
  return (
    <div className="flex basis-[35%] flex-col gap-[19px] px-[55px]">
      {listTwo.map((item, i) => {
        return (
          <div
            key={`${item}-${i}`}
            className="flex h-[73px] items-center bg-[#093041] p-[10px]"
          >
            <p className="px-[10px] text-[20px] font-medium">{item}</p>
          </div>
        );
      })}
    </div>
  );
}
