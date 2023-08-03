const mongoose = require('mongoose')

const certificateSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    subtitle: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require:true
    },
    signature: {
        type: String,
        default: 'Sumit kumar'
    }
}, { timestamps: true })

module.exports = mongoose.model('certificate', certificateSchema) //converting schema to model