import ButtonLogout from "@/app/components/ButtonLogout";
import { DashboardPageStyle } from "./DashboardPageStyle.css";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  return (
    <main className={DashboardPageStyle.container}>
      <h1 className="text-4xl">Dashboard</h1>
      <ButtonLogout />
    </main>
  );
}
