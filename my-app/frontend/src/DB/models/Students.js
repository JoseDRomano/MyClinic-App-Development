import mongoose, {Schema} from "mongoose";

const studentSchema = new Schema(
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
    },
    {
        timestamps: true,
    }
);

const Student = mongoose.models?.Patient || mongoose.model("Patient", studentSchema);

export default Student;
