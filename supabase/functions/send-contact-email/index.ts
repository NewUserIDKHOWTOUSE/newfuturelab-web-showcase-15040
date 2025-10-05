import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Contact email function called");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message }: ContactEmailRequest = await req.json();
    
    console.log(`Processing contact form from: ${name} (${email})`);

    // Send email to the business
    const businessEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: "New Future Lab <onboarding@resend.dev>",
        to: ["vikram15joy@gmail.com"],
        reply_to: email,
        subject: `Nieuw contactformulier bericht van ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4F46E5;">Nieuw Contact Formulier Bericht</h2>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Naam:</strong> ${name}</p>
              <p><strong>E-mail:</strong> ${email}</p>
              ${company ? `<p><strong>Bedrijf:</strong> ${company}</p>` : ''}
              <p><strong>Bericht:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #6b7280; font-size: 14px;">Dit bericht is verzonden via het contactformulier op jaysolutions.nl</p>
          </div>
        `,
      })
    });

    const businessEmailData = await businessEmailRes.json();
    console.log("Business email response:", businessEmailData);

    // Send confirmation email to the customer
    const confirmationEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: "New Future Lab <onboarding@resend.dev>",
        to: [email],
        subject: "Bedankt voor uw bericht!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4F46E5;">Bedankt voor uw bericht, ${name}!</h2>
            <p>Wij hebben uw bericht ontvangen en nemen zo snel mogelijk contact met u op.</p>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Uw bericht:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p>Met vriendelijke groet,<br>Het New Future Lab Team</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            <p style="color: #6b7280; font-size: 12px;">
              JaySolutions<br>
              Technologielaan 123<br>
              1234 AB Amsterdam<br>
              info@jaysolutions.nl
            </p>
          </div>
        `,
      })
    });

    const confirmationEmailData = await confirmationEmailRes.json();
    console.log("Confirmation email response:", confirmationEmailData);

    return new Response(JSON.stringify(businessEmailData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
