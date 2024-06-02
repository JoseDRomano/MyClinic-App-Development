
import express from 'express';
import { Inventory } from '../models/InventoryModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        const newItem = {
            description: request.body.description,
            quantity: request.body.quantity,
            preferableAmount: request.body.preferableAmount,
            price: request.body.price
        }

        const item = await Inventory.create(newItem);
        return response.status(200).json(item);

    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;
        const item = await Inventory.findById(id);
        return response.status(200).json(item);

    } catch (error) {
        console.log(error);
    }
});

router.get('/', async (request, response) => {
    try {

        const item = await Inventory.find();
        return response.status(200).json(item);

    } catch (error) {
        console.log(error);
    }
});

router.put('/:id', async (request, response) => {
    try {

        const newItem = {
            description: request.body.description,
            quantity: request.body.quantity,
            preferableAmount: request.body.preferableAmount,
            price: request.body.price
        }

        const item = await Inventory.findByIdAndUpdate(id, newItem);
        return response.status(200).json(item);
        
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', async (request, response) => {
    try {

        const item = await Inventory.findByIdAndDelete(request.params.id);
        return response.status(200).json(item);
        
    } catch (error) {
        console.log(error);
    }
});

//Fazer check de medicamentos para prescriptionModel 


export default router;