"use client";
import { useState } from "react";
import { RiArrowRightDownLine } from "react-icons/ri";
import Image from "next/image";
import {
  FaBars,
  FaCalendarAlt,
  FaClinicMedical,
  FaTimes,
  FaUserInjured,
} from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import Link from "next/link";
import { GiScalpel } from "react-icons/gi";

const SideBarDesign = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <div dir="rtl">
      <aside
        id="logo-sidebar"
        className={`fixed top-0 right-0 z-40 w-64 h-screen transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:translate-x-0 bg-gray-50 dark:bg-gray-800`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          {/* Toggle Button */}
          <button
            aria-controls="logo-sidebar"
            type="button"
            onClick={toggleSidebar}
            className="absolute top-2 left-2 p-2 text-sm text-red-500 rounded-lg sm:hidden hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Toggle sidebar</span>
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>

          <a href="#" className="flex items-center pe-2.5 mb-5">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 ms-3 sm:h-7"
              alt="Flowbite Logo"
              width={50}
              height={50}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              لوحة التحكم
            </span>
          </a>

          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group active:bg-gray-200 dark:active:bg-gray-600"
              >
                <MdDashboardCustomize className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="me-3 mr-2">الاحصائيات</span>
              </Link>
            </li>
            <li>
              <Link
                href="/clinic"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group active:bg-gray-200 dark:active:bg-gray-600"
              >
                <FaClinicMedical className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="me-3 mr-2">العيادات</span>
              </Link>
            </li>
            <li>
              <Link
                href="/bookings"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaCalendarAlt className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">الحجوزات</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/patients"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaUserInjured className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">المرضى</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </Link>
            </li>

            {/* dropmenu */}

            <li>
              <button
                type="button"
                onClick={toggleDropdown}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <GiScalpel className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 text-start whitespace-nowrap">
                  العمليات
                </span>
                <svg
                  className={`w-5 h-5 ${
                    isOpenDropdown ? "rotate-180" : ""
                  } transition-transform transform`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {isOpenDropdown && (
                <ul
                  id="dropdown-example"
                  className="space-y-2 py-2 ps-5 transition-all ease-in duration-300"
                >
                  <li>
                    <Link
                      href="/doctors/add"
                      className="flex items-center w-full p-2 text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        اضافة طبيب
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doctors/list"
                      className="flex items-center w-full p-2 text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        عرض الأطباء
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBarDesign;
