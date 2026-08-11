import { NextRequest, NextResponse } from "next/server";
import type { ContactFormData } from "@/types";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export async function POST(req: NextRequest) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();

  if (!accessKey) {
    return NextResponse.json(
      {
        success: false,
        code: "NO_ACCESS_KEY",
        message:
          "Email is not configured yet. Add WEB3FORMS_ACCESS_KEY to your environment.",
      },
      { status: 503 }
    );
  }

  try {
    const body: ContactFormData = await req.json();

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(body.email.trim())) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email format",
        },
        { status: 400 }
      );
    }

    const payload = {
      access_key: accessKey,
      name: body.name.trim(),
      email: body.email.trim(),
      subject: body.subject.trim(),
      message: body.message.trim(),
      from_name: "Portfolio Contact Form",
    };

    const upstream = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const raw = await upstream.text();

    console.log("Web3Forms status:", upstream.status);
    console.log("Web3Forms response:", raw);

    let parsed: {
      success?: boolean;
      message?: string;
    };

    try {
      parsed = JSON.parse(raw);
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Web3Forms returned an invalid response.",
          debug:
            process.env.NODE_ENV === "development" ? raw : undefined,
        },
        { status: 502 }
      );
    }

    if (!upstream.ok || parsed.success !== true) {
      return NextResponse.json(
        {
          success: false,
          error:
            parsed.message ||
            "Web3Forms could not send the message.",
        },
        { status: upstream.ok ? 400 : upstream.status }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        parsed.message ||
        "Thank you — your message was sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}