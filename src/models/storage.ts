import { Schema, model, Model} from "mongoose";
import { Storage } from "../interfaces/storage";


const storageShema = new Schema<Storage>(
    {
        fileName:{
         type:String
        },
        path:{
            type:String
        },
        idUser:{
            type:String
        }
        
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const storageModel = model('storage',storageShema);
export default storageModel