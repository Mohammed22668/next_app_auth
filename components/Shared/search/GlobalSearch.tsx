import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[250px] max-lg:hidden">
      <div
        className="background-light800_darkgradient  relative flex min-h-[56px] grow
    items-center gap-1 rounded-xl px-4"
      >
        <Input
          dir="rtl"
          type="text"
          placeholder="ابحث عن قصة"
          className="paragraph-regular no-focus placeholder 
        background-light800_darkgradient border-none shadow-none outline-none"
        />
        <Image
          src="/assets/icons/search.svg"
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;