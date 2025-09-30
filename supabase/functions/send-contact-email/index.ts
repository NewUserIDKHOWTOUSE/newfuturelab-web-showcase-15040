import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
    const emailResponse = await resend.emails.send({
      from: "New Future Lab <onboarding@resend.dev>",
      to: ["vikram15joy@gmail.com"],
      replyTo: email,
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
          <p style="color: #6b7280; font-size: 14px;">Dit bericht is verzonden via het contactformulier op newfuturelab.nl</p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to the customer
    await resend.emails.send({
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
            New Future Lab<br>
            Technologielaan 123<br>
            1234 AB Amsterdam<br>
            info@newfuturelab.nl
          </p>
        </div>
      `,
    });

    return new Response(JSON.stringify(emailResponse), {
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
