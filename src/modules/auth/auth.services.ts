import { pool } from "../../db/dbinit"

const loginUserIntoDb = async(email:string, password:string)=>{
const loginUser = await pool.query(``)
}


export const authServices = {
    loginUserIntoDb
}