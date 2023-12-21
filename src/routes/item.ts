import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controller/items";
import { logMiddleware } from "../middleware/log";

const router = Router()

router.get('/',logMiddleware,getItems)
router.get('/:id',getItem)
router.post('/',postItem)
router.put('/:id',updateItem)
router.delete('/:id',deleteItem)


export {router}