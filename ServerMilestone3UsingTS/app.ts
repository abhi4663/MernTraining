import express from 'express';
import mongoose from 'mongoose';
import {router} from './books'
//const express=require('express');
//const mongoose=require('mongoose');

const app=express();
app.use(express.json());
//const url="mongodb://localhost/booking";
const url="mongodb+srv://Abhishek_Mern:Abhishek_Mern@mern.js49d.mongodb.net/BMS_Mern?retryWrites=true&w=majority"
mongoose.connect(url,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true 
    });

const con=mongoose.connection;

con.on('open',function(){
    console.log('Connected.....');
})

//const bookRouter=require("./books");
app.use('/books',router);

const port=5000;
app.listen(port,()=>{
    console.log("Server Created on Port",port);
})

