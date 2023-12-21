import ItemsModel from "../models/items"

const GetOrder =async () => {
    const responseItems=await ItemsModel.find({})
    return responseItems
}

export {GetOrder}