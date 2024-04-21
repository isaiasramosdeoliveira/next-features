"use client";
import { SyntheticEvent, useState } from "react";
import { LoginPageStyle } from "./LoginPageStyle.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push, replace } = useRouter();
  const [username, setUsername] = useState<string>("omariosouto");
  const [password, setPassword] = useState<string>("safepassword");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    if (!res?.ok) {
      return;
    }
    replace("/dashboard");
  };

  return (
    <main>
      <form className={LoginPageStyle.container} onSubmit={handleSubmit}>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            className={LoginPageStyle.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className={LoginPageStyle.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className={`${LoginPageStyle.btn} `}>
          Login
        </button>
      </form>
    </main>
  );
}
