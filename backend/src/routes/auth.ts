import { Hono } from "hono";
import getPrisma from "../prismaFunction";
import { sign } from "hono/jwt";

const auth = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

auth.post("/signup", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    const secret = c.env.JWT_SECRET;
    const token = await sign({ id: user.id }, secret);

    return c.json({
      jwt: token,
    });
  } catch (error) {
    return c.text("something went wrong");
  }
});

auth.post("/signin", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (user) {
      const secret = c.env.JWT_SECRET;
      const token = await sign({ id: user.id }, secret);

      return c.json({
        jwt: token,
      });
    }

    return c.text("something went wrong");
  } catch (error) {
    return c.text("something went wrong");
  }
});

export default auth;
