import { NextApiRequest, NextApiResponse } from "next";
import { ZodError } from "zod";
import { schemaQuote } from "../../model";
import { fromZodError } from "zod-validation-error";
import { Resend } from "resend";
import EmailTemplate from "../../utils/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function emailQuote(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = schemaQuote.parse(req.body);

    const enquiry = data.doReturn === "one-way" ? "One Way" : "Return";
    const subject = `BHXTravel - A new enquiry ${enquiry} ${data.pickup} -> ${data.dropOff}`;

    await resend.emails.send({
      to: process.env.QUOTE_TO!,
      from: process.env.RESEND_FROM!,
      subject: subject,
      html: EmailTemplate(data),
    });

    res.status(200).json({
      success: true
    });
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).json({
        error: fromZodError(err).message,
      });
      return;
    }

    console.error("Failed to send quote email:", err);
    res.status(500).json({
      error: "An unexpected error occurred.",
    });
  }
}
