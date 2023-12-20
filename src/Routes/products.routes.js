import { Router } from "express";
import addProduct from "../Controllers/productController/addProduct.controller.js";
import deleteProduct from "../Controllers/productController/deleteProduct.controller.js";
import updateProduct from "../Controllers/productController/updateProduct.controller.js";
import allProduct from "../Controllers/productController/allProduct.controller.js";
const productRouter = Router()

productRouter.route('/addproduct').post(addProduct)

productRouter.route('/deleteproduct').delete(deleteProduct)

productRouter.route('/updateproduct').get(updateProduct)

productRouter.route('/allproduct').get(allProduct)
export default productRouter