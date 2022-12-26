const mongoose=require('mongoose');

const Student=mongoose.Schema({
    name:{type:String},
    classId:{type:Number},
    studentid:{type:Number}
})

const Studentmodel=mongoose.model('student',Student)

module.exports=Studentmodel;