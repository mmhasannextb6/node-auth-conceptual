import { Request, Response, Router } from "express";
import { pool } from "../../db/dbinit";
import { userControllers } from "./user.controller";
import verify from "../../middleWare/veryfi";
import auth from "../../middleWare/auth";


const router = Router()

router.post("/", userControllers.createUser)
router.get("/", auth(), userControllers.getUser)





export const userRouter = router