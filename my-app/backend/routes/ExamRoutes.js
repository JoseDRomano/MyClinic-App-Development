
import express from 'express';
import { Exam } from '../models/ExamModel.js';

const router = express.Router();

router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params; 

        const exam = await Exam.findById(id); 

        return response.status(200).json(exam);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (request, response) => {
    try {
        const newExam = {
            name: request.body.name,
            staffId: request.body.staffId,
            patientId: request.body.patientId,
            equipmentIds: request.body.equipmentIds,
            date: request.body.date,
            time: request.body.time,
            location: request.body.location,
            extraInfo: request.body.extraInfo
        }

        const exam = await Exam.create(newExam);
        return response.status(200).send(exam);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.put('/:id', async (request, response) => {
    try {
        const newExam = {
            name: request.body.name,
            staffId: request.body.staffId,
            patientId: request.body.patientId,
            equipmentIds: request.body.equipmentIds,
            date: request.body.date,
            time: request.body.time,
            location: request.body.location,
            extraInfo: request.body.extraInfo
        }
        
        const exam = await Exam.findByIdAndUpdate(request.params.id, newExam);
        return response.status(200).send(newExam);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const exam = await Exam.findByIdAndDelete(request.params.id);
        return response.status(200).send(exam);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

export default router;