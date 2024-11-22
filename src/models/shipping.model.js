import mongoose, {Schema} from "mongoose";
import { User } from "./user.model";
import { Order } from "./order.model";

const shippingSchema = new Schema(
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
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ["pending", "shipped", "in_transit", "delivered", "returned"],
        default: "pending",
      },
      trackingNumber: {
        type: String,
        required: function () {
          return this.status !== "pending";
        },
      },
    },
    { timestamps: true }
  );
  
  export const Shipping = mongoose.model("Shipping", shippingSchema);
  