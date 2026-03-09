import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default async function proxy(req: NextRequest) {
  const response = intlMiddleware(req);

  const session = req.cookies.get("session")?.value;

  const { pathname, searchParams } = req.nextUrl;

  const locale = pathname.split("/")[1];
  const route = pathname.replace(`/${locale}`, "") || "/";

  const isAuthPage = route === "/login" || route === "/register";

  const protectedRoutes = [
    "/profile",
    "/cart",
    "/details",
    "/payment",
    "/review",
  ];

  const isProtected = protectedRoutes.some((r) => route.startsWith(r));

  /* ---------------- protected pages ---------------- */

  if (!session && isProtected) {
    const loginUrl = new URL(`/${locale}/login`, req.url);

    loginUrl.searchParams.set("redirect", pathname);

    return NextResponse.redirect(loginUrl);
  }

  /* ---------------- auth pages ---------------- */

  if (session && isAuthPage) {
    const redirect = searchParams.get("redirect");

    const target = redirect
      ? new URL(redirect, req.url)
      : new URL(`/${locale}/profile`, req.url);

    return NextResponse.redirect(target);
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
