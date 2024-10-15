import Bounded from "./Bounded";
import { stats } from "./Stats/stats";

export default function Stats() {
  return (
    <Bounded className="flex justify-between py-[84px]">
      {stats.map((item, i) => {
        return (
          <div
            className="flex w-full items-center justify-between border-r border-black"
            key={`${item.boldText}-${i}+${item.normalText}`}
          >
            <p className="flex w-full flex-col items-center font-poppins text-[34px] font-normal">
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
