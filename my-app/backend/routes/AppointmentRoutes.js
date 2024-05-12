
import express from 'express';
import { Appointment } from '../models/AppointmentModel.js';

const router = express.Router();

router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params; 

        const appointment = await Appointment.findById(id); 

        return response.status(200).json(appointment);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (request, response) => {
    try {
        const newAppointment = {
            name: request.body.name,
            staffId: request.body.staffId,
            patientId: request.body.patientId,
            date: request.body.date,
            time: request.body.time,
            location: request.body.location,
            extraInfo: request.body.extraInfo
        }

        const appointment = await Appointment.create(newAppointment);
        return response.status(200).send(appointment);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.put('/:id', async (request, response) => {
    try {
        const newAppointment = {
            name: request.body.name,
            staffId: request.body.staffId,
            patientId: request.body.patientId,
            date: request.body.date,
            time: request.body.time,
            location: request.body.location,
            extraInfo: request.body.extraInfo
        }
        
        const appointment = await Appointment.findByIdAndUpdate(request.params.id, newAppointment);
        return response.status(200).send(newAppointment);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(request.params.id);
        return response.status(200).send(appointment);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

export default router;