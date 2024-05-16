import mongoose from "mongoose";

const checkInSchema = mongoose.Schema(
    {
        patientId: {type: String, required: true},
        staffIds: {type: Array, required: true},
        date: {type: String, required: true}, 
        time: {type: String, required: true}, 
        symptoms: {type: String, required: true},
        priority: {type: String, required: true},
        state: {type: String, required: true},
        extraInfo: {type: String, required: false}
    }
);

export const CheckIn = mongoose.model('CheckIn', checkInSchema);