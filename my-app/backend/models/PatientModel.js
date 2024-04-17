import mongoose from "mongoose";

const patientSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        phoneNumber: {type: String, required: true},
        citizenId: {type: String, required: true},
        healthId: {type: String, required: true},
        sex: {type: String, required: true},
        gender: {type: String, required: true},
        birthDate: {type: String, required: true},
        address: {type: String, required: true}
    }
);

export const Patient = mongoose.model('Patient', patientSchema);