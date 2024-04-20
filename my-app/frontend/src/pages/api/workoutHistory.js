import connectMongoDB from "../../libs/mongodb";
import WorkoutHistory from "../../DB/models/WorkoutHistory"


export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            //some code...
            await connectMongoDB();
            res.status(200).json(await WorkoutHistory.find())
            break;
        case 'POST':
            addWorkoutHistory(req)
            res.status(200).json({message: "Equipamento Adicionado"})
            break
        case 'PUT':
            updateWorkoutHistory(req)
            res.status(200).json({message: "Equipamento Atualizado"})
            break;
        case 'DELETE':
            deleteWorkoutHistory(req)
            res.status(200).json({message: "Equipamento Eliminado"})
            break;

    }
}

async function addWorkoutHistory(req) {
    const {eqName, maintenance, availability} = await req.body;
    await connectMongoDB();
    await WorkoutHistory.create({eqName, maintenance, availability});
}


async function updateWorkoutHistory (req) {
    const {id, eqName, maintenance, availability} = await req.body;
    await connectMongoDB();
    await WorkoutHistory.findByIdAndUpdate({_id: id}, {eqName, maintenance, availability});
}

async function deleteWorkoutHistory(req){
    const {id} = await req.body;
    await connectMongoDB();
    await WorkoutHistory.findByIdAndDelete({_id: id});
}

