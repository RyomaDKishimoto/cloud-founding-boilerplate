import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function handler() {
  try {
    const amount = await prisma.donate.findFirst({ where: { id: 1 } });
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(amount),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
}
