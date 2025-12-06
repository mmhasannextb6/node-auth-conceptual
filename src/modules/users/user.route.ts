import { Request, Response, Router } from "express";
import { pool } from "../../db/dbinit";
import { userControllers } from "./user.controller";
import verify from "../../middleWare/veryfi";


const router = Router()

router.post("/", verify, userControllers.createUser)





export const userRouter = router