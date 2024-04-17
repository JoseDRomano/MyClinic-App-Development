
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
            role: request.body.role,
            email: request.body.email,
            // TODO: hash password!
            password: request.body.password,
            phoneNumber: request.body.phoneNumber
        }

        const staff = await Staff.create(newStaff);
        return response.status(200).send(staff) ;

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

export default router;