import { Router } from "express";
import  multerMiddleware  from "../middleware/file";
import { getFile } from "../controller/upload";
import { checkJWT } from "../middleware/session";

const router = Router();

router.post('/',checkJWT,multerMiddleware.single('MyFile'),getFile)

export {router}