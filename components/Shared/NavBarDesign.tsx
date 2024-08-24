"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { signOut } from "next-auth/react";
const NavBarDesign = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="bg-gray-800 text-white flex justify-between items-center p-4"
      dir="rtl"
    >
      <div className="text-2xl font-bold">نظام العيادة الطبية</div>{" "}
      {/* My App in Arabic */}
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <FaUserCircle size={28} />
        </button>
        {isMenuOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2">
            {" "}
            {/* Changed `right-0` to `left-0` */}
            <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
              الملف الشخصي {/* Profile in Arabic */}
            </Link>
            <button
              onClick={() => signOut()}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              تسجيل الخروج {/* Sign Out in Arabic */}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBarDesign;
