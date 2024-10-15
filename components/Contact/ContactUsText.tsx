import { contact } from "@/constants/contact";
import Bounded from "../Bounded";
import { Button } from "../ui/button";

export default function ContactUsText() {
  const { title, description } = contact;

  return (
    <Bounded className="flex h-[201px] items-center justify-between ">
      <div className="w-full max-w-[771px] md:space-y-[40px]">
        <h2 className="text-[46px] font-medium">{title}</h2>
        <p className="text-[20px] font-normal">{description}</p>
      </div>
      <div className="">
        <Button
          className="rounded-[10px]  bg-white px-[77px] py-[30px] 
           text-[25px] font-medium text-black"
          variant={"secondary"}
        >
          View Vacancies
        </Button>
      </div>
    </Bounded>
  );
}
