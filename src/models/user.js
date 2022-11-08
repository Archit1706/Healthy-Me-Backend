const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
});