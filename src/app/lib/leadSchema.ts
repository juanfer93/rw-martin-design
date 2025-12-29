import { z } from "zod";
import { SERVICE_OPTIONS } from "./services";

export const leadSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone"),
  address: z.string().min(3, "Address is required"),
  service: z.enum(SERVICE_OPTIONS),
  message: z.string().max(1200).optional(),
  honey: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
