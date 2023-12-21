import { Request, Response, response } from "express"
import { handleHttp } from "../utils/error.handle"
import { deleteCar, getCar, getCarsAll, insertCars, updateCar } from "../service/items"

const getItems= async (req:Request,res:Response)=>{
 try {
    const responseItems = await getCarsAll()
    
    res.status(200).json(responseItems)
 } catch (error) {
   handleHttp(res,'ERROR_GET_ITEMS')
 }
}

const getItem=async ({params}:Request,res:Response)=>{
 try {
  const {id} = params;
    const responseCar = await getCar(id)
    const Data = responseCar ? responseCar: 'NOT FOUND'
    res.status(200).json(Data)
 } catch (error) {
   handleHttp(res,'ERROR_GET_ITEM')
 }   
}

const updateItem=async({params,body}:Request,res:Response)=>{
  try {
    const {id}=params;
    const responseItems = await updateCar(id,body)
    res.status(200).json(responseItems)
  } catch (error) {
   handleHttp(res,'ERROR_UPDATE_ITEMS')
  }  
}

const postItem= async ({body}:Request,res:Response)=>{
 try {
  const resposeInsert = await insertCars(body);
  res.send(resposeInsert)
 } catch (error) {
   handleHttp(res,'ERROR_POST_ITEMS',error)
 }   
}

const deleteItem=async ({params}:Request,res:Response)=>{
  try {
    const {id}=params;
    const reponse = await deleteCar(id)
    res.status(200).json(reponse)
  } catch (error) {
   handleHttp(res,'ERROR_DELETE_ITEMS')
  }  
}

export {getItem,getItems,updateItem,postItem,deleteItem}