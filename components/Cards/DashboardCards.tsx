import React from "react";
import { FiCalendar, FiUsers } from "react-icons/fi";

import { FaClinicMedical, FaUserInjured } from "react-icons/fa";
import { GiScalpel } from "react-icons/gi";
const DashboardCards = ({ userCount, clinicCount , appointmentCount , patientCount , surgeryCount  }: any) => {
  return (
<div className="flex min-h-screen">
  <div className="p-4 w-full">
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white dark:bg-gray-800 shadow-md rounded p-4 gap-4">
          <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-500 dark:bg-blue-900 text-blue-500 dark:text-blue-300">
            <FaClinicMedical className="h-12 w-12 text-white m-2" />
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-lg text-gray-500 dark:text-gray-300">العيادات</div>
            <div className="font-bold text-lg text-gray-800 dark:text-white">{clinicCount}</div>
          </div>
        </div>
      </div>

      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white dark:bg-gray-800 shadow-md rounded p-4 gap-4">
          <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-500 dark:bg-green-900 text-green-500 dark:text-green-300">
          <FiUsers className="h-12 w-12 text-white  m-2" />
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-lg text-gray-500 dark:text-gray-300">المستخدمين</div>
            <div className="font-bold text-lg text-gray-800 dark:text-white">{userCount}</div>
          </div>
        </div>
      </div>

      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white dark:bg-gray-800 shadow-md rounded p-4 gap-4">
          <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-500 dark:bg-orange-900 text-orange-500 dark:text-orange-300">
          <FiCalendar className="h-12 w-12 text-white  m-2" />
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-lg text-gray-500 dark:text-gray-300">الحجوزات</div>
            <div className="font-bold text-lg text-gray-800 dark:text-white">{appointmentCount || 0}</div>
          </div>
        </div>
      </div>

      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white dark:bg-gray-800 shadow-md rounded p-4 gap-4">
          <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-500 dark:bg-red-900 text-red-500 dark:text-red-300">
          <FaUserInjured className="h-12 w-12 text-white  m-2" />
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-lg text-gray-500 dark:text-gray-300">المراجعين</div>
            <div className="font-bold text-lg text-gray-800 dark:text-white">{patientCount || 0}</div>
          </div>
        </div>
      </div>

      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white dark:bg-gray-800 shadow-md rounded p-4 gap-4">
          <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-500 dark:bg-blue-900 text-blue-500 dark:text-blue-300">
          <GiScalpel className="h-12 w-12 text-white" />
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-lg text-gray-500 dark:text-gray-300">العمليات</div>
            <div className="font-bold text-lg text-gray-800 dark:text-white">{surgeryCount || 0}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    // <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
    //   <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
    //     <div className="p-4 bg-red-400">
    //       <FaClinicMedical className="h-12 w-12 text-white" />
    //     </div>
    //     <div className="px-4 text-gray-700">
    //       <h3 className="text-lg tracking-wider">العيادات</h3>
    //       <p className="text-3xl">{clinicCount}</p>
    //     </div>
    //   </div>
    //   <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
    //     <div className="p-4 bg-green-400">
    //       <FiUsers className="h-12 w-12 text-white" />
    //     </div>
    //     <div className="px-4 text-gray-700">
    //       <h3 className="text-lg tracking-wider">المستخدمين</h3>
    //       <p className="text-3xl">{userCount}</p>
    //     </div>
    //   </div>

    //   <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
    //     <div className="p-4 bg-blue-400">
    //       <FiCalendar className="h-12 w-12 text-white" />
    //     </div>
    //     <div className="px-4 text-gray-700">
    //       <h3 className="text-lg tracking-wider"> الحجوزات</h3>
    //       <p className="text-3xl">523</p>
    //     </div>
    //   </div>
    //   <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
    //     <div className="p-4 bg-indigo-400">
    //       <FaUserInjured className="h-12 w-12 text-white" />
    //     </div>
    //     <div className="px-4 text-gray-700">
    //       <h3 className="text-lg tracking-wider">المرضى</h3>
    //       <p className="text-3xl">150</p>
    //     </div>
    //   </div>
    //   <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
    //     <div className="p-4 bg-red-400">
    //       <GiScalpel className="h-12 w-12 text-white" />
    //     </div>
    //     <div className="px-4 text-gray-700">
    //       <h3 className="text-lg tracking-wider">العمليات</h3>
    //       <p className="text-3xl">10</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DashboardCards;
