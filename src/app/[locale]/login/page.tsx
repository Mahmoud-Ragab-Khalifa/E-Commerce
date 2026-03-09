"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
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

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<null | string>();
  const [loading, setLoading] = useState(false);

  const locale = useLocale();

  const dir: "rtl" | "ltr" = locale === "ar" ? "rtl" : "ltr";

  const t = useTranslations("auth");

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const cred = await signInWithEmailAndPassword(auth, email, password);

      const idToken = await cred.user.getIdToken();

      await fetch(`/${locale}/api/auth/session`, {
        method: "POST",
        body: JSON.stringify({ idToken }),
      });

      router.replace(redirect || `/${locale}/profile`);

      toast.success(t("loginMessage"), {
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
          <CardTitle>{t("loginTitle")}</CardTitle>
          <CardDescription>{t("loginDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
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
                <div className="flex items-center">
                  <Label htmlFor="password">{t("pass")}</Label>
                </div>
                <Input
                  value={password}
                  id="password"
                  placeholder={t("passPlacholder")}
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(null);
                  }}
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm">{t(error)}</p>}

              <Button
                type="submit"
                className="w-full font-medium text-md"
                disabled={loading || !email || !password}
              >
                {loading ? t("loginLoader") : t("login")}
              </Button>

              <Link
                href={redirect ? `/register?redirect=${redirect}` : "/register"}
                className="text-sm underline w-full text-center"
              >
                {t("loginLink")}
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
