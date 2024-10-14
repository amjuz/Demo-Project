import Bounded from "./Bounded";
import { stats } from "./Stats/stats";

export default function Stats() {
  return (
    <Bounded className="flex justify-between py-[84px]">
      {stats.map((item, i) => {
        return (
          <div className="flex justify-between items-center  w-full border-r border-black" key={`${item.boldText}-${i}+${item.normalText}`}>
            <p className="font-poppins flex flex-col text-[34px] font-normal items-center w-full">
              <span className="font-poppins text-[54px] font-semibold">
                {item.boldText}
              </span>
              {item.normalText}
            </p>
            {/* <Separator orientation="vertical" className={cn("h-[121px] bg-black block last:hidden")} /> */}
          </div>
        );
      })}
    </Bounded>
  );
}
