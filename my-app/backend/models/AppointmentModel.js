import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        staffId: {type: String, required: true},
        patientId: {type: String, required: true},
        date: {type: String, required: true},
        time: {type: String, required: true},
        location: {type: String, required: true},
        extraInfo: {type: String, required: false}
    }
);

export const Appointment = mongoose.model('Appointment', appointmentSchema);