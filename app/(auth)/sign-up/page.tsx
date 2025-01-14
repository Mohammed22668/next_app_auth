import React from "react";
import RegisterForm from "@/components/Forms/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");
  return <RegisterForm />;
};

export default page;
