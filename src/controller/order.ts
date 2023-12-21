import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle"
import { RequestExt } from "../interfaces/req.interface";

const Getitems=(req:RequestExt,res:Response) => {  
    try {
        res.json({data:'esto solo lo ve la gente con jwt',
        user:req.user
    })
    } catch (error) {
        handleHttp(res,"ERROR_GET_ITEMS_IN_ORDER",error)
    }
}

export {Getitems}