import { Hono } from "hono";
import { verify } from "hono/jwt";

const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blog.use("/*", async (c, next) => {
  const header = c.req.header("Authorization");
  const token = header.split(" ")[1];

  const response = await verify(token, c.env.JWT_SECRET, "RS256");

  if (response.id) {
    await next();
  }
  return c.text("something went wrong");
});

blog.post("/", (c) => {
  return c.text("Hello Hono!");
});

blog.put("/", (c) => {
  return c.text("Hello Hono!");
});

blog.get("/:id", (c) => {
  const id = c.req.param("id");
  return c.text("Hello Hono! the id is : " + id);
});

export default blog;
