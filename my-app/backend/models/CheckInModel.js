import mongoose from "mongoose";

const checkInSchema = mongoose.Schema(
    {

        patient_name: {type: String, required: true},
        citizenId: {type: String, required: true},
        healthId: {type: String, required: true},
        sex: {type: String, required: true},
        gender: {type: String, required: false},
        birthDate: {type: String, required: true},
        address: {type: String, required: true},
        entry_hour:{type: String, required: true},
        symptoms: {type: String, required: true},
        priority: {type: String, required: true},
        state: {type: String, required: true}


    }
);

export const CheckIn = mongoose.model('CheckIn', checkInSchema);