import pool from '../config/db.ts'
import { CreateUserDTO } from "../types/user.types.js";
export async function createUser (user: CreateUserDTO){

    const sql = `INSERT INTO users
    (first_name,last_name,email,password,phone)
    VALUES(?,?,?,?,?)
    `;

    const [result] = pool.execute(sql, [
        user.firstname,
        user.lastname,
        user.email,
        user.password,
        user.phone
    ])
    return result ;
}

export async function findUserByEmail(email:string){

    const sql = `SELECT * from users where email=?`;
    const [rows] = pool.execute(sql,[email]);
    return rows ;
}