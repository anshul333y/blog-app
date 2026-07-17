import { Hono } from "hono";
import loggedin from "../middleware/loggedin";
import getPrisma from "../lib/prismaFunction";

const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blog.use("/*", loggedin);

blog.post("/", async (c) => {
  const body = await c.req.json();
  const authorId = c.get("userId");
  const prisma = getPrisma(c.env.DATABASE_URL);

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: authorId,
    },
  });

  return c.json({
    id: post.id,
  });
});

blog.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = getPrisma(c.env.DATABASE_URL);

  const post = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.json({
    id: post.id,
  });
});

// TODO: add pagination
blog.get("/bulk", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const posts = await prisma.post.findMany();

  return c.json(posts);
});

blog.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = getPrisma(c.env.DATABASE_URL);

  const post = await prisma.post.findFirst({
    where: {
      id: id,
    },
  });

  return c.json(post);
});

export default blog;
