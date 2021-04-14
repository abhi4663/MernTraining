"use strict";
exports.__esModule = true;
var http = require("http");
var fs = require("fs");
var fileHandle_1 = require("./fileHandle"); //All methods or functions
var files_1 = require("./files");
var books = [];
var f = new files_1.form();
var h = new fileHandle_1.handle();
fs.readFile('./db.json', function (err, data) {
    if (err) {
        console.log("error");
    }
    else {
        var db = JSON.parse(data);
        books = db.books;
    }
});
var server = http.createServer(function (req, res) {
    if (req.url === '/books' && req.method === "GET") {
        console.log(req.method);
        res.end(JSON.stringify(books, null, 1));
    }
    if (req.url.indexOf('/books?') == 0) {
        console.log(req.method);
        h.bookSearch(req, res, books);
    }
    if (req.url === '/books/add') {
        console.log(req.method);
        if (req.method === 'POST') {
            h.addBook(req, res, books);
        }
        else {
            f.addDetails(req, res);
        }
    }
    if (req.url === '/books/edit') {
        if (req.method === 'PUT') {
            //    console.log(req.method);
            h.editBook(req, res, books);
        }
        else {
            f.editDetails(req, res);
        }
    }
    if (req.url.indexOf("/books/delete?") === 0 && req.method === 'DELETE') {
        console.log(req.method);
        h.deleteBook(req, res, books);
    }
});
var port = 3000;
server.on('error', function (err) {
    console.log(err.message);
});
server.listen(port, function () {
    console.log("port", port);
});
