"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const LeftSidebar = () => {
  const pathname = usePathname();

  const router = useRouter();

  return (
    <section className="">
      <div className="flex flex-1 flex-col gap-4 ">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <Link
              dir="rtl"
              href={item.route}
              key={item.label}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              }  flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <Button
          onClick={() => signOut( )}
          className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
        >
          <Image
            src="/assets/icons/account.svg"
            alt="login"
            width={20}
            height={20}
            className="invert-colors lg:hidden"
          />
          <span className="primary-text-gradient max-lg:hidden">
            تسجيل الخروج{" "}
          </span>
        </Button>

   
    </section>
  );
};

export default LeftSidebar;
