import React from "react";
import LoginForm from "@/components/Forms/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");
  return <LoginForm />;
};

export default page;
