import mongoose from "mongoose";

const equipmentSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        lastMaintenance: {type: String, required: true},
        availability: {type: Number, required: true}
    }
);

export const Equipment = mongoose.model('Equipment', equipmentSchema);