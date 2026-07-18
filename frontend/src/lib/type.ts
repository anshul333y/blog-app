import type z from "zod";
import type { signUpInput } from "./zod";
import type { signInInput } from "./zod";
import type { blogPostInput } from "./zod";
import type { blogPutInput } from "./zod";

export type signUpType = z.infer<typeof signUpInput>;
export type signInType = z.infer<typeof signInInput>;
export type blogPostInput = z.infer<typeof blogPostInput>;
export type blogPutInput = z.infer<typeof blogPutInput>;
