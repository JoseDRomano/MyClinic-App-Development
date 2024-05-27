
import express from 'express';
import { Patient } from '../models/PatientModel.js';

import { Appointment } from '../models/AppointmentModel.js';
import { Exam } from '../models/ExamModel.js';
import { CheckIn } from '../models/CheckInModel.js';

const router = express.Router();

// get patient history (appointments, exams, check-ins)
router.get('/history/:id', async (request, response) => {
    try {
        const {id} = request.params; 

        const appointments = await Appointment.find({patientId: id}).exec();

        const exams = await Exam.find({patientId: id}).exec();

        const checkIns = await CheckIn.find({healthId: id}).exec();

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

        const patient = await Patient.findOne({healthId:id}).exec(); 

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
        
        const patient = await Patient.findOneAndUpdate({healthId: request.params.id}, newPatient).exec();
        return response.status(200).send(newPatient);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const patient = await Patient.findOneAndDelete({healthId: request.params.id}).exec();
        return response.status(200).send(patient);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

export default router;