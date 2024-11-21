import mongoose, {Schema} from "mongoose";
import { User } from "./user.model";
import { Product } from "./product.model";

const cartSchema = new Schema({
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
            subtotal: {
                type: Number, 
                required: true, 
                default: function () {
                    return this.quantity * this.price;
                },
            },
        },
    ],
    total : {
        type: Number,
        required: true 
    }
}, {timestamps: true});

cartSchema.pre("save", function(next) {
    this.total = this.products.reduce((sum, product) => sum + product.subtotal, 0);
    next();
});

export const Cart = mongoose.model("Cart", cartSchema)