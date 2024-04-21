"use client";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import { refresh } from "../services/auth/refresh";

export default function NextAuthSession({ children }: { children: ReactNode }) {
  const { data: session }: any = useSession();
  useEffect(() => {
    const handleSession = async () => {
      if (session) {
        const res = await refresh(session.user.data.refresh_token);
      }
    };
    handleSession();
  }, [session]);
  return <>{children}</>;
}
