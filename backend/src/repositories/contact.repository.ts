import pool from '../config/db.js'

async function ConctactRepo(user:any){
    const mysql = `INSERT INTO Contact
    (firstname,lastname,email,subject,message)
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