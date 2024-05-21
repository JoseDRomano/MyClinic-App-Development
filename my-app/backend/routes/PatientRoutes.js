
import express from 'express';
import { Patient } from '../models/PatientModel.js';

import { Appointment } from '../models/AppointmentModel.js';
import { Exam } from '../models/ExamModel.js';
import { CheckIn } from '../models/CheckInModel.js';

const router = express.Router();

// get patient history (appointments, exams, check-ins)
router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params; 

        const appointments = await Appointment.findById(id);

        const exams = await Exam.findById(id); 

        const checkIns = await CheckIn.findById(id); 

        console.log(checkIns);
        console.log(appointments);
        console.log(exams);

        const patientHistory = {
            appointments: appointments,
            exams: exams,
            checkIns: checkIns
        };

        return response.status(200).json(patientHistory);
    } catch (error) {
        console.log(error);
    }
});

router.get('/', async (request, response) => {
    try {
        const patients = await Patient.find(); 
        return response.status(200).json(patients);
    } catch (error) {
        console.log(error);
    }
});

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
        return response.status(200).send(newPatient);

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