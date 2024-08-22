import LeftSidebar from "@/components/leftsidebar/LeftSideBar";
import Navbar from "@/components/Shared/NavBar";

import SideBar from "@/components/Shared/SideBar";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="">
        <section className=" pr-[280px] pt-[100px] pb-5 max-lg:pr-[15px]  max-sm:pr-5 ">
          <div className="pl-5 w-full">{children}</div>
        </section>
      </div>
    </main>
  );
}
