import { NextRequest, NextResponse } from "next/server";
import type { ContactFormData } from "@/types";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export async function POST(req: NextRequest) {
  try {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();

    if (!accessKey) {
      return NextResponse.json(
        {
          success: false,
          code: "NO_ACCESS_KEY",
          message:
            "WEB3FORMS_ACCESS_KEY is not configured.",
        },
        { status: 503 }
      );
    }

    const body = (await req.json()) as ContactFormData;

    if (
      !body.name?.trim() ||
      !body.email?.trim() ||
      !body.subject?.trim() ||
      !body.message?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(body.email.trim())) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email address.",
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

    console.log("=================================");
    console.log("Web3Forms URL:", WEB3FORMS_URL);
    console.log("Access key exists:", Boolean(accessKey));
    console.log("Payload:", {
      ...payload,
      access_key: "[HIDDEN]",
    });
    console.log("=================================");

    let response: Response;

    try {
      response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (fetchError) {
      console.error("WEB3FORMS FETCH ERROR:", fetchError);

      return NextResponse.json(
        {
          success: false,
          error: "Could not connect to Web3Forms.",
          debug:
            process.env.NODE_ENV === "development"
              ? fetchError instanceof Error
                ? fetchError.message
                : String(fetchError)
              : undefined,
        },
        { status: 502 }
      );
    }

    console.log("Web3Forms HTTP status:", response.status);
    console.log(
      "Web3Forms content-type:",
      response.headers.get("content-type")
    );

    const raw = await response.text();

    console.log("Web3Forms RAW RESPONSE:", raw);

    let result: {
      success?: boolean;
      message?: string;
      error?: string;
    };

    try {
      result = JSON.parse(raw);
    } catch (parseError) {
      console.error("WEB3FORMS JSON PARSE ERROR:", parseError);

      return NextResponse.json(
        {
          success: false,
          error: "Web3Forms returned an unexpected response.",
          debug:
            process.env.NODE_ENV === "development"
              ? raw
              : undefined,
        },
        { status: 502 }
      );
    }

    console.log("Web3Forms parsed result:", result);

    if (!response.ok || result.success !== true) {
      return NextResponse.json(
        {
          success: false,
          error:
            result.message ||
            result.error ||
            "Web3Forms rejected the submission.",
        },
        {
          status: response.status || 400,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        result.message ||
        "Thank you — your message was sent successfully.",
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to send your message.",
      },
      { status: 500 }
    );
  }
}