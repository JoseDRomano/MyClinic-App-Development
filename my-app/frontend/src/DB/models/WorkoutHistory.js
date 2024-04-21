import mongoose, {Schema} from "mongoose";
/*
{
    "student": "Paulo",
    "workoutPlan": "Leg Day",
    "location": "123",
    "submit": null
}
 */
const workoutHistorySchema = new Schema(
    {
        equipment: String,
        lastMaintenance: String,
        availability: String
    },
    {
        timestamps: true,
    }
);

const WorkoutHistory = mongoose.models?.Equipments || mongoose.model("Equipments", workoutHistorySchema);

export default WorkoutHistory;
