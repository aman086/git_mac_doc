// app.js or index.js
import express from 'express';
import {connectDB} from './db.js';
import mongoose from 'mongoose';
import User from './models/User.js';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended:true}))
const PORT = 3000;


connectDB();
app.post('/signup' , async (req,res)=>{
  console.log(req.body)

  const {name,password} = req.body

  let user = new User({
    name,password
  })

  await user.save().then(()=>{
    console.log(user)
  }).catch((err)=>{
    console.log("Error : " , err);
  })

})

app.get('/' , (req,res)=>{
  // console.log("Home");
  res.send("HOme")
})

app.get('/name' , (req,res)=>{
  // console.log("Home");
  res.send("Name")
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
