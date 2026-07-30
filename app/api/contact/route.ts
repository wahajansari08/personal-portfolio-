import { NextRequest, NextResponse } from "next/server";
import type { ContactFormData } from "@/types";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();

  if (!accessKey) {
    return NextResponse.json(
      {
        success: false,
        code: "NO_ACCESS_KEY",
        message:
          "Email is not configured yet. Add WEB3FORMS_ACCESS_KEY to your environment (get a free key at https://web3forms.com), then restart the dev server.",
      },
      { status: 503 },
    );
  }

  try {
    const body: ContactFormData = await req.json();

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 },
      );
    }

    const payload = {
      access_key: accessKey,
      name: body.name.trim(),
      email: body.email.trim(),
      subject: body.subject.trim(),
      message: body.message.trim(),
      from_name: "Portfolio contact form",
    };

    const upstream = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const raw = (await upstream.text()) as string;
    let parsed: { success?: boolean; message?: string } = {};
    try {
      parsed = JSON.parse(raw) as { success?: boolean; message?: string };
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Unexpected response from email service.",
        },
        { status: 502 },
      );
    }

    if (!upstream.ok || parsed.success === false) {
      return NextResponse.json(
        {
          success: false,
          error:
            typeof parsed.message === "string"
              ? parsed.message
              : "Could not send message. Try again later.",
        },
        { status: upstream.ok ? 400 : upstream.status },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        typeof parsed.message === "string" && parsed.message.length > 0
          ? parsed.message
          : "Thank you — your message was sent.",
    });
  } catch (e) {
    console.error("Contact form error:", e);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
