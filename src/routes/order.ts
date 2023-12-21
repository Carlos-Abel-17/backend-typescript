import { Router } from "express";
import { Getitems } from "../controller/order";
import { checkJWT } from "../middleware/session";

//!esta ruta solo van a poder acceder las persona que tenga una session activa  que tenga un jwt valido
const router =Router()
router.get('/',checkJWT,Getitems)

export {router};