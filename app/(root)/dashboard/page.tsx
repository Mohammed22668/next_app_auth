import DashboardCards from "@/components/Cards/DashboardCards";
import { getUserCount } from "@/lib/actions/user.action";
import React from "react";

const page = async () => {
  const users = await getUserCount();

  return (
    <div>
      <DashboardCards userCount={users?.userCount} />
    </div>
  );
};

export default page;
