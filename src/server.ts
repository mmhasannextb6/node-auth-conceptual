import express, { Request, Response } from 'express'
import {Pool} from 'pg'
import { userRouter } from './modules/users/user.route'
import { authRouter } from './modules/auth/auth.route'
const app = express()



app.use(express.json())
app.get("/", (req:Request, res:Response)=>{
    res.send("hello i am runnig")
})




app.use("/api/v1/users", userRouter)
app.use("/api/v1/auth", authRouter)

app.listen(5000, ()=>{
    console.log('i ma in port 5000')
})



//psql 'postgresql://neondb_owner:npg_RGpN2B5hWasc@ep-holy-wildflower-ahl1kwo6-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'