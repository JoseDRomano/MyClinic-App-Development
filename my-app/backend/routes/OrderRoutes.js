
import express from 'express';
import { Order } from '../models/OrderModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        const newItem = {
            product: request.body.product,
            quantity: request.body.quantity,
            fullPrice:request.body.fullPrice, 
            authorized: request.body.authorized
        }

        const item = await Order.create(newItem);
        return response.status(200).json(item);

    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;
        const item = await Order.findById(id);
        return response.status(200).json(item);

    } catch (error) {
        console.log(error);
    }
});

router.get('/', async (request, response) => {
    try {

        const item = await Order.find();
        return response.status(200).json(item);

    } catch (error) {
        console.log(error);
    }
});

router.put('/:id', async (request, response) => {
    try {

        const newItem = {
            product: request.body.product,
            quantity: request.body.quantity,
            fullPrice:request.body.fullPrice, 
            authorized: request.body.authorized
        }

        const item = await Order.findByIdAndUpdate(id, newItem);
        return response.status(200).json(item);
        
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', async (request, response) => {
    try {

        const item = await Order.findByIdAndDelete(request.params.id);
        return response.status(200).json(item);
        
    } catch (error) {
        console.log(error);
    }
});


export default router;