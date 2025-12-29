import { z } from "zod";
import { SERVICE_OPTIONS } from "./services";

export const leadSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(7),
  address: z.string().min(3),
  service: z.enum(SERVICE_OPTIONS),
  message: z.string().max(1200).optional(),
  honey: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
