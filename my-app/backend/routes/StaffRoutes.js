
import express from 'express';
import { Staff } from '../models/StaffModel.js';

const router = express.Router();

const idGenerator = async (role) => {
  
    
    if (role === 'medic') {
        let medicCounter = await Staff.countDocuments({ job: 'medic' }).exec();
        medicCounter += 1;
        return `medic-${medicCounter}`;
      } else if (role === 'nurse') {
        let nurseCounter = await Staff.countDocuments({ job: 'nurse' }).exec();
        nurseCounter += 1;
        return `nurse-${nurseCounter}`;
      }
    
  };

router.get('/', async (request, response) => {
    try {
        const staff = await Staff.find(); 
        return response.status(200).json(staff);
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params; 

        const staff = await Staff.findOne({internalId: id}).exec(); 

        return response.status(200).json(staff);
    } catch (error) {
        console.log(error);
    }
});



router.post('/', async (request, response) => {
    try {

        const generatedId = await idGenerator(request.body.job);

        const newStaff = {
            name: request.body.name,
            joinDate: request.body.joinDate,
            job: request.body.job,
            email: request.body.email,
            password: request.body.password,
            phoneNumber: request.body.phoneNumber,
            citizenId: request.body.citizenId,
            internalId: generatedId,
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
            internalId: request.body.internalId,
            sex: request.body.sex,
            gender: request.body.gender,
            birthDate: request.body.birthDate,
            address: request.body.address
        }
        
        const staff = await Staff.findOneAndUpdate({internalId:request.params.id}, newStaff);
        return response.status(200).send(staff);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const staff = await Staff.findOneAndDelete({internalId:request.params.id}).exec();
        return response.status(200).send(staff);

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});

export default router;