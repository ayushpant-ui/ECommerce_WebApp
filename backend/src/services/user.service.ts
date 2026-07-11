import pool from '../config/db.ts'
import { CreateUserDTO } from "../types/user.types.js";
export async function createUser (user: CreateUserDTO){

    const sql = `INSERT INTO users
    (first_name,last_name,email,password,phone)
    VALUES(?,?,?,?,?)
    `

}