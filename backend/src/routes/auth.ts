import { Hono } from "hono";
import getPrisma from "../lib/prismaFunction";
import { sign } from "hono/jwt";
import { signInInput, signUpInput } from "../lib/zod";

const auth = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

auth.post("/signup", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();

  const response = signUpInput.safeParse(body);
  if (!response.success) return c.text("Invalid Input", 400);

  // TODO: add encryption
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });

    const secret = c.env.JWT_SECRET;
    const token = await sign({ id: user.id }, secret, "HS256");

    return c.json({
      jwt: token,
    });
  } catch (error) {
    return c.text("Internal Server Error", 500);
  }
});

auth.post("/signin", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();

  const response = signInInput.safeParse(body);
  if (!response.success) return c.text("Invalid Input", 400);

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user || user.password !== body.password) {
      return c.text("Unauthorized", 401);
    }

    const secret = c.env.JWT_SECRET;
    const token = await sign({ id: user.id }, secret, "HS256");

    return c.json({
      jwt: token,
    });
  } catch (error) {
    return c.text("Internal Server Error", 500);
  }
});

export default auth;
