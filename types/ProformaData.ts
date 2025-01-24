import { z } from "zod";

export type ProformaData = {
  id?: string;
  logo?: string;
  referenceNumber: string;
  dueDate: string;
  customer: MoralPerson;
  creator: MoralPerson;
  items: Item[];
  conditions: string;
  slogan: string;
};

export type MoralPerson = {
  name: string;
  address: string;
  email: string;
  phone: string;
};

export type Item = {
  name: string;
  quantity: number;
  unitPrice: number;
};

export const createProformaDataSchema = z.object({
  referenceNumber: z.string(),
  logo: z.string().optional(),
  dueDate: z.string(),
  customer: z.object({
    name: z.string(),
    address: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
  }),
  creator: z.object({
    name: z.string(),
    address: z.string().optional(),
    email: z.string().email("Cette email n'est pas valide").optional(),
    phone: z.string().optional(),
  }),
  items: z.array(
    z.object({
      name: z.string(),
      quantity: z.number().optional(),
      unitPrice: z.number(),
    }),
  ),
  conditions: z.string().optional(),
  slogan: z.string().optional(),
});
