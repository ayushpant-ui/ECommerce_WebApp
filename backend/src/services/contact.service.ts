import ConctactRepo from "../repositories/contact.repository.js";
import type { Contact } from "../types/contact.types.js";

export async function CreateContactMessage (data : Contact){
const result = await ConctactRepo(data);

return result;
}