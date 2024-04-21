import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface IAuthLayout {
  children: ReactNode;
}

export default async function AuthLayout({ children }: IAuthLayout) {
  const session: any = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  return <>{children}</>;
}
