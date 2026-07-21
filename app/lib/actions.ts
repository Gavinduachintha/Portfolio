"use server";

// Contact form Server Action.
//
// To enable real email delivery:
//   1. Install the Resend SDK:  npm install resend
//   2. Add RESEND_API_KEY to your .env.local
//   3. Uncomment the Resend block below and remove the stub response.
//
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = (formData.get("name") as string | null)?.trim();
  const email = (formData.get("email") as string | null)?.trim();
  const message = (formData.get("message") as string | null)?.trim();

  // Server-side validation
  if (!name || !email || !message) {
    return { status: "error", message: "All fields are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (message.length < 10) {
    return {
      status: "error",
      message: "Message must be at least 10 characters.",
    };
  }

  try {
    // ── Resend integration (uncomment when ready) ──────────────────────────
    // await resend.emails.send({
    //   from: "Portfolio Contact <onboarding@resend.dev>",
    //   to: "gavindu.al@gmail.com",
    //   subject: `Portfolio contact from ${name}`,
    //   replyTo: email,
    //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    // });
    // ── End Resend block ───────────────────────────────────────────────────

    // Stub: remove this block once a real provider is wired up.
    await new Promise<void>((resolve) => setTimeout(resolve, 800));

    return {
      status: "success",
      message: "Message sent — I'll get back to you soon.",
    };
  } catch (err) {
    console.error("[contact] Failed to send message:", err);
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}
