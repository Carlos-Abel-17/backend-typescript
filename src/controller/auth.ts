import { Request, Response } from "express"
import { registerNewUser,loginUser } from "../service/auth"


const registerCtrl = async ({body}:Request,res:Response)=>{
    try {        
        const reponseUser=await registerNewUser(body)
        res.status(200).json(reponseUser)
    } catch (error) {
        console.log(error)
    }
}

const loginCtrl = async ({body}:Request,res:Response)=>{
    try {   
        const {email,password} =body 
  
        const reponseUser=await loginUser({email,password})
        if (reponseUser === "PASSWORD_INCORRECT") {
            res.status(403);
            res.json(reponseUser)
        }else{

            res.status(200).json(reponseUser)
        }
    } catch (error) {
        console.log(error)
    }
}

export {registerCtrl, loginCtrl}