import mongoose from "mongoose";

const examSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        staffId: {type: String, required: true},
        patientId: {type: String, required: true},
        equipmentIds: {type: Array, required: true},
        date: {type: String, required: true},
        time: {type: String, required: true},
        location: {type: String, required: true},
        extraInfo: {type: String, required: false}
    }
);

export const Exam = mongoose.model('Exam', examSchema);