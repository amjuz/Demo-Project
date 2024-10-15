import { cn } from "@/lib/utils";
import Bounded from "../Custom/Bounded";
import { stats } from "../../constants/stats";
import { Separator } from "../ui/separator";

export default function Stats() {
  return (
    <Bounded className="my-[30px] flex justify-between gap-[30px] max-md:flex-wrap md:gap-0 md:py-[84px]">
      {stats.map((item, i) => {
        return (
          <>
            <div
              className="flex w-full items-center justify-between"
              key={`${item.boldText}-${i}+${item.normalText}`}
            >
              <p className="flex w-full flex-col items-center overflow-clip font-poppins text-[25px] font-normal sm:text-[25px] md:text-[20px] lg:text-[29px] xl:text-[34px]">
                <span className="font-poppins font-semibold md:text-[30px] lg:text-[34px] xl:text-[54px]">
                  {item.boldText}
                </span>
                {item.normalText}
              </p>
            </div>
            <Separator
              orientation="vertical"
              className={cn("hidden h-[121px] bg-black last:hidden lg:block")}
            />
          </>
        );
      })}
    </Bounded>
  );
}
