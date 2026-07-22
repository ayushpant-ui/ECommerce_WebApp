import pool from '../config/db.js'
import type{ CreateUserDTO } from "../types/user.types.js";
export async function createUser (user: CreateUserDTO){

    const sql = `INSERT INTO users
    (first_name,last_name,email,password,phone)
    VALUES(?,?,?,?,?)
    `;

    const [result] = await pool.execute(sql, [
        user.firstName,
        user.lastName,
        user.email,
        user.password,
        user.phone
    ])
    return result ;
}

export async function findUserByEmail(email:string){

    const sql = `SELECT * from users where email=?`;
    const [rows] =await pool.execute(sql,[email]);
    return rows ;
}