const  express=require('express');
const app=express();
const Student=require('../models/student');
let StudentId=0;
app.post('/:myClassId/students',async(req,res)=>{
    try{
        StudentId=StudentId+1;
        console.log(req.params.myClassId)
    const student=await Student.create({
        name:req.body.name,
        classId:req.params.myClassId,
        studentid:StudentId+1
    })
    res.status(201).json({
        studentid:student.studentid
    })
    }catch(e){
       res.json({
        message:e.message
       }
         
       )
    }
})
app.get('/:myClassId/students',async(req,res)=>{
    try{
     const user=await Student.find({classId:req.params.myClassId});
     if(user.length!=0){
     res.status(200).json({
        user
     })
    }else{
        res.status(404).json({
            error:"There are no students at this class"
        })
    }
    }catch(e){
       res.status(404).json({
        error:"There are no students at this class"
       })
    }
})
app.get('/:myClassId/students/:studentId',async(req,res)=>{
    try{
        const classId=req.params.myClassId;
        const studentid=req.params.studentId;
     const user=await Student.findOne({classId:classId},{studentid:studentid});
     if(user.length!=0){
     res.status(200).json({
        user
     })
    }else{
        res.status(404).json({
            error:"There are no student of that id"
        })
    }
    }catch(e){
       res.status(404).json({
        error:"There are no student of that id"
       })
    }
})

app.put('/:myClassId/students/:studentId',async(req,res)=>{
    try{
        const classId=req.params.myClassId;
        const studentid=req.params.studentId;
     const user=await Student.find(req.params.myClassId);
     for(let i=0;i<user.length;i++){
        if(user[i].studentid==studentid){
            const users=await Student.updateOne(req.body)
        }
     }
     if(users.length!=0){
     res.status(200).json({
        users
     })
    }else{
        res.status(204).json({
            error:"There are no student of that id"
        })
    }
    }catch(e){
       res.status(404).json({
        error:"There are no student of that id"
       })
    }
})
app.delete('/:myClassId/students/:studentId',async(req,res)=>{
    try{
        var users;
        const classId=req.params.myClassId;
        const studentid=req.params.studentId;
     const user=await Student.find({classId:req.params.myClassId});
     for(let i=0;i<user.length;i++){
        if(user[i].studentid==studentid){
            users=await Student.delete(studentid)
        }
     }
     res.status(202).json({
        None
     })
    }catch(e){
       res.status(404).json({
        error:"There is no task student of that id"
       })
    }
})




module.exports=app;