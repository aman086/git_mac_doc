const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const port = 3000;

app.get('/' , (req,res)=>{
    console.log("Home Page")
})

app.get('/login' , (req,res)=>{
    console.log("Login page is here")
})

app.get('/signup' , (req,res)=>{
    console.log("SignUP page is here")
})

app.post('/' , (req,res)=>{
    const {
        name,
        age
    } = req.body
    console.log(name , age)
})


const URL = "mongodb+srv://tiwariJI:Aman2122@user.c48vdvb.mongodb.net/user?retryWrites=true&w=majority"
mongoose.connect(URL)
.then(console.log("Successful connection")).catch((err)=>{
    console.log(err)
})


app.listen(port , (req, res)=>{
    console.log("server is listening")
})