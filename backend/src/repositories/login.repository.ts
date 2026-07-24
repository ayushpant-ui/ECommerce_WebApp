import type {LoginDTO} from '../types/login.types.js'
import pool from '../config/db.js'

export async function findUserByEmail (
    email:string
){

    const sql = `SELECT * from users WHERE email=?`;

    const [rows]:any = pool.execute(
        sql,[email]);
    
        return rows[0];
}
