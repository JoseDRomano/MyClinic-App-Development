
import express from 'express';
import { Staff } from '../models/StaffModel.js';

const router = express.Router();

const idGenerator = async (role) => {
  
    
    if (role === 'Medic') {
        let counter = await Staff.countDocuments({ job: 'Medic' }).exec();
        counter += 1;
        return `medic-${counter}`;
      } else if (role === 'Nurse') {
        let counter = await Staff.countDocuments({ job: 'Nurse' }).exec();
        counter += 1;
        return `nurse-${counter}`;
      } else if (role === 'Receptionist') {
        let counter = await Staff.countDocuments({ job: 'Receptionist' }).exec();
        counter += 1;
        return `receptionist-${counter}`;
      } else if (role === 'Technician') {
        let counter = await Staff.countDocuments({ job: 'Technician' }).exec();
        counter += 1;
        return `technician-${counter}`;
      } else if (role === 'Manager') {
        let counter = await Staff.countDocuments({ job: 'Manager' }).exec();
        counter += 1;
        return `manager-${counter}`;
      } else if (role === 'Pharmacist') {
        let counter = await Staff.countDocuments({ job: 'Pharmacist' }).exec();
        counter += 1;
        return `pharmacist-${counter}`;
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