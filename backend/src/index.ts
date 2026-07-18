import { Hono } from "hono";
import auth from "./routes/auth";
import blog from "./routes/blog";
import { cors } from "hono/cors";

const app = new Hono().basePath("/api/v1");

app.use("/*", cors());

app.route("/auth", auth);

app.route("/blog", blog);

export default app;
