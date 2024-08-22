"use client";
import React from "react";
import { useSession } from "next-auth/react";
const UserInfo = () => {
  const { data: session } = useSession();

  return (
    <div className="">
      <h2>Name :{session?.user?.name}</h2>

      <h2>Email:{session?.user?.email}</h2>
    </div>
  );
};

export default UserInfo;
