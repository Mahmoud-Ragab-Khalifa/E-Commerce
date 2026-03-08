"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseClient";
import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function Register() {
  const router = useRouter();

  const locale = useLocale();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);

    const idToken = await cred.user.getIdToken();

    await fetch(`/${locale}/api/auth/session`, {
      method: "POST",
      body: JSON.stringify({ idToken }),
    });

    router.push("/profile");
  };

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="p-4 ring-2 ring-neutral-600"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="p-4 ring-2 ring-neutral-600"
      />

      <button onClick={register}>Register</button>
    </div>
  );
}
