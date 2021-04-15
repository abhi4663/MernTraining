const express=require('express');
const mongoose=require('mongoose');

const app=express();
app.use(express.json());
const url="mongodb://localhost/booking";

mongoose.connect(url,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true 
    });

const con=mongoose.connection;

con.on('open',function(){
    console.log('Connected.....');
})

const bookRouter=require("./routes/books");
app.use('/books',bookRouter);

const port=5000;
app.listen(port,()=>{
    console.log("Server Created on Port",port);
})

