"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore, User } from "@/store/authStore";
import { useRouter } from "@/i18n/navigation";

const Login = () => {
  const router = useRouter();

  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (token) router.back();
  }, [router, token]);

  const setAuth = useAuthStore((state) => state.setAuth);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();

      const { id, username, email, firstName, lastName, gender, image } = data;

      const user: User = {
        id,
        username,
        email,
        firstName,
        lastName,
        gender,
        image,
      };

      setAuth(data.accessToken, user);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 min-h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your username below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link" type="button">
              Sign Up
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                required
                value={form.username}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <button
                  type="button"
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </button>
              </div>

              <Input
                id="password"
                type="password"
                required
                value={form.password}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            {error && (
              <p className="text-sm text-red-500" role="alert">
                {error}
              </p>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <Button variant="outline" className="w-full" disabled={loading}>
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
