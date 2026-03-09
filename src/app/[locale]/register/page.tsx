"use client";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebaseClient";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getAuthErrorMessage } from "@/lib/getAuthErrorMessage";
import { FirebaseError } from "firebase/app";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/i18n/navigation";
import { toast } from "sonner";

export default function Register() {
  const router = useRouter();

  const locale = useLocale();

  const dir: "rtl" | "ltr" = locale === "ar" ? "rtl" : "ltr";

  const t = useTranslations("auth");

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("notMatch");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const cred = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(cred.user, {
        displayName: username,
      });

      const idToken = await cred.user.getIdToken();

      await fetch(`/${locale}/api/auth/session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      router.replace(redirect || `/${locale}/profile`);

      toast.success("Account created successfully! Welcome!", {
        position: "bottom-left",
      });
    } catch (err) {
      let message = "default";
      if (err instanceof FirebaseError) {
        message = getAuthErrorMessage(err.code || err.message);
      }

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container mx-auto min-h-[calc(100vh-112px)] lg:min-h-[calc(100vh-168px)] flex items-center justify-center px-4"
      dir={dir}
    >
      <Card className="w-full max-w-sm" dir={dir}>
        <CardHeader>
          <CardTitle>{t("registerTitle")}</CardTitle>
          <CardDescription>{t("registerdescription")}</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">{t("username")}</Label>
                <Input
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError(null);
                  }}
                  id="username"
                  type="text"
                  placeholder={t("usernamePlacholder")}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(null);
                  }}
                  id="email"
                  type="email"
                  placeholder={t("emailPlacholder")}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">{t("pass")}</Label>
                <Input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(null);
                  }}
                  id="password"
                  type="password"
                  placeholder={t("passPlacholder")}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">{t("passConfirmation")}</Label>
                <Input
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError(null);
                  }}
                  id="confirmPassword"
                  type="password"
                  placeholder={t("passConfirmationPlacholder")}
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm">{t(error)}</p>}

              <Button
                type="submit"
                className="w-full font-medium text-md"
                disabled={loading || !email || !password || !confirmPassword}
              >
                {loading ? t("registerLoader") : t("register")}
              </Button>

              <Link
                href={redirect ? `/login?redirect=${redirect}` : "/login"}
                className="text-sm underline w-full text-center"
              >
                {t("registerLink")}
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
