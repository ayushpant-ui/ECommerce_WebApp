import pool from '../config/db.js'
import type {Contact} from '../types/contact.types.js'

async function ConctactRepo(user:Contact){
    
    const mysql = `INSERT INTO Contact
    (firstname,lastname,email,subject,message)
    values(?,?,?,?,?)`;

    const [result] = await pool.execute(mysql,[
        user.firstName,
        user.lastName,
        user.email,
        user.subject,
        user.message
    ])
    return result;
}

export default ConctactRepo ;