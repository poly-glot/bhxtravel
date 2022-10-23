import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { schemaQuote } from "../../model";
import { fromZodError } from "zod-validation-error";
import sendGrid from "@sendgrid/mail";
import EmailTemplate from "../../utils/email-template";
import "./_config";

export default async function emailQuote(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = schemaQuote.parse(req.body);

    const enquiry = data.doReturn === "one-way" ? "One Way" : "Return";
    const subject = `BHXTravel - A new enquiry ${enquiry} ${data.pickup} -> ${data.dropOff}`;

    await sendGrid.send({
      to: process.env.QUOTE_TO!,
      from: process.env.SENDGRID_API_FROM!,
      subject: subject,
      html: EmailTemplate(data),
      mailSettings: {
        sandboxMode: {
          enable: process.env.SENDGRID_SANDBOX === "enable",
        },
      },
    });

    res.status(200).json({
      success: true
    });
  } catch (err) {
    res.status(400).json({
      error: fromZodError(err as z.ZodError).message,
    });
  }
}
