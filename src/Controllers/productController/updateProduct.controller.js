import productModel from "../../Models/Product.model.js";

const updateProduct = async (req, res) => {
    try {
        const { id, image, title, description, category, price } = req.body
        await productModel.updateOne({ id }, {
            $set: {
                image,
                title,
                description,
                category,
                price
            }
        })
        res.json({
            message: 'Product updated',
            status: 200,
        })
    } catch (error) {
        console.error(error);
    }
}
export default updateProduct