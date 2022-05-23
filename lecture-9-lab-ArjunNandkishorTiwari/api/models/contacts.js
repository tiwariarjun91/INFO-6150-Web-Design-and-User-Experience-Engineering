import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required : "First name is required"
    },
    lastName: {
        type: String,
        required : "LAst name is required"
    },
    phone: {
        type: String,
        required : "Phone is required"
    },
    createdDate : {
        type : Date,
        default : Date.now
    },
    modifiedDate: {
        type : Date,
        default : Date.now
    }
},{ skipVersioning : true});


const model = mongoose.model('contact', Schema);

export default model;