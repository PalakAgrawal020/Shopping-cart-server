import mongoose, {Schema} from "mongoose";
import { Product } from "./product.model";

const reviewSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId, 
        ref: Product
    },
    description: {
        type: String,
    }
})

export const Review = mongoose.model("Review", reviewSchema)