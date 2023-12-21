import { Schema, model, Model} from "mongoose";
import { User } from "../interfaces/user.interface";


const UserShema = new Schema<User>(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
         type:String,
         required:true
        },
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            default:`hola soy un new user`

        },
        age:{
            type:Number,
            required:true
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const UserModel = model('users',UserShema);
export default UserModel