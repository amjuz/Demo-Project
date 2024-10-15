import { services } from "@/constants/services";

export default function ServicesHeader() {
  // importing constants data 
    const { heading } = services
  return (
    <h1 className="mb-[50px] w-full max-w-[891px] text-[34px] md:text-[54px] font-normal overflow-clip">
      {heading}
    </h1>
    );
}
