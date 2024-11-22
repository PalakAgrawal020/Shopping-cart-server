import mongoose, { Schema } from "mongoose";
import { User } from "./user.model";
import { Cart } from "./cart.model";
import {Payment} from "./payment.model";
import {Shipping} from "./shipping.model";
  
const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    cart: {
      type: Schema.Types.ObjectId,
      ref: Cart,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    payment: {
      type: Schema.Types.ObjectId,
      ref: Payment,
      required: true,
    },
    shippingAddress: {
      type: Schema.Types.ObjectId,
      ref: Shipping,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
