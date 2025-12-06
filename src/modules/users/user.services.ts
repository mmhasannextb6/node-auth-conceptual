import { Response ,Request} from "express";
import { pool } from "../../db/dbinit";
import bcrypt from 'bcryptjs'
const createuserIntoDb = async(paload:Record<string, unknown>) =>{
       const {name, email, password, age}= paload;

    const hashpassword = await bcrypt.hash(password as string, 12)

    // console.log(name, email, password,age)
    const result =  await pool.query(`INSERT INTO users(name, email, password, age) VALUES ($1,$2,$3,$4) RETURNING *`, [name, email,hashpassword, age ])

    delete result.rows[0].password
    return result
}

export const userServices = {
    createuserIntoDb
}