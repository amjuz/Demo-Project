import { aboutDescription } from "@/constants/about";
import React from "react";

export default function MainDescriptionSection() {
  const { mainContent } = aboutDescription;

  return (
    <article className="h-534px w-full max-w-[823px] gap-[48px] ">
      <h2 className="font-poppins text-[54px] font-normal">
        {mainContent.heading}
      </h2>
      <p className="font-poppins text-[20px] font-normal">
        {mainContent.description}
      </p>
    </article>
  );
}
