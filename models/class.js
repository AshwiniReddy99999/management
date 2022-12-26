const mongoose=require('mongoose');

const Class=mongoose.Schema({
    class:{type:String},
    studentsCount:{type:Number},
    id:{type:Number}
})

const Classmodel=mongoose.model('class',Class);
module.exports=Classmodel;