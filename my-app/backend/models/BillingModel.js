import mongoose from "mongoose";

const billingSchema = mongoose.Schema(
    {
        patient: {type: String, required: true},
        services: {type: Array, required: true},
        price:{type: String, required: true}, 
        payed: {type: Boolean, required: true}
    }
);

export const Billing = mongoose.model('Bill', billingSchema);