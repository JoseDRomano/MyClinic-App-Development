import mongoose from "mongoose";

const personSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        role: {type: String, required: true}
    }
);


export const Person = mongoose.model('Staff', personSchema);