import { Storage } from "../interfaces/storage"
import storageModel from "../models/storage"


const registerUpload =async ({fileName,idUser,path}:Storage) => {
    const register=await storageModel.create({fileName,idUser,path})
    return register
}

export {registerUpload}