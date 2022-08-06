const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true
    },
    phone: {
        type: Number,
        require: true,
    },
    password: {
        type: String,
        require: true,
        min: 6,
    },
    isTeacher: {
        type: Boolean,
        default: true
    },
})

module.exports = mongoose.model('Teacher', TeacherSchema)