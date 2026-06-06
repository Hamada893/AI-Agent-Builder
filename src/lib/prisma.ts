// import "server-only"; //comment this if you want to use the prisma client in the client

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

function isValidPrismaClient(
  client: PrismaClient | undefined,
): client is PrismaClient {
  return Boolean(client && typeof client.user?.findMany === "function");
}

const cached = globalForPrisma.prisma;
const prisma = isValidPrismaClient(cached)
  ? cached
  : createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;