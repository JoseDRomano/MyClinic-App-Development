import mongoose, {Schema} from "mongoose";
/* {
      "name": "3/4 Sit-Up",
      "force": "pull",
      "level": "beginner",
      "mechanic": "compound",
      "equipment": "body only",
      "primaryMuscles": [
        "abdominals"
      ],
      "secondaryMuscles": [],
      "instructions": [
        "Lie down on the floor and secure your feet. Your legs should be bent at the knees.",
        "Place your hands behind or to the side of your head. You will begin with your back on the ground. This will be your starting position.",
        "Flex your hips and spine to raise your torso toward your knees.",
        "At the top of the contraction your torso should be perpendicular to the ground. Reverse the motion, going only Â¾ of the way down.",
        "Repeat for the recommended amount of repetitions."
      ],
      "category": "strength",
      "id": "1",
      "photo": [
        "https://raw.githubusercontent.com/wrkout/exercises.json/master/exercises/3_4_Sit-Up/images/0.jpg",
        "https://raw.githubusercontent.com/wrkout/exercises.json/master/exercises/3_4_Sit-Up/images/1.jpg"
      ]
    }, */
const exercisesSchema = new Schema(
    {
        patient_name: {type: String, required: true},
        citizenId: {type: String, required: true},
        healthId: {type: String, required: true},
        sex: {type: String, required: true},
        gender: {type: String, required: false},
        birthDate: {type: String, required: true},
        address: {type: String, required: true},
        entry_hour:{type: String, required: true},
        symptoms: {type: String, required: true},
        priority: {type: String, required: true},
        state: {type: String, required: true}
    },
    {
        timestamps: true,
    }
);

const Exercises = mongoose.models?.CheckIns || mongoose.model("CheckIns", exercisesSchema);

export default Exercises;
