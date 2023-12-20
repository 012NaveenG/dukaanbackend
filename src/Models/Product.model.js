import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    image: {
        URL: {
            type: String,
            required: true
        }
    },
    title: {
        type: String,
        required: true
    },
    price: {
        MRP: {
            type: Number,
            required: true,
            default: 0
        },
        cost: {
            type: Number,
            required: true,
            default: 0
        },
        discount: {
            type: Number,
            required: true,
            default: 0
        }
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: {
            values: ['Dal', 'Rice', 'Eadible Oil', 'Biscuit', 'Namkeen', 'Dry Fruits', 'Spices']
        }
    }
}, { timestamps: true });

const productModel = mongoose.model('Product', productSchema);
export default productModel;
