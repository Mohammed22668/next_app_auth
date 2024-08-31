import DashboardCards from "@/components/Cards/DashboardCards";
import { getClinicCount } from "@/lib/actions/clinic.action";
import { getUserCount } from "@/lib/actions/user.action";
import React from "react";

const page = async () => {
  const users = await getUserCount();
  const clinics = await getClinicCount();

  return (
    <div className="min-h-screen">
      <DashboardCards
        userCount={users?.userCount}
        clinicCount={clinics?.clinicCount}
      />
    </div>
  );
};

export default page;
