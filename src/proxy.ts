import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const session = req.cookies.get("session")?.value;

  const pathname = req.nextUrl.pathname;

  const segments = pathname.split("/");
  const locale = segments[1];
  const route = "/" + segments.slice(2).join("/");

  const isAuthPage = route === "/login" || route === "/register";
  const isProfile = route === "/profile";

  if (!session && isProfile) {
    return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
  }

  if (session && isAuthPage) {
    return NextResponse.redirect(new URL(`/${locale}/profile`, req.url));
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
