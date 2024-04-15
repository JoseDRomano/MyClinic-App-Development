
import express from 'express';
import { PORT, MONGOURL} from './config.js';
import mongoose from 'mongoose';
import { Person } from './models/PersonModel.js';


const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Hello') ;
});

app.post('/staff', async (request, response) => {
    try {
        const newStaff = {
            name: request.body.name,
            role: request.body.role
        }

        const staff = await Person.create(newStaff);

        return response.status(200).send('Created new staff member') ;

    } catch (error) {
        console.log(error);
        response.status(500).send('Error: ' + error);
    }
});


mongoose.connect(MONGOURL).then(() => {
    app.listen(PORT, () => {
        console.log('listening on port ' + PORT);
    });
    console.log('connected successfully');
}).catch((error) => {
    console.log(error)
}); 

