import { Request, Response } from "express";
import { authRouter } from "./auth.route";
import { authServices } from "./auth.services";



const createLogn =  async(req:Request, res:Response)=>{

    try{

const result = await authServices.loginUserIntoDb(req.body.email, req.body.password)
  return res.status(200).json({
    success:true,
    message:"user created",
    data:result
  })
    }catch(err:any){
    return res.status(200).json({
    success:true,
    message:"login created",
    data:err.message
  })
    }
 

}

export const authController = {
    createLogn
}