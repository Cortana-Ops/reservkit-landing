import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const spamPattern = /(https?:\/\/.*){3,}|<a\s|<\/a>|viagra|casino|crypto\s+airdrop/i;

type EarlyAccessRequestPayload = {
  name?: string;
  email?: string;
  businessName?: string;
  businessType?: string;
  currentBookingTool?: string;
  monthlyBookingVolume?: string;
  biggestBookingProblem?: string;
  website?: string;
  notes?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validate(payload: EarlyAccessRequestPayload) {
  const fields = {
    name: clean(payload.name),
    email: clean(payload.email).toLowerCase(),
    businessName: clean(payload.businessName),
    businessType: clean(payload.businessType),
    currentBookingTool: clean(payload.currentBookingTool),
    monthlyBookingVolume: clean(payload.monthlyBookingVolume),
    biggestBookingProblem: clean(payload.biggestBookingProblem),
    website: clean(payload.website),
    notes: clean(payload.notes),
  };

  const errors: Record<string, string> = {};
  if (!fields.name) errors.name = "Name is required.";
  if (!emailPattern.test(fields.email)) errors.email = "Enter a valid email address.";
  if (!fields.businessName) errors.businessName = "Business name is required.";
  if (!fields.businessType) errors.businessType = "Business type is required.";
  if (fields.biggestBookingProblem.length < 8) errors.biggestBookingProblem = "Tell us the main booking problem you want fixed.";
  if (fields.biggestBookingProblem && spamPattern.test(fields.biggestBookingProblem)) errors.biggestBookingProblem = "This answer could not be accepted.";
  if (fields.notes && fields.notes.length < 8) errors.notes = "Add a little more context or leave notes blank.";
  if (fields.notes && spamPattern.test(fields.notes)) errors.notes = "Notes could not be accepted.";
  if (fields.website && fields.website.length > 0 && !/^https?:\/\/|^[\w.-]+\.[a-z]{2,}/i.test(fields.website)) {
    errors.website = "Enter a valid website or social link.";
  }

  return { fields, errors };
}

export async function POST(request: Request) {
  let body: EarlyAccessRequestPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const { fields, errors } = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.EARLY_ACCESS_REQUEST_TO_EMAIL || process.env.BETA_REQUEST_TO_EMAIL;
  const from =
    process.env.EARLY_ACCESS_REQUEST_FROM_EMAIL ||
    process.env.BETA_REQUEST_FROM_EMAIL ||
    "ReservKit Early Access <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return NextResponse.json(
      { error: "Early access request email is not configured." },
      { status: 500 }
    );
  }

  const lines = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Business: ${fields.businessName}`,
    `Business type: ${fields.businessType}`,
    `Current booking tool: ${fields.currentBookingTool || "Not provided"}`,
    `Monthly booking volume: ${fields.monthlyBookingVolume || "Not provided"}`,
    `Biggest booking problem: ${fields.biggestBookingProblem}`,
    `Website/social: ${fields.website || "Not provided"}`,
    "",
    "Notes:",
    fields.notes || "Not provided",
  ];

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: fields.email,
        subject: `ReservKit early access request: ${fields.businessName}`,
        text: lines.join("\n"),
      }),
    });
  } catch {
    return NextResponse.json(
      { error: "Could not send early access request right now." },
      { status: 502 }
    );
  }

  if (!response.ok) {
    return NextResponse.json(
      { error: "Could not send early access request right now." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
