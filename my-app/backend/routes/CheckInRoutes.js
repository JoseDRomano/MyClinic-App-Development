<<<<<<< Updated upstream

import express from 'express';
import { CheckIn } from '../models/CheckInModel.js';

const router = express.Router();

router.get('/', async (request, response) => {
    try {
        const checkIns = await CheckIn.find(); 
        return response.status(200).json(checkIns);
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params; 

        const checkIn = await CheckIn.findById(id); 

        return response.status(200).json(checkIn);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (request, response) => {
    try {
        const newCheckIn = {
            activityId: request.body.activityId,
            date: request.body.date,
            time: request.body.time
        }

        const checkIn = await CheckIn.create(newCheckIn);
        return response.status(200).send(checkIn);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.put('/:id', async (request, response) => {
    try {
        const newCheckIn = {
            activityId: request.body.activityId,
            date: request.body.date,
            time: request.body.time
        }
        
        const checkIn = await CheckIn.findByIdAndUpdate(request.params.id, newCheckIn);
        return response.status(200).send(newCheckIn);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const checkIn = await CheckIn.findByIdAndDelete(request.params.id);
        return response.status(200).send(checkIn);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
=======
import express from 'express';
import { CheckIn } from "../models/CheckInModel.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newCheckIn = {
            patient_name: req.body.patient_name,
            citizenId: req.body.citizen_id,
            healthId: req.body.health_id,
            sex: req.body.sex,
            gender: req.body.gender,
            birthDate: req.body.birth,
            address: req.body.address,
            entry_hour:req.body.entry_hour,
            symptoms: req.body.symptoms,
            priority: req.body.priority,
            state: req.body.state
        }

        const checkIn = await CheckIn.create(newCheckIn);
        return res.status(200).send(checkIn);

    } catch (error) {
        console.error(error);
    }
});

router.get('/', async (req,res) => {
    try{

        const allCheckIn = await CheckIn.find();
        return res.status(200).send(allCheckIn);
        
    }catch (error) { 
        console.log(error);
    }
});



router.put('/:id', async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
>>>>>>> Stashed changes
    }
});

export default router;