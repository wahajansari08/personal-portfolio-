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
    const body = (await req.json()) as ContactFormData;

    // Validate required fields
    if (!body.name?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Name is required.",
        },
        { status: 400 }
      );
    }

    if (!body.email?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Email is required.",
        },
        { status: 400 }
      );
    }

    if (!body.subject?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Subject is required.",
        },
        { status: 400 }
      );
    }

    if (!body.message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Message is required.",
        },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(body.email.trim())) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Web3Forms payload
    const payload = {
      access_key: accessKey,
      name: body.name.trim(),
      email: body.email.trim(),
      subject: body.subject.trim(),
      message: body.message.trim(),
      from_name: "Portfolio Contact Form",
    };

    console.log("Sending contact form to Web3Forms...");

    const upstream = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Get response as text first
    const raw = await upstream.text();

    console.log("Web3Forms status:", upstream.status);
    console.log("Web3Forms response:", raw);

    // Try to parse JSON
    let parsed: {
      success?: boolean;
      message?: string;
      error?: string;
    };

    try {
      parsed = JSON.parse(raw);
    } catch (parseError) {
      console.error("Failed to parse Web3Forms response:", parseError);

      return NextResponse.json(
        {
          success: false,
          error: "Unexpected response from email service.",
          debug:
            process.env.NODE_ENV === "development"
              ? raw
              : undefined,
        },
        { status: 502 }
      );
    }

    // Web3Forms returned an error
    if (!upstream.ok || parsed.success !== true) {
      console.error("Web3Forms error:", parsed);

      return NextResponse.json(
        {
          success: false,
          error:
            parsed.message ||
            parsed.error ||
            "Web3Forms could not send the message.",
        },
        {
          status: upstream.ok ? 400 : upstream.status,
        }
      );
    }

    // Success
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
        error: "Internal server error.",
      },
      { status: 500 }
    );
  }
}