interface RateLimiterBinding {
  limit(options: { key: string }): Promise<{ success: boolean }>;
}

interface AssetsBinding {
  fetch(request: Request): Promise<Response>;
}

interface Env {
  ASSETS: AssetsBinding;
  CONTACT_RATE_LIMITER: RateLimiterBinding;
  RESEND_API_KEY: string;
}

const siteUrl = "https://autor.krick.me";
const redirect = (target: string) =>
  new Response(null, {
    status: 303,
    headers: {
      Location: `${siteUrl}/${target}`,
      "Cache-Control": "no-store",
    },
  });

const contactResponse = (request: Request, sent: boolean, errorStatus = 400) => {
  if (request.headers.get("Accept")?.includes("application/json")) {
    return Response.json(
      { sent },
      {
        status: sent ? 200 : errorStatus,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }

  return redirect(sent ? "#kontakt-versendet" : "#kontakt-fehler");
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname !== "/api/contact") {
      return env.ASSETS.fetch(request);
    }

    if (request.method !== "POST") {
      return new Response("Methode nicht erlaubt", {
        status: 405,
        headers: { Allow: "POST", "Cache-Control": "no-store" },
      });
    }

    const origin = request.headers.get("Origin");
    const contentLength = Number(request.headers.get("Content-Length") ?? "0");
    if (origin !== siteUrl || contentLength > 20_000) {
      return contactResponse(request, false);
    }

    const clientKey = request.headers.get("CF-Connecting-IP") ?? "unknown";
    const rateLimit = await env.CONTACT_RATE_LIMITER.limit({ key: `contact:${clientKey}` });
    if (!rateLimit.success) {
      return contactResponse(request, false, 429);
    }

    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return contactResponse(request, false);
    }

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();
    const privacy = formData.get("privacy") === "accepted";

    if (website) {
      return contactResponse(request, true);
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || name.length > 100 || !validEmail || email.length > 254 || !message || message.length > 5000 || !privacy) {
      return contactResponse(request, false);
    }

    const safeName = name.replace(/[\r\n]+/g, " ");

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
          "Idempotency-Key": crypto.randomUUID(),
        },
        body: JSON.stringify({
          from: "Lara 47 <website@mail.autor.krick.me>",
          to: ["attila@krick.me"],
          reply_to: email,
          subject: `Nachricht über autor.krick.me von ${safeName}`,
          text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
        }),
      });

      if (!response.ok) {
        return contactResponse(request, false, 502);
      }
    } catch {
      return contactResponse(request, false, 502);
    }

    return contactResponse(request, true);
  },
};
