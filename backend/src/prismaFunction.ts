import { PrismaClient } from "./generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const getPrisma = (database_url: string) => {
  const prisma = new PrismaClient({
    accelerateUrl: database_url,
  }).$extends(withAccelerate());
  return prisma;
};

export default getPrisma;
