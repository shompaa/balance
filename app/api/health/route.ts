import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ ok: true });
  } catch (e) {
    const error = e as Error;
    return NextResponse.json({ ok: false, error: error?.message ?? "db error" }, { status: 500 });
  }
}
