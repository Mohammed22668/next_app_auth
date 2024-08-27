import React from "react";
import { FiChevronDown } from "react-icons/fi";
import {
  AiFillEdit,
  AiFillFileAdd,
  AiOutlineInfoCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { FcFullTrash } from "react-icons/fc";
import { FaClinicMedical, FaUserPlus } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface AllClinicsParams {
  name: string;
  address: string;
  phone: string;
  email: string;
  status: string;
  logoImage: string;
}
const TableAllClinics = ({ getAllClinics }: any) => {
  const parseGetAllClinic = JSON.parse(getAllClinics);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <div>
          <Link href="/clinic/create">
            <button
              id="addpatient"
              className="mx-3 inline-flex items-center text-white bg-blue-600 border border-blue-600 focus:outline-none hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:border-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
              type="button"
            >
              <span className="mx-2 ">إضافة عيادة</span>
              <FaClinicMedical className="w-4 h-4" />
            </button>
          </Link>
          {/* <button
            id="dropdownRadioButton"
            data-dropdown-toggle="dropdownRadio"
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <AiOutlineInfoCircle className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" />
            Last 30 days
            <FiChevronDown className="w-2.5 h-2.5 ms-2.5" />
          </button>

          <div
            id="dropdownRadio"
            className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="top"
          >
            <ul
              className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownRadioButton"
            >
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="filter-radio-example-1"
                    type="radio"
                    value=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                    Last day
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="filter-radio-example-2"
                    type="radio"
                    value=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                    Last 7 days
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="filter-radio-example-3"
                    type="radio"
                    value=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                    Last 30 days
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="filter-radio-example-4"
                    type="radio"
                    value=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                    Last month
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="filter-radio-example-5"
                    type="radio"
                    value=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                    Last year
                  </label>
                </div>
              </li>
            </ul>
          </div> */}
        </div>
        <label className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
            <AiOutlineSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-lg">
              اسم العيادة
            </th>
            <th scope="col" className="px-6 py-3 text-lg">
              الحالة
            </th>
            <th scope="col" className="px-6 py-3 text-lg">
              رقم الهاتف
            </th>
            <th scope="col" className="px-6 py-3 text-lg">
              العنوان
            </th>
            <th scope="col" className="px-6 py-3 text-lg">
              Logo
            </th>
            <th scope="col" className="px-6 py-3 text-lg">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {parseGetAllClinic.map((clinic: any) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={clinic._id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {clinic.name}
              </th>
              <td className="px-6 py-4">
                {clinic.status === "active" ? (
                  <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">
                    {clinic.status}
                  </span>
                ) : (
                  <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">
                    {clinic.status}
                  </span>
                )}
              </td>
              <td className="px-6 py-4">{clinic.phone}</td>
              <td className="px-6 py-4">{clinic.address}</td>
              <td className="px-6 py-4">
                <Image
                  src={clinic.logoImage}
                  alt="logo"
                  width={25}
                  height={25}
                />
              </td>
              <td className="flex gap-5 px-6 py-4 items-center">
                <button
                  className="inline-flex items-center text-blue-600 bg-white border border-blue-600 focus:outline-none hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-blue-500 dark:border-blue-600 dark:hover:bg-gray-700 dark:focus:ring-blue-500"
                  aria-label="Edit"
                >
                  <AiFillEdit className="w-5 h-5" />
                </button>

                <button
                  className="inline-flex items-center text-red-600 bg-white border border-red-600 focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-red-500 dark:border-red-600 dark:hover:bg-gray-700 dark:focus:ring-red-500"
                  aria-label="Delete"
                >
                  <FcFullTrash className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAllClinics;
