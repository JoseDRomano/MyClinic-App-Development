
import express from 'express';
import { Patient } from '../models/PatientModel.js';

const router = express.Router();

router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params; 

        const patient = await Patient.findById(id); 

        return response.status(200).json(patient);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (request, response) => {
    try {
        const newPatient = {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            phoneNumber: request.body.phoneNumber,
            citizenId: request.body.citizenId,
            healthId: request.body.healthId,
            sex: request.body.sex,
            gender: request.body.gender,
            birthDate: request.body.birthDate,
            address: request.body.address
        }

        const patient = await Patient.create(newPatient);
        return response.status(200).send(patient);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.put('/:id', async (request, response) => {
    try {
        const newPatient = {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            phoneNumber: request.body.phoneNumber,
            citizenId: request.body.citizenId,
            healthId: request.body.healthId,
            sex: request.body.sex,
            gender: request.body.gender,
            birthDate: request.body.birthDate,
            address: request.body.address
        }
        
        const patient = await Patient.findByIdAndUpdate(request.params.id, newPatient);
        return response.status(200).send(patient);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const patient = await Patient.findByIdAndDelete(request.params.id);
        return response.status(200).send(patient);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

export default router;