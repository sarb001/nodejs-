import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        unique : true,
        required : true
    }
})

export const UserModel = mongoose.model('User',UserSchema);