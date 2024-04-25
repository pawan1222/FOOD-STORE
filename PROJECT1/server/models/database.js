const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Database1:Ps524569@collection.bkaobds.mongodb.net/Recipe?retryWrites=true&w=majority&appName=Collection");

const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('Connected')
});


//Models
require('./Category');
require('./Recipe');