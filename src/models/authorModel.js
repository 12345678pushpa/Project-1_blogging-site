const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    Fname : {type: String, required : true,trim:true,},
    Lname : {type: String,required : true,trim:true},
    title: {type: String, required : true, enum:["Mr", "Mrs", "Miss","Mast"]},
    email : {type: String, required: true,lowercase:true, match: /.+\@.+\..+/ , unique:true,
    validate:{
        validator:function(email){
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        },message:'please fill valid email adresss',isAsync:false
    }
    },
    password : {type: String, required: true,trim:true}

},{timestamps:true});

module.exports = mongoose.model('Author', authorSchema,'authors')