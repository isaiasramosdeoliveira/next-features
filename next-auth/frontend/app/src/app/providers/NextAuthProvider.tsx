"use client";

import { ReactNode, useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";
interface INextAuthProvider {
  children: ReactNode;
}

export default function NextAuthProvider({ children }: INextAuthProvider) {
  return <SessionProvider>{children}</SessionProvider>;
}

