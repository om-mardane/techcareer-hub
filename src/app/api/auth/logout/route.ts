import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    // Get the user ID from the JWT before clearing it
    const token = req.cookies.get("hello_auth_token")?.value;
    if (token) {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || "fallback_secret");
      try {
        const { payload } = await jwtVerify(token, secret);
        if (payload.userId && typeof payload.userId === "string") {
          // Mark user as offline in the database
          await prisma.user.update({
            where: { id: payload.userId },
            data: { isOnline: false, lastLogoutAt: new Date() },
          });
        }
      } catch {
        // Token invalid/expired — still allow logout (clear cookie)
      }
    }
  } catch {
    // Ignore errors — still allow logout
  }

  const response = NextResponse.json({ message: "Logged out successfully" });
  response.cookies.set("hello_auth_token", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });
  return response;
}
