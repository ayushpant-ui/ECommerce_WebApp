import api from "@/shared/lib/axios";
import { RegisterSchema } from "../schemas/auth.schema";

export async function registerUser(data: RegisterSchema) {
  const response = await api.post("/users/register", data);

  return response.data;
} 