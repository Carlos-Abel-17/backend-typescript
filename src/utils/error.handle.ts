import { Response } from "express";

const handleHttp=(res:Response,error:string,errorRam?:any)=>{
  console.log(errorRam)
  res.status(500);
  res.send({error})
}

export {handleHttp}