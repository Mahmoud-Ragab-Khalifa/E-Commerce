"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLocale } from "next-intl";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const cred = await createUserWithEmailAndPassword(auth, email, password);

      const idToken = await cred.user.getIdToken();

      await fetch(`/${locale}/api/auth/session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      router.push("/profile");

      toast.success("Account created successfully! Welcome!", {
        position: "bottom-left",
      });
    } catch (err) {
      let message = "Something went wrong. Please try again.";
      if (err instanceof FirebaseError) {
        message = getAuthErrorMessage(err.code || err.message);
      }

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto min-h-[calc(100vh-112px)] lg:min-h-[calc(100vh-168px)] flex items-center justify-center px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <CardDescription>
            Enter your email and password to register
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(null);
                  }}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(null);
                  }}
                  id="password"
                  type="password"
                  placeholder="At least 6 characters"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError(null);
                  }}
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button
                type="submit"
                className="w-full"
                disabled={loading || !email || !password || !confirmPassword}
              >
                {loading ? "Registering..." : "Register"}
              </Button>

              <Link
                href={"/login"}
                className="text-sm underline w-full text-center"
              >
                Already have an account? Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
