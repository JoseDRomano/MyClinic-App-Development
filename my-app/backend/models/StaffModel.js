import mongoose from "mongoose";

const staffSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        joinDate: {type: String, required: true},
        job: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        phoneNumber: {type: String, required: true},
        citizenId: {type: String, required: true},
        internalId: {type: String, required: false},
        sex: {type: String, required: false},
        gender: {type: String, required: false},
        birthDate: {type: String, required: true},
        address: {type: String, required: true}
    }
);

export const Staff = mongoose.model('Staff', staffSchema);