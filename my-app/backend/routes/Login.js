import express from 'express';
import jwt from 'jsonwebtoken';
import { Patient } from '../models/PatientModel.js';
import { Staff } from '../models/StaffModel.js';

const router = express.Router();


// Login route
router.post('/', async (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  let type = 'patient';
  
  let user = await Patient.findOne({healthId: username}).exec();
  if (!user) {
    user = await Staff.findOne({internalId: username}).exec();
    type = 'staff';
    if(!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    } 
  }

  // Compare the provided password with the stored hashed password
  if (password != user.password) {
    console.log(password);
    console.log(user.password);
    return res.status(401).json({ message: 'Invalid username or password!' });
  }

  return res.status(200).json({message: 'Login successfull!', role: type });

});






export default router;

