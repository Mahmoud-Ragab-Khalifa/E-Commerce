import { adminAuth } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { idToken } = await req.json();

  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  const sessionCookie = await adminAuth.createSessionCookie(idToken, {
    expiresIn,
  });

  const response = NextResponse.json({ status: "success" });

  response.cookies.set("session", sessionCookie, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: expiresIn,
  });

  return response;
}
