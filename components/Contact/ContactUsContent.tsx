import { contact } from "@/constants/contact";
import Bounded from "../Custom/Bounded";
import { Button } from "../ui/button";

export default function ContactUsContent() {
  // Importing static data from constants folder
  const { title, description } = contact;

  return (
    <Bounded className="flex flex-col md:flex-row max-h-[201px] items-center justify-between gap-10 " >
      <div className="w-full max-w-[771px] md:space-y-[40px] overflow-hidden">
        {/* heading */}
        <h2 className="text-[34px] md:text-[46px] font-medium overflow-hidden">{title}</h2>
        {/* description */}
        <p className="text-[17px] md:text-[20px] font-normal overflow-hidden">{description}</p>
      </div>
      <div className="hidden md:block">
        {/* Button */}
        <Button
          className="rounded-[10px]  bg-white lg:px-[77px] py-[30px] 
           text-[15px] md:text-[25px] font-medium text-black"
          variant={"secondary"}
        >
          View Vacancies
        </Button>
      </div>
    </Bounded>
  );
}
