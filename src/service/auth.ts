import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface"
import UserModel from "../models/users"
import { encrypt, verified } from "../utils/bcrypt.handle";
import { signToken } from "../utils/jwt.handles";

const registerNewUser=async({email,password,name,age}:User)=>{
 const checkIs = await UserModel.findOne({email})
 if(checkIs)return 'ALLREADY_USER';
  const passhash = await encrypt(password)
 const registernewUser = await UserModel.create({email,password:passhash,name,age})


 return registernewUser
}

const loginUser=async({email,password}:Auth)=>{
    const checkIs = await UserModel.findOne({email})
    if(!checkIs)return 'NOT_FOUND_USER';

    const passwordHash = checkIs.password
    const isCorrect = await verified(password,passwordHash);
    if(!isCorrect)return "PASSWORD_INCORRECT";

    const token = signToken(checkIs.email);
    const data ={
        token,
        user:checkIs
    }

    return data
}

export {loginUser,registerNewUser}