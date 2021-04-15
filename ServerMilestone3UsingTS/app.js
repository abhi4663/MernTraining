"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var books_1 = require("./books");
//const express=require('express');
//const mongoose=require('mongoose');
var app = express_1.default();
app.use(express_1.default.json());
//const url="mongodb://localhost/booking";
var url = "mongodb+srv://Abhishek_Mern:Abhishek_Mern@mern.js49d.mongodb.net/BMS_Mern?retryWrites=true&w=majority";
mongoose_1.default.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var con = mongoose_1.default.connection;
con.on('open', function () {
    console.log('Connected.....');
});
//const bookRouter=require("./books");
app.use('/books', books_1.router);
var port = 5000;
app.listen(port, function () {
    console.log("Server Created on Port", port);
});
