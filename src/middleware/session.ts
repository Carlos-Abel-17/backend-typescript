import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handles";
import { RequestExt } from "../interfaces/req.interface";


const checkJWT =(req:RequestExt,res:Response,next:NextFunction)=>{
 try {
    const jwtByUser=req.headers.authorization || '';
    const jwt = jwtByUser.split(' ').pop()
    const veri = verifyToken(`${jwt}`) as {id:string}
    if(!veri){
     res.status(401);
     res.send("NO_TIENES_UN_JWT_VALIDO")
    }else{
       req.user = veri;
        next()
    }
 } catch (error) {
    res.status(400)
    res.send('SESSION_BAD')
 }
}

export {checkJWT}