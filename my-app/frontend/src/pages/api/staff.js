import connectMongoDB from "../../libs/mongodb";
import Staff from "../../DB/models/Staff"

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            await connectMongoDB();
            res.status(200).json(await Staff.find())
            break;
        case 'POST':
            addStaff(req)
            res.status(200).json({message: "Staff Adicionado"})
            break;
        case 'DELETE':
            deleteStaff(req)
            res.status(200).json({message: "Staff Eliminado"})
            break;
        case 'PUT':
            updateStaff(req)
            res.status(200).json({message: "Staff Atualizado"})
            break;

    }
}

async function addStaff(req) {
    const {name, role, email, phoneNumber, citizenId, healthId, sex, gender, birthDate, address} = await req.body;
    await connectMongoDB();
    const password = await sendEmail(name,email);
    await Staff.create({name, role, email, password: password, phoneNumber, citizenId, healthId, sex, gender, birthDate, address});
}

async function deleteStaff(req) {
    const {id} = await req.body;
    await connectMongoDB();
    await Staff.findByIdAndDelete(id);
}

async function updateStaff(req) {
    const {id, name, role, email, password, phoneNumber, citizenId, healthId, sex, gender, birthDate, address} = await req.body;
    await connectMongoDB();
    await Staff.findByIdAndUpdate(id, {name, role, email, password, phoneNumber, citizenId, healthId, sex, gender, birthDate, address});
}
