import mongoose from "mongoose";

const FeedbackAnswersSchema = mongoose.Schema(
    {
        questionsId: {type: String, required: true},
        patientId: {type: String, required: true},
        date: {type: String, required: true},
        time: {type: String, required: true},
        answers: {type: Array, required: true},
        extraInfo: {type: String, required: false}
    }
);

export const FeedbackAnswers = mongoose.model('FeedbackAnswers', FeedbackAnswersSchema);