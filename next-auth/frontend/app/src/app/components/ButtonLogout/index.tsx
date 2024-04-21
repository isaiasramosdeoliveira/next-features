/* eslint-disable @next/next/no-async-client-component */
"use client";

import { DashboardPageStyle } from "@/app/(admin)/dashboard/DashboardPageStyle.css";
import { signOut } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import React from "react";

export default async function ButtonLogout() {
  const { replace } = useRouter();
  const handleLogout = async () => {
    await signOut({
      redirect: false,
    });
    replace("/");
  };
  return (
    <button className={DashboardPageStyle.btn} onClick={handleLogout}>
      Sair
    </button>
  );
}
