const mongoose=require('mongoose')
const dotenv=require('dotenv');
const express=require('express')
const app=express();
const Class=require('./routes/routes')
const Student=require('./routes/student');
app.use(express.json())

dotenv.config();

console.log(process.env.DATABASE_URL);

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log('connected to db')
})


app.listen(5000,()=>{
    console.log('server is up at port 5000')
})

app.use('/v1/',Class);
app.use('/v1/myClass',Student);