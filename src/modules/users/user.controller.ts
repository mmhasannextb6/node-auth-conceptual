import { Request, Response } from "express";
import { pool } from "../../db/dbinit";
import { userServices } from "./user.services";


const createUser =  async(req:Request, res:Response)=>{

    try{
    const result =   await userServices.createuserIntoDb(req.body)

  return res.status(200).json({
    success:true,
    message:"user created",
    data:result.rows[0]
  })
    }catch(err:any){
    return res.status(200).json({
    success:true,
    message:"user created",
    data:err.message
  })
    }
 

}

export const userControllers = {
    createUser
}