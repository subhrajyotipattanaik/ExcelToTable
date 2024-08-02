var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    email:{
        type:String
    },
    Adress:{
        type:String
    }
})

module.exports = mongoose.model('User',userSchema);