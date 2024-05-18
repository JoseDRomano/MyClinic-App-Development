import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        product: {type: String, required: true},
        quantity: {type: String, required: true},
        fullPrice:{type: String, required: true}, 
        authorized: {type: Boolean, required: true}
    }
);

export const Order = mongoose.model('Order', orderSchema);