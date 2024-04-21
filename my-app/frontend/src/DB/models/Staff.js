import mongoose, {Schema} from "mongoose";

const staffSchema = new Schema(
    {
        name: {type: String, required: true},
        role: {type: String, required: true},
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

const Staff = mongoose.models?.Staff || mongoose.model("Staff", staffSchema);

export default Staff;