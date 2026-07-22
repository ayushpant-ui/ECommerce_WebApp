import pool from '../config/db.js'
import type{ CreateUserDTO } from "../types/user.types.js";
export async function createUserRepo (user: CreateUserDTO){

    const sql = `INSERT INTO users
    (first_name,last_name,email,password)
    VALUES(?,?,?,?)
    `;

    const [result] = await pool.execute(sql, [
        user.firstName,
        user.lastName,
        user.email,
        user.password,
    ])
    
    return result ;
}

