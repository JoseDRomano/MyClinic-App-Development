import mongoose from "mongoose";

const prescriptionSchema = mongoose.Schema(
    {
        patient: {type: String, required: true},
        doctor: {type: String, required: true},
        medicines: {type: Array, required: true},
        picked: {type: Boolean, required: true}   
    }
);

export const Prescription = mongoose.model('Prescription', prescriptionSchema);