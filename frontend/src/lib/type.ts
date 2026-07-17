import type z from "zod";
import type { signUpInput } from "./zod";
import type { signInInput } from "./zod";
import type { blogPostInput } from "./zod";
import type { blogPutInput } from "./zod";

export type SignUpType = z.infer<typeof signUpInput>;
export type SignInType = z.infer<typeof signInInput>;
export type BlogPostInput = z.infer<typeof blogPostInput>;
export type BlogPutInput = z.infer<typeof blogPutInput>;
