import { benefits } from "@/constants/benefits";
import React from "react";

export default function BenefitsText() {
  return (
    <article className="hidden lg:block my-[20px] w-full max-w-[797px] font-poppins">
      <div className="max-w-[741px] w-full space-y-[48px]">
        <h2 className="text-[30px] lg:text-[54px] font-medium">{benefits.textContent.title}</h2>
        <p className="font-normal text-[20px]">{benefits.textContent.description}</p>
      </div>
    </article>
  );
}
