import mongoose from "mongoose";

const checkInSchema = mongoose.Schema(
    {
        activityId: {type: String, required: true}, // appointmentId or examId
        type: {type: String, required: true}, // appointment or exam
        date: {type: String, required: true},
        time: {type: String, required: true}
    }
);

export const CheckIn = mongoose.model('CheckIn', checkInSchema);