import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const webhookUrl = process.env.WAITLIST_WEBHOOK_URL;

    console.log("VessTrust Waitlist Submission Ingested:", body);

    // If a webhook URL is configured, forward the request payload
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          ...body,
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook responded with status ${response.status}`);
      }
    }

    return NextResponse.json({ success: true, message: "Submission successful" }, { status: 200 });
  } catch (error) {
    console.error("Waitlist Ingestion Error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to process submission at this time. Please try again." },
      { status: 500 }
    );
  }
}
