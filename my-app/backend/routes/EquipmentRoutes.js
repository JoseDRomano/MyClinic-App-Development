
import express from 'express';
import { Equipment } from '../models/EquipmentModel.js';

const router = express.Router();

router.get('/', async (request, response) => {
    try {
        const equipments = await Equipment.find(); 
        return response.status(200).json(equipments);
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params; 

        const equipment = await Equipment.findById(id); 

        return response.status(200).json(equipment);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (request, response) => {
    try {
        const newEquipment = {
            name: request.body.name,
            lastMaintenance: request.body.lastMaintenance,
            availability: request.body.availability
        }

        const equipment = await Equipment.create(newEquipment);
        return response.status(200).send(equipment);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.put('/:id', async (request, response) => {
    try {
        const newEquipment = {
            name: request.body.name,
            lastMaintenance: request.body.lastMaintenance,
            availability: request.body.availability
        }
        
        const equipment = await Equipment.findByIdAndUpdate(request.params.id, newEquipment);
        return response.status(200).send(newEquipment);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const equipment = await Equipment.findByIdAndDelete(request.params.id);
        return response.status(200).send(equipment);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

export default router;