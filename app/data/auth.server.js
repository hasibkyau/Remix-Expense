import { prisma } from "./database.server";
import pkg from "bcryptjs";
const { hash } = pkg;

export async function signup(authData) {
  const { email, password } = authData;
  const existingUser = await prisma.user.findFirst({ where: { email } });

  if (existingUser) {
    const error = new Error(
      "A user with the provided email adress exists already."
    );
    error.status = 422;
    throw error;
  }

  const passwordHash = await hash(password, 12);

  await prisma.user.create({ data: { email: email, password: passwordHash } });
}
