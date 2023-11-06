import React, { useEffect } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <div className="text-color-black mt-[4rem]">
      <h1>Welcome {session?.user?.name}</h1>
    </div>
  );
};

export default page;
