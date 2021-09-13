
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        maxlength:10
    },
    birthday:{
        type:String
    }
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
