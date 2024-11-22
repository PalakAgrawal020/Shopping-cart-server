import mongoose, {Schema} from "mongoose";
import { User } from "./user.model";
import { Product } from "./product.model";

const wishlistSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: Product, 
                required: true
            }, 
            name: {
                type: String, 
                required: true 
            },
            price: {
                type: Number, 
                required: true, 
            },
            quantity: {
                type: Number,
                required: true, 
                min: 1, 
            },
        },
    ]
}, {timestamps: true});


export const Wishlist = mongoose.model("Wishlist", wishlistSchema)