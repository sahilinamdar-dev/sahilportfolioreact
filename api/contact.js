// Vercel serverless function — keeps the Brevo key server-side (NOT exposed to browser).
// Env vars (set in Vercel, no VITE_ prefix): BREVO_API_KEY, BREVO_SENDER_EMAIL, CONTACT_TO_EMAIL
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, service, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const sender = process.env.BREVO_SENDER_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !sender || !to) {
    return res.status(500).json({ error: "Email not configured on server" });
  }

  try {
    const r = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Portfolio Contact", email: sender },
        to: [{ email: to }],
        replyTo: { email, name },
        subject: `New enquiry: ${service || "General"} — from ${name}`,
        htmlContent: `
          <h2>New contact form message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service || "—"}</p>
          <p><strong>Message:</strong></p>
          <p>${String(message).replace(/\n/g, "<br/>")}</p>
        `,
      }),
    });

    if (!r.ok) {
      const err = await r.json().catch(() => ({}));
      return res
        .status(502)
        .json({ error: err.message || `Brevo error (${r.status})` });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: e.message || "Send failed" });
  }
}
