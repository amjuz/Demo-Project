import { aboutDescription } from "@/constants/about";
import React from "react";

export default function MainDescriptionSection() {
  // importing static data from constants folder
  const { mainContent } = aboutDescription;

  return (
    <article className="h-[534px]  w-full max-w-[823px] gap-[48px] pr-[20px]">
      <h2 className="text-[54px] font-normal overflow-hidden">
        {mainContent.heading}
      </h2>
      <p className="text-[20px] font-normal overflow-hidden">
        {mainContent.description}
      </p>
    </article>
  );
}
