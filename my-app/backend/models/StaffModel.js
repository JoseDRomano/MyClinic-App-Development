import mongoose from "mongoose";

const staffSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        role: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        phoneNumber: {type: String, required: true}
    }
);

export const Staff = mongoose.model('Staff', staffSchema);