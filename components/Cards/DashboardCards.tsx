import React from "react";
import { FiCalendar, FiUsers } from "react-icons/fi";

import { FaClinicMedical, FaUserInjured } from "react-icons/fa";
import { GiScalpel } from "react-icons/gi";
const DashboardCards = ({ userCount }: any) => {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
      <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-red-400">
          <FaClinicMedical className="h-12 w-12 text-white" />
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-lg tracking-wider">العيادات</h3>
          <p className="text-3xl">10</p>
        </div>
      </div>
      <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-green-400">
          <FiUsers className="h-12 w-12 text-white" />
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-lg tracking-wider">المستخدمين</h3>
          <p className="text-3xl">{userCount}</p>
        </div>
      </div>

      <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-blue-400">
          <FiCalendar className="h-12 w-12 text-white" />
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-lg tracking-wider"> الحجوزات</h3>
          <p className="text-3xl">523</p>
        </div>
      </div>
      <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-indigo-400">
          <FaUserInjured className="h-12 w-12 text-white" />
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-lg tracking-wider">المرضى</h3>
          <p className="text-3xl">150</p>
        </div>
      </div>
      <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-red-400">
          <GiScalpel className="h-12 w-12 text-white" />
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-lg tracking-wider">العمليات</h3>
          <p className="text-3xl">10</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
