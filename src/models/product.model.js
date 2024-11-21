import mongoose, {Schema} from "mongoose";
import { Category } from "./category.model";

const productSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: Category 
    },
    discount: {
        type: Number,
        deafult: 0
    },
    isNew: {
        type: Boolean ,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String, 
        required: true,
        trim: true
    },
    price: {
        type: Number, 
        required: true,
        min: 0
    },
    stock: {
        type: Number,
        required: true, 
        min: 0
    }, 
    images: {
        type: [String]
    }
}, {timestamps: true});

export const Product = mongoose.model("Product", productSchema)