import mongoose, {Schema} from "mongoose";
import { User } from "./user.model";
import {Order} from "./order.model"

const paymentSchema = new Schema(
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true,
      },
      order: {
        type: Schema.Types.ObjectId,
        ref: Order,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      method: {
        type: String,
        enum: ["credit_card", "debit_card", "paypal", "net_banking", "cash_on_delivery"],
        required: true,
      },
      status: {
        type: String,
        enum: ["pending", "successful", "failed"],
        default: "pending",
      },
      transactionId: {
        type: String, 
        required: function () {
          return this.method !== "cash_on_delivery";
        },
      },
    },
    { timestamps: true }
  );
  
  export const Payment = mongoose.model("Payment", paymentSchema);
  