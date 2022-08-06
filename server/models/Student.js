const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 2
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    father: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    mother: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    phone:{
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    grade:{
        type: String,   
        required: true,
    },
   bloodGroup:{
    type: String,
   }
})

module.exports = mongoose.model('Student', StudentSchema)