import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

// Middleware untuk memeriksa apakah pengguna sudah masuk atau belum
export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;
}

// Konfigurasi path yang cocok untuk middleware
export default withAuth(mainMiddleware, ["/user"]);
