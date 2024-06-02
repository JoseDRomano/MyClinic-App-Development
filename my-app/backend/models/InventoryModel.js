import mongoose from "mongoose";

const inventorySchema = mongoose.Schema(
    {
        description: {type: String, required: true},
        quantity: {type: String, required: true},
        preferableAmount:{type: String, required: true},
        price:{type: String, required: true}
    }
);

export const Inventory = mongoose.model('Inventory', inventorySchema);