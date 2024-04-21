import connectMongoDB from "../../libs/mongodb";
import Workout from "../../DB/models/Workout"


export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            //some code...
            await connectMongoDB();
            res.status(200).json(await Workout.find())
            break;
        case 'POST':
            addWorkout(req)
            res.status(200).json({message: "Consulta Criada"})
            break
        case 'PUT':
            updateWorkout(req)
            res.status(200).json({message: "Consulta Eliminada"})
            break;
        case 'DELETE':
            deleteWorkout(req)
            res.status(200).json({message: "Consulta Atualizada"})
            break;

    }
}

async function addWorkout(req) {
    const {name, duration, staff, date} = await req.body;
    await connectMongoDB();
    await Workout.create({name, duration, staff, date});
}

async function updateWorkout(req){
    const {id, name, duration, staff, date} = await req.body;
    await connectMongoDB();
    await Workout.findByIdAndUpdate({_id: id}, {name, duration, staff, date});
}

async function deleteWorkout(req) {
    const {id} = await req.body;
    await connectMongoDB();
    await Workout.findByIdAndDelete({_id: id});
}




