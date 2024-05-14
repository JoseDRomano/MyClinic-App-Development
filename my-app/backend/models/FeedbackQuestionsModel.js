import mongoose from "mongoose";

const FeedbackQuestionsSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        date: {type: String, required: true},
        time: {type: String, required: true},
        questions: {type: Array, required: true},
        extraInfo: {type: String, required: false}
    }
);

export const FeedbackQuestions = mongoose.model('FeedbackQuestions', FeedbackQuestionsSchema);