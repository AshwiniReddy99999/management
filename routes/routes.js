const  express=require('express');
const app=express();
const Class=require('../models/class')
let classid=0;
app.post('/myClass',async(req,res)=>{
    try{
        classid=classid+1;
        const user=await Class.create({
            class:req.body.class,
            studentsCount:req.body.studentsCount,
            id:classid+1,

           

        })
       
       res.status(201).json({
        id:user.id
       })
    
    }catch(e){
        res.json({
            message:e.message
        })
    }
})

app.get('/myClass',async(req,res)=>{
    try{
     const user=await Class.find();
     res.status(200).json({
        user
     })
    }catch(e){
       res.json({
        message:e.message
       })
    }
})


app.get('/myClass/:myClassId',async(req,res)=>{
    try{
     const user=await Class.findOne({id:req.params.myClassId});
     if(user.length!=0){
     res.status(200).json({
        user
     })
    }else{
        res.status(404);
    }
    }catch(e){
       res.status(404).json({
        message:e.message
       })
    }
})

app.delete('/myClass/:myClassId',async(req,res)=>{
    try{
     const user=await Class.deleteOne({id:req.params.myClassId});
   console.log(user)
     res.status(202).json({
        None
     })
    
    }
    catch(e){
       res.status(404).json({
        error:"There is no task at that id"
       })
    }
})

module.exports=app;