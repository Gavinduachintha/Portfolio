import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Escape user-supplied strings before placing them inside HTML
function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml(name: string, email: string, message: string): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  // Preserve line breaks in the message body
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");
  const timestamp = new Date().toUTCString();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Courier New',Courier,monospace;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

          <!-- Header bar -->
          <tr>
            <td style="background:#111111;border:1px solid #262626;border-bottom:none;border-radius:12px 12px 0 0;padding:14px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <!-- Traffic lights -->
                    <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#3a3a3a;margin-right:5px;"></span>
                    <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#3a3a3a;margin-right:5px;"></span>
                    <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#3a3a3a;"></span>
                  </td>
                  <td align="center" style="color:#666;font-size:11px;letter-spacing:1px;">
                    gavindu@portfolio:~/messages
                  </td>
                  <td align="right">
                    <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#4fda8e;margin-right:4px;vertical-align:middle;"></span>
                    <span style="color:#666;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;">live</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#0d0d0d;border:1px solid #262626;border-top:none;border-radius:0 0 12px 12px;padding:28px 28px 32px;">

              <!-- Prompt line -->
              <p style="margin:0 0 24px;font-size:13px;color:#4fda8e;">
                $ cat ~/messages/new_submission.json
              </p>

              <!-- Fields -->
              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding-bottom:18px;border-bottom:1px solid #1a1a1a;">
                    <span style="color:#555;font-size:11px;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:4px;">name</span>
                    <span style="color:#ededed;font-size:14px;">${safeName}</span>
                  </td>
                </tr>

                <tr>
                  <td style="padding:18px 0;border-bottom:1px solid #1a1a1a;">
                    <span style="color:#555;font-size:11px;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:4px;">email</span>
                    <a href="mailto:${safeEmail}" style="color:#4fda8e;font-size:14px;text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:18px 0 0;">
                    <span style="color:#555;font-size:11px;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:8px;">message</span>
                    <p style="margin:0;color:#ccc;font-size:13px;line-height:1.8;background:#111;border-left:3px solid #4fda8e;padding:12px 16px;border-radius:0 6px 6px 0;">${safeMessage}</p>
                  </td>
                </tr>

              </table>

              <!-- Footer -->
              <p style="margin:28px 0 0;font-size:11px;color:#444;border-top:1px solid #1a1a1a;padding-top:18px;">
                <span style="color:#4fda8e;">✓</span>&nbsp; Received via portfolio.gavindu.dev &nbsp;·&nbsp; ${timestamp}
              </p>

            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body as {
      name: string;
      email: string;
      message: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["agavindu123@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] New message from ${name}`,
      html: buildEmailHtml(name, email, message),
    });

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 },
    );
  }
}
