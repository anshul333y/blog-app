import { Hono } from "hono";
import loggedin from "../middleware/loggedin";
import getPrisma from "../lib/prismaFunction";
import { blogPostInput, blogPutInput } from "../lib/zod";

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
  try {
    const body = await c.req.json();
    const authorId = c.get("userId");
    const prisma = getPrisma(c.env.DATABASE_URL);

    const response = blogPostInput.safeParse(body);
    if (!response.success) return c.text("Invalid Input", 400);

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
  } catch (error) {
    return c.text("Internal Server Error", 500);
  }
});

blog.put("/", async (c) => {
  try {
    const body = await c.req.json();
    const prisma = getPrisma(c.env.DATABASE_URL);

    const response = blogPutInput.safeParse(body);
    if (!response.success) return c.text("Invalid Input", 400);

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
  } catch (error) {
    return c.text("Internal Server Error", 500);
  }
});

// TODO: add pagination
blog.get("/bulk", async (c) => {
  try {
    const prisma = getPrisma(c.env.DATABASE_URL);
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json(posts);
  } catch (error) {
    return c.text("Internal Server Error", 500);
  }
});

blog.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const prisma = getPrisma(c.env.DATABASE_URL);

    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json(post);
  } catch (error) {
    return c.text("Internal Server Error", 500);
  }
});

export default blog;
