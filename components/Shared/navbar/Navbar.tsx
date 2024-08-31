
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

import {
  editorSidebarLinks,
  sidebarLinks,
  staffSidebarLinks,
} from "@/constants";
import { adminSidebarLinks } from "@/constants";
const Navbar = async () => {

  

 

  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 py-3 px-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        {/* <Image
          src="/assets/images/logo.svg"
          width={23}
          height={23}
          alt="Iraq Pad"
        /> */}
        <p
          className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900
        max-sm:hidden"
        >
          نظام <span className="text-[#e51b20]">العيادة الطبية</span>
        </p>
      </Link>
      {/* <GlobalSearch /> */}
      <div className="flex-between gap-5">
        <Theme />
     

      
          <MobileNav sideBarLinks={sidebarLinks} />
     
      </div>
    </nav>
  );
};

export default Navbar;
