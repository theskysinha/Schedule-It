const mongoose = require("mongoose")
const roomSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    maxcount:{
        type: Number,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    rent:{
        type: String,
        required: true
    }     
})