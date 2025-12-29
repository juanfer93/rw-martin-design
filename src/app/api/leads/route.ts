import { NextResponse } from "next/server";
import { leadSchema } from "@/app/lib/leadSchema";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Validation failed", errors: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // anti-bot: if honey filled, pretend success
  if (parsed.data.honey) return NextResponse.json({ ok: true });

  // TODO: Integrar a tu email/CRM (Resend, SendGrid, HubSpot, etc.)
  // Por ahora solo devolvemos OK.
  return NextResponse.json({ ok: true });
}
