
import mongoose from 'mongoose';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log('Server running on port ${PORT}'));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://myclinic:ZdMWJigTB6qFl9IX@myclinic.iuonl8t.mongodb.net/');

// creare a API route