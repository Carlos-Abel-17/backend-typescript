import ItemsModel from "../models/items"
import { Car } from "../interfaces/car.interfaces"

const insertCars = async (item:Car)=>{
  const resposeInsert= await ItemsModel.create(item)
  return resposeInsert;

}

const getCarsAll = async()=>{
  const resposeItems = await ItemsModel.find({})
  return resposeItems
}

const getCar = async(id:string) =>{
    const resposeItems = await ItemsModel.findOne({_id:id})
    return resposeItems
  }

const updateCar =async(id:string,data:Car)=>{
    const resposeItems = await ItemsModel.findOneAndUpdate(
        {_id:id},
        data,{
            new:true
        }
        
        )  
        return resposeItems
}

const deleteCar = async (id: string) => {
    const responseItems = await ItemsModel.deleteOne({ _id: id });
    return responseItems;
}


export {insertCars, getCarsAll,getCar,updateCar,deleteCar}