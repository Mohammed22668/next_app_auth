"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
//import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import router from "next/router";

const MobileNav = ({ sideBarLinks }: any) => {


  const NavContent = () => {
    const pathname = usePathname();
    return (
      <section className="flex h-full flex-col gap-6 pt-16">
        {sideBarLinks.map((item: any) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

        
          return (
            <SheetClose asChild key={item.route}>
              <Link
                href={item.route}
                className={`${
                  isActive
                    ? "primary-gradient rounded-lg text-light-900"
                    : "text-dark300_light900"
                } flex items-center justify-start gap-4 bg-transparent p-4  `}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`${isActive ? "" : "invert-colors"}`}
                />
                <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                  {item.label}
                </p>
              </Link>
            </SheetClose>
          );
        })}
      </section>
    );
  };
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors lg:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/logo.svg"
            width={23}
            height={23}
            alt="Iraq Pad"
          />
          <p className="h2-bold  text-dark100_light900 font-spaceGrotesk">
            Iraq <span className="text-[#e51b20]">Pad</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

        
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
