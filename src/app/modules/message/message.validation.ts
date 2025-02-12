import { z } from 'zod';

const createMessageValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'User Name is Required' }),
    email: z.string({ required_error: 'Email is Required' }),
    message: z.string({ required_error: 'Message is Required' }).optional(),
  }),
});

export const MessageValidationSchemas = {
  createMessageValidationSchema,
};
