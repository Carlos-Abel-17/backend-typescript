import { Router } from "express";
import { loginCtrl,registerCtrl } from "../controller/auth";


const router = Router()
//! http://localhost:3001/auth/register [POST]
router.post('/register',registerCtrl);
router.post('/login',loginCtrl);



export {router}