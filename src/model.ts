import { z } from "zod";

export const schemaQuote = z.object({
  pickup: z.string().min(1),
  departureDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  departureTime: z.string().regex(/^\d{2}:\d{2}$/),
  returnDate: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}$/), z.string()]),
  returnTime: z.union([z.string().regex(/^\d{2}:\d{2}$/), z.string()]),
  dropOff: z.string().min(1),
  name: z.string(),
  email: z.string().email().optional(),
  phone: z.string().min(1),
  luggage: z.string(),
  numPassenger: z.string(),
  reason: z.string().optional(),
  hearAboutUs: z.string().optional(),
  terms: z.boolean(),
  doReturn: z.enum(["one-way", "return"]),
});

export type Quote = z.infer<typeof schemaQuote>;
