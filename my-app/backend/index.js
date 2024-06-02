
import express from 'express';
import { PORT, MONGOURL} from './config.js';
import mongoose from 'mongoose';
 
import staffRoute from './routes/StaffRoutes.js';
import patientRoute from './routes/PatientRoutes.js';
import appointmentRoute from './routes/AppointmentRoutes.js';
import checkInRoute from './routes/CheckInRoutes.js';
import equipmentRoute from './routes/EquipmentRoutes.js';
import examRoute from './routes/ExamRoutes.js';
import feedbackQuestionsRoute from './routes/FeedbackQuestionsRoutes.js';
import feedbackAnswersRoute from './routes/FeedbackAnswersRoutes.js';
import inventoryRoute from './routes/InventoryRoutes.js';
import orderRoute from './routes/OrderRoutes.js';
import billingRoute from './routes/BillingRoutes.js';
import loginRoute from './routes/Login.js';
import prescriptionRoute from './routes/PrescriptionRoutes.js'

import cors from 'cors';



const app = express();

app.use(express.json());
app.use(cors());

app.use('/staff', staffRoute);
app.use('/patient', patientRoute);
app.use('/appointment', appointmentRoute);
app.use('/checkIn', checkInRoute);
app.use('/equipment', equipmentRoute);
app.use('/exam', examRoute);
app.use('/feedbackQuestions', feedbackQuestionsRoute);
app.use('/feedbackAnswers', feedbackAnswersRoute);
app.use('/inventory', inventoryRoute);
app.use('/order', orderRoute); 
app.use('/billing', billingRoute); 
app.use('/login', loginRoute);

mongoose.connect(MONGOURL).then(() => {
    app.listen(PORT, () => {
        console.log('listening on port ' + PORT);
    });
    console.log('connected successfully');
}).catch((error) => {
    console.log(error)
}); 

