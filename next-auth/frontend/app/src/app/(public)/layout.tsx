import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface IAuthLayout {
  children: ReactNode;
}

export default async function AuthLayout({ children }: IAuthLayout) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
