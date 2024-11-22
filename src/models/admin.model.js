import mongoose, {Schema} from "mongoose";

const adminSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      role: {
        type: String,
        enum: ["superadmin", "admin", "moderator"],
        default: "admin",
      },
      permissions: {
        type: [String],
        default: ["manage_orders", "manage_users", "manage_products"],
      },
      isActive: {
        type: Boolean,
        default: true,
      },
    },
    { timestamps: true }
  );
  
  export const Admin = mongoose.model("Admin", adminSchema);
  