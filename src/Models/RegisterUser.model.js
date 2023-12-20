import mongoose, { Schema } from "mongoose";
const registerUserSchema = new Schema({
    Avatar:{
        type:String
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: String,
    Contact: String,
    Email: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true,
        unique:true
    },
    Password: {
        type: String,
        required: true
    }
})

export const registerUserModel = mongoose.model('registeredUser', registerUserSchema)
