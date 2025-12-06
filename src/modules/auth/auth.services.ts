import { pool } from "../../db/dbinit"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const loginUserIntoDb = async(email:string, password:string)=>{
const loginUser = await pool.query(`
    SELECT * FROM users WHERE email=$1
    `,[email])

        if(loginUser.rows.length===0){
        throw new Error("user not found")
    }
    const matchPassword = await bcrypt.compare(password, loginUser.rows[0].password)

    if(!matchPassword){
        throw new Error("Invalid credencials")
    }

    //jwt
    const jwtPayLoad = {
        id:loginUser.rows[0].id,
        name:loginUser.rows[0].name,
        email:loginUser.rows[0].email
    }

    const secret = "muradbabo"
    const token = jwt.sign(jwtPayLoad, secret,{expiresIn:"3d"})
    return {token, loginUser: loginUser.rows[0]}
 
}

export const authServices = {
    loginUserIntoDb
}