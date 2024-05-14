
import express from 'express';
import { FeedbackQuestions } from '../models/FeedbackQuestionsModel.js';

const router = express.Router();

router.get('/', async (request, response) => {
    try {
        const feedbackQuestions = await FeedbackQuestions.find(); 
        return response.status(200).json(feedbackQuestions);
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params; 

        const feedbackQuestions = await FeedbackQuestions.findById(id); 

        return response.status(200).json(feedbackQuestions);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (request, response) => {
    try {
        const newFeedbackQuestions = {
            name: request.body.name,
            date: request.body.date,
            time: request.body.time,
            questions: request.body.questions,
            extraInfo: request.body.extraInfo
        }

        const feedbackQuestions = await FeedbackQuestions.create(newFeedbackQuestions);
        return response.status(200).send(feedbackQuestions);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.put('/:id', async (request, response) => {
    try {
        const newFeedbackQuestions = {
            name: request.body.name,
            date: request.body.date,
            time: request.body.time,
            questions: request.body.questions,
            extraInfo: request.body.extraInfo
        }
        
        const feedbackQuestions = await FeedbackQuestions.findByIdAndUpdate(request.params.id, newFeedbackQuestions);
        return response.status(200).send(newFeedbackQuestions);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const feedbackQuestions = await FeedbackQuestions.findByIdAndDelete(request.params.id);
        return response.status(200).send(feedbackQuestions);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

export default router;