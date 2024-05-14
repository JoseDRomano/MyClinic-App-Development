
import express from 'express';
import { FeedbackAnswers } from '../models/FeedbackAnswersModel.js';

const router = express.Router();

router.get('/', async (request, response) => {
    try {
        const feedbackAnswers = await FeedbackAnswers.find(); 
        return response.status(200).json(feedbackAnswers);
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params; 

        const feedbackAnswers = await FeedbackAnswers.findById(id); 

        return response.status(200).json(feedbackAnswers);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (request, response) => {
    try {
        const newFeedbackAnswers = {
            questionsId: request.body.questionsId,
            patientId: request.body.patientId,
            date: request.body.date,
            time: request.body.time,
            answers: request.body.answers,
            extraInfo: request.body.extraInfo
        }

        const feedbackAnswers = await FeedbackAnswers.create(newFeedbackAnswers);
        return response.status(200).send(feedbackAnswers);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.put('/:id', async (request, response) => {
    try {
        const newFeedbackAnswers = {
            questionsId: request.body.questionsId,
            patientId: request.body.patientId,
            date: request.body.date,
            time: request.body.time,
            answers: request.body.answers,
            extraInfo: request.body.extraInfo
        }
        
        const feedbackAnswers = await FeedbackAnswers.findByIdAndUpdate(request.params.id, newFeedbackAnswers);
        return response.status(200).send(newFeedbackAnswers);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const feedbackAnswers = await FeedbackAnswers.findByIdAndDelete(request.params.id);
        return response.status(200).send(feedbackAnswers);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

export default router;