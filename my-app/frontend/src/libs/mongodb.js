import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://myclinic:ZdMWJigTB6qFl9IX@myclinic.iuonl8t.mongodb.net/");
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;
