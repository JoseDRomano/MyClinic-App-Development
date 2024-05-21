
import express from 'express';
import { Prescription } from '../models/PrescriptionModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        const newItem = {
            patient: request.body.patient,
            doctor: request.body.doctor,
            medicine: request.body.medicine,
            picked: request.body.picked
            
        }

        const item = await Prescription.create(newItem);
        return response.status(200).json(item);

    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;
        const item = await Prescription.findById(id);
        return response.status(200).json(item);

    } catch (error) {
        console.log(error);
    }
});

router.get('/', async (request, response) => {
    try {

        const item = await Prescription.find();
        return response.status(200).json(item);

    } catch (error) {
        console.log(error);
    }
});

router.put('/:id', async (request, response) => {
    try {

        const newItem = {
            patient: request.body.patient,
            doctor: request.body.doctor,
            medicine: request.body.medicine,
            picked: request.body.picked 
        }

        const item = await Prescription.findByIdAndUpdate(id, newItem);
        return response.status(200).json(item);
        
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', async (request, response) => {
    try {

        const item = await Prescription.findByIdAndDelete(request.params.id);
        return response.status(200).json(item);
        
    } catch (error) {
        console.log(error);
    }
});


export default router;