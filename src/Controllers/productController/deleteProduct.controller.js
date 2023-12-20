
import productModel from "../../Models/Product.model.js"

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.body
        await productModel.deleteOne({ id })
        res.json({
            message: 'Product Deleted Successfully',
            status: 200,

        })
    } catch (error) {
        console.error(error);
    }

}
export default deleteProduct