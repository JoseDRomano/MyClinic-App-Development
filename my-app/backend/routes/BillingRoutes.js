
import express from 'express';
import { Billing } from '../models/BillingModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        const newItem = {
            patient: request.body.patient,
            services: request.body.services,
            price: request.body.price,
            payed: request.body.payed
            
        }

        const item = await Billing.create(newItem);
        return response.status(200).json(item);

    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;
        const item = await Billing.findById(id);
        return response.status(200).json(item);

    } catch (error) {
        console.log(error);
    }
});

router.get('/', async (request, response) => {
    try {

        const item = await Billing.find();
        return response.status(200).json(item);

    } catch (error) {
        console.log(error);
    }
});

router.put('/:id', async (request, response) => {
    try {

        const newItem = {
            patient: request.body.patient,
            services: request.body.services,
            price: request.body.price,
            payed: request.body.payed 
        }

        const item = await Billing.findByIdAndUpdate(id, newItem);
        return response.status(200).json(item);
        
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', async (request, response) => {
    try {

        const item = await Billing.findByIdAndDelete(request.params.id);
        return response.status(200).json(item);
        
    } catch (error) {
        console.log(error);
    }
});


export default router;