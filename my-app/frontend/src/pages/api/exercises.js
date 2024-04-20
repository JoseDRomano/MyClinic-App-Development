import connectMongoDB from "../../libs/mongodb";
import Exercises from "../../DB/models/Exercises"


export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            //some code...
            await connectMongoDB();
            res.status(200).json(await Exercises.find())
            break;
        case 'POST':
            addExercise(req)
            res.status(200).json({message: "Check-In Adicionado"})
            break
        case 'PUT':
            updateExercise(req)
            res.status(200).json({message: "Check-In Atualizado"})
            break;
        case 'DELETE':
            deleteExercise(req)
            res.status(200).json({message: "Check-In Eliminado"})
            break;

    }
}

async function addExercise(req) {
    await connectMongoDB();
    await Exercises.create(await req.body);
}

async function updateExercise(req) {
    const {id, name, pacient, date} = req.body;
    await connectMongoDB();
    await Exercises.findByIdAndUpdate({_id: id}, {name, pacient, date});
}

async function deleteExercise(req){
    const {id} = await req.body;
    await connectMongoDB();
    await Exercises.findByIdAndDelete({_id: id});
}

