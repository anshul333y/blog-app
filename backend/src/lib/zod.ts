import z from "zod";

export const signUpInput = z.object({
  email: z.email(),
  password: z.string(),
});

export const signInInput = z.object({
  email: z.email(),
  password: z.string(),
});

export const blogPostInput = z.object({
  title: z.string(),
  content: z.string(),
  authorId: z.string(),
});

export const blogPutInput = z.object({
  id: z.string(),
  content: z.string(),
  authorId: z.string(),
});
