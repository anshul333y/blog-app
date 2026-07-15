import { Hono } from "hono";

const auth = new Hono();

auth.post("/signup", (c) => {
  return c.text("Hello Hono!");
});

auth.post("/signin", (c) => {
  return c.text("Hello Hono!");
});

export default auth;
