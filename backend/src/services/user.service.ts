import bcrypt from "bcrypt";
import { createUserRepo } from "../repositories/user.repository.js";
import type{ CreateUserDTO } from "../types/user.types.js";

export async function CreateUser(user: CreateUserDTO) {
  console.log(user);
  const hashedPassword = await bcrypt.hash(
    user.password,
    10
  );

  const result = await createUserRepo({
    ...user,
    password: hashedPassword,
  });

  return result;
}
