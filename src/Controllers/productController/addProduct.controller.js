import productModel from "../../Models/Product.model.js"
import { v2 as cloudinary } from 'cloudinary';
import Dotenv from "dotenv";
Dotenv.config('../.env')

cloudinary.config({
   cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
   api_key:`${process.env.CLOUDINARY_API_KEY}`,
   api_secret: `${process.env.CLOUDINARY_API_SECRET}`
});



const addProduct = async (req, res) => {
   try {
      const { productId, title, mrp, cost, discount, category, image, description } = req.body
      const { tempFilePath } = req.files.file
  

      await cloudinary.uploader.upload(tempFilePath, async (err, result) => {

         await productModel.create({
            id: productId,
            image: { URL: result.url },
            title: title,
            price: {
               MRP: mrp,
               cost: cost,
               discount: discount
            },
            description: description,
            category: category
         })
         res.json({
            message: 'Product added',
            status: 200,
         })
      })

   } catch (error) {
      console.error(error);
   }
}

export default addProduct