
import express from 'express';
import { Staff } from '../models/StaffModel.js';

const router = express.Router();

router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params; 

        const staff = await Staff.findById(id); 

        return response.status(200).json(staff);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (request, response) => {
    try {
        const newStaff = {
            name: request.body.name,
            joinDate: request.body.joinDate,
            job: request.body.job,
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

        const staff = await Staff.create(newStaff);
        return response.status(200).send(staff);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.put('/:id', async (request, response) => {
    try {
        const newStaff = {
            name: request.body.name,
            joinDate: request.body.joinDate,
            job: request.body.job,
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
        
        const staff = await Staff.findByIdAndUpdate(request.params.id, newStaff);
        return response.status(200).send(newStaff);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const staff = await Staff.findByIdAndDelete(request.params.id);
        return response.status(200).send(staff);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

export default router;