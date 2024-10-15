import Link from "next/link";
import { Button } from "../ui/button";

export default function ContactUsButton() {
  return (
    <Link href={"#"}>
      <Button
        className="hidden h-[60px] w-[200px] rounded-[10px] bg-white px-[55px] py-[18px] font-poppins text-[16px] font-semibold text-black lg:block"
        variant={"secondary"}
      >
        Contact Us
      </Button>
    </Link>
  );
}
