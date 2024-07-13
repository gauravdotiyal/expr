//BACKEND EXPRESS HTTP SERVER IN NODE.JS
const express=require("express")
const port=3000;
const app=express()

//create a todos app to store todo of the users 
app.get('/', function(req,res){
    res.send("Hello world")
}) 

//added coment

app.listen(port) 