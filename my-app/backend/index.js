
import express from 'express';
import { PORT, MONGOURL} from './config.js';
import mongoose from 'mongoose';
 
import staffRoute from './routes/StaffRoutes.js';

import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());

app.use('/staff', staffRoute);


mongoose.connect(MONGOURL).then(() => {
    app.listen(PORT, () => {
        console.log('listening on port ' + PORT);
    });
    console.log('connected successfully');
}).catch((error) => {
    console.log(error)
}); 

