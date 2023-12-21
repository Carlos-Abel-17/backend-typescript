import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { registerUpload } from "../service/storage"
import { RequestExt } from "../interfaces/req.interface"
import { Storage } from "../interfaces/storage"


const getFile=async(req:RequestExt,res:Response)=>{
  try {
    const {user,file}=req
    const dataToRegister:Storage={
        fileName:`${file?.filename}`,
        idUser:`${user?.id}`,
        path:`${file?.path}`
    }
    const response =await registerUpload(dataToRegister)
    res.json(response)
  } catch (error) {
    handleHttp(res,"ERROR_GETFILE")
  }
}

export {getFile}