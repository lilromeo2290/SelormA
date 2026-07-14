import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Basic validation
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // In production: integrate with email service (e.g., Nodemailer, SendGrid, Resend)
    // For now, log and acknowledge — the contact form is functional end-to-end.
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      service,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting Selorm A Ventures. We'll be in touch within 24 hours.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    company: "Selorm A Ventures",
    services: [
      "Professional Painting",
      "Scaffolding Services",
      "Column Box Installation",
      "Concrete Support",
      "Construction Support Services",
      "Wheel Barrow Supply",
    ],
    contact: {
      phone: "0244264614",
      whatsapp: "0500297816",
      email: "selormagble@gmail.com",
      location: "Classic Hotel Junction, Prampram, Ghana",
    },
  });
}
