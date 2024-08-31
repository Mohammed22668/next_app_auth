import TableAllClinics from "@/components/Tables/TableAllClinics";
import { getAllClinics } from "@/lib/actions/clinic.action";
import React from "react";

const page = async () => {
  const allClinics = await getAllClinics();
  return (
    <div className="min-h-screen">
      <TableAllClinics getAllClinics={JSON.stringify(allClinics?.clinics)} />
    </div>
  );
};

export default page;
