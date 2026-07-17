import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";

const loggedin = createMiddleware<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>(async (c, next) => {
  try {
    const header = c.req.header("Authorization");

    if (!header) {
      return c.text("Unauthorized", 401);
    }

    const secret = c.env.JWT_SECRET;
    const response = (await verify(header, secret, "HS256")) as { id: string };

    if (!response.id) {
      return c.text("Unauthorized", 401);
    }

    c.set("userId", response.id);
    return await next();
  } catch (error) {
    return c.text("Unauthorized", 401);
  }
});

export default loggedin;
