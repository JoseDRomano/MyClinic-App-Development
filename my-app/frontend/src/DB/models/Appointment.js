import mongoose, {Schema} from "mongoose";

const appointmentsSchema = new Schema(
    {
        name: {type: String, required: true},
        staffId: {type: String, required: true},
        patientId: {type: String, required: true},
        date: {type: String, required: true},
        time: {type: String, required: true},
        location: {type: String, required: true},
        extraInfo: {type: String, required: false}
    },
    {
        timestamps: true,
    }
);

const Appointment = mongoose.models?.Appointment || mongoose.model("Appointment", appointmentsSchema);

export default Appointment;
