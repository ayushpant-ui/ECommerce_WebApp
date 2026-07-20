import pool from '../config/db.js'
import type {Contact} from '../types/contact.types.js'

async function ConctactRepo(user:Contact){
    
    const mysql = `INSERT INTO contacts
    (first_name,last_name,email,subject,message)
    values(?,?,?,?,?)`;

    const [result] = await pool.execute(mysql,[
        user.firstname,
        user.lastname,
        user.email,
        user.subject,
        user.message
    ])
    return result;
}

export default ConctactRepo ;