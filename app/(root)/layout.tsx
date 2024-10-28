import LeftSidebar from "@/components/leftsidebar/LeftSideBar";
import Navbar from "@/components/Shared/navbar/Navbar";
import { ThemeProvider } from "@/context/ThemeProvider";

import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="background-light850_dark100 relative" dir="rtl">
    <Navbar />
    <div className="">
      <section className=" pr-[280px] pt-[100px] pb-5 max-lg:pr-[15px]  max-sm:pr-5 ">
        <div className="pl-5 w-full">
       {children}
          </div>
      </section>
      <div className="background-light900_dark200 light-border custom-scrollbar fixed right-0 top-0 flex h-screen flex-col justify-between overflow-y-auto  p-4 pt-36 shadow-light-300 dark:shadow-none max-lg:hidden lg:w-[266px]">
       
       
          <LeftSidebar />
     
      </div>
    </div>
 
  </main>
  );
}
