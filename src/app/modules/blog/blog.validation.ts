import { z } from "zod";

const blogValidationSchema = z.object({
  body: z.object({
    userName: z.string({ required_error: 'User Name is Required' }),
    userEmail: z.string({ required_error: 'User Email is Required' }),
    title: z.string({ required_error: 'Blog Title is Required' }),
    description: z.string({ required_error: 'Blog Description is Required' }),
    category: z.string({ required_error: 'Blog category is Required' }),
    image: z.string({ required_error: 'Blog image is Required' }),
  }),
});

const updateBlogValidationSchema = z.object({
  body: z.object({
    userName: z.string({ required_error: 'User Name is Required' }).optional(),
    userEmail: z
      .string({ required_error: 'User Email is Required' })
      .optional(),
    category: z
      .string({ required_error: 'Blog category is Required' })
      .optional(),
    title: z.string({ required_error: 'Blog Title is Required' }).optional(),
    description: z
      .string({ required_error: 'Blog Description is Required' })
      .optional(),
    image: z.string({ required_error: 'Blog image is Required' }).optional(),
  }),
});

export const BlogValidationSchemas = {
  blogValidationSchema,
  updateBlogValidationSchema,
};