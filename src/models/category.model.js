// import mongoose, {Schema} from "mongoose";

// const categorySchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// }, {timestamps: true});

// export const User = mongoose.model("Category", categorySchema)


import mongoose, {Schema} from "mongoose";

const categorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, {timestamps: true});

export const Category = mongoose.model("Category", categorySchema)