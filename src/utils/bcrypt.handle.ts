import {hash,compare} from 'bcryptjs'

const encrypt = async(pass:string)=>{
  const passwordHash=await hash(pass,8)
  return passwordHash
};

const verified =async(pass:string,passhash:string)=>{
  const isCorrect = await compare(pass,passhash)
  return isCorrect;
};

export{encrypt,verified};