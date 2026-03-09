import { adminAuth } from "@/lib/firebaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const cookie = req.cookies.get("session")?.value;
    if (!cookie)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const decodedToken = await adminAuth.verifySessionCookie(cookie, true);
    const userRecord = await adminAuth.getUser(decodedToken.uid);

    return NextResponse.json({
      email: userRecord.email,
      displayName: userRecord.displayName,
    });
  } catch {
    return NextResponse.json({ error: "Invalid session" }, { status: 401 });
  }
}
