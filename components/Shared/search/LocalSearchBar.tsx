"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface CustomInputProps {
  route: string;
  imgSrc: string;
  iconPosition: string;
  placeholder: string;
  otherclass: string;
}

const LocalSearchBar = ({
  route,
  imgSrc,
  iconPosition,
  placeholder,
  otherclass,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient 
    flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherclass}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        onChange={() => {}}
        className="no-focus paragraph-regular placeholder text-dark400_light700
        background-light800_darkgradient border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearchBar;
