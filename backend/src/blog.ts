import { Hono } from "hono";

const blog = new Hono();

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
