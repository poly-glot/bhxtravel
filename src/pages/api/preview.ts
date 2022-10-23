import { NextApiRequest, NextApiResponse } from "next";
import { Quote } from "../../model";
import EmailTemplate from "../../utils/email-template";
import sendGrid from "@sendgrid/mail";
sendGrid.setApiKey(process.env.SENDGRID_API!);

export default async function emailPreview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = {
    pickup: "London",
    departureDate: "2022-12-01",
    departureTime: "23:00",
    returnDate: "",
    returnTime: "",
    dropOff: "Birmingham",
    name: "Test User",
    email: "test@test.com",
    phone: "000 0000 000",
    luggage: "1",
    numPassenger: "2",
    reason: "Football",
    hearAboutUs: "Bing",
    terms: false,
    doReturn: "one-way",
  } as Quote;

  const enquiry = data.doReturn === "one-way" ? "One Way" : "Return";
  const subject = `BHXTravel - A new enquiry ${enquiry} ${data.pickup} -> ${data.dropOff}`;

  await sendGrid.send({
    to: process.env.QUOTE_TO!,
    from: process.env.SENDGRID_API_FROM!,
    subject: subject,
    html: EmailTemplate(data as Quote),
    mailSettings: {
      sandboxMode: {
        enable: process.env.SENDGRID_SANDBOX === "enable",
      },
    },
  });

  res.status(200).end(
    EmailTemplate({
      pickup: "London",
      departureDate: "2022-12-01",
      departureTime: "23:00",
      returnDate: "",
      returnTime: "",
      dropOff: "Birmingham",
      name: "Test User",
      email: "test@test.com",
      phone: "000 0000 000",
      luggage: "1",
      numPassenger: "2",
      reason: "Football",
      hearAboutUs: "Bing",
      terms: false,
      doReturn: "one-way",
    } as Quote)
  );
}
