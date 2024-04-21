import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions, SessionOptions } from "next-auth";
import { randomBytes, randomUUID } from "crypto";
import { JWT } from "next-auth/jwt";
import { Session } from "inspector";

const session: SessionOptions = {
  maxAge: 7 * 24 * 60 * 60,
  strategy: "jwt",
  updateAge: 0,
  generateSessionToken: () => {
    return randomUUID?.() ?? randomBytes(32).toString("hex");
  },
};

export const authOptions: NextAuthOptions = {
  session,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:4000/api/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }: any) {
      if (token) {
        session.user = token.user!;
      }
      return session;
    },
    async jwt({ token, user, account, profile }: any) {

      if (account && user) {
        return {
          user,
        };
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
