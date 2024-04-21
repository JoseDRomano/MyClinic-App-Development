import connectMongoDB from "../../libs/mongodb";
import Appointment from "../../DB/models/Appointment"


export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            //some code...
            await connectMongoDB();
            res.status(200).json(await Appointment.find())
            break;
        case 'POST':
            addAppointment(req)
            res.status(200).json({message: "Consulta Criada"})
            break
        case 'PUT':
            updateAppointment(req)
            res.status(200).json({message: "Consulta Eliminada"})
            break;
        case 'DELETE':
            deleteAppointment(req)
            res.status(200).json({message: "Consulta Atualizada"})
            break;

    }
}

async function addAppointment(req) {
    const {staffId, patientId, date, time, location, extraInfo} = await req.body;
    await connectMongoDB();
    await Appointment.create({staffId, patientId, date, time, location, extraInfo});
}

async function updateAppointment(req){
    const {id, staffId, patientId, date, time, location, extraInfo} = await req.body;
    await connectMongoDB();
    await Appointment.findByIdAndUpdate({_id: id}, {staffId, patientId, date, time, location, extraInfo});
}

async function deleteAppointment(req) {
    const {id} = await req.body;
    await connectMongoDB();
    await Appointment.findByIdAndDelete({_id: id});
}




