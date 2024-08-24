import NavBarDesign from "@/components/Shared/NavBarDesign";
import SideBarDesign from "@/components/Shared/SideBarDesign";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen" dir="rtl">
      <SideBarDesign />
      <div className="flex-1 mr-64 bg-gray-100 dark:bg-gray-900 transition-all duration-300">
        <NavBarDesign />
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
