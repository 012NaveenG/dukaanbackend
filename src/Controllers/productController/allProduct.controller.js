import productModel from "../../Models/Product.model.js";

const allProduct = async (req, res) => {
    try {
        const allProducts = await productModel.find({})
        res.json({
            message: 'Your Products are listed as given..',
            status: 200,
            allProducts
        })
    } catch (error) {
        console.error(error);
    }
}

export default allProduct