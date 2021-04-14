"use strict";
exports.__esModule = true;
exports.handle = void 0;
var fs = require("fs");
var querystring_1 = require("querystring");
var books_1 = require("./books");
var books;
var handle = /** @class */ (function () {
    function handle() {
        this.editBook = function (req, res, books) {
            var body = '';
            req.on('data', function (chunk) {
                body += chunk.toString();
            });
            console.log(body);
            req.on('end', function () {
                var add = querystring_1.parse(body);
                var i;
                for (i = 0; i < books.length; i++) {
                    if (books[i].id == add.id) {
                        books[i] = add;
                    }
                }
                var resultjson = "{\"books\":" + JSON.stringify(books, undefined, 4) + "}";
                console.log(add);
                console.log(books);
                fs.writeFile('./db.json', resultjson, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
            });
            res.writeHead(200);
            res.end("Book details are Modified");
        };
        this.addBook = function (req, res, books) {
            var body = '';
            req.on('data', function (chunk) {
                body += chunk.toString();
            });
            console.log(body);
            req.on('end', function () {
                var add = querystring_1.parse(body);
                console.log(add);
                var book = new books_1.bookDetails(add.id, add.title, add.author, add.rating, add.price);
                console.log("book is " + book.id);
                books.push(book);
                var resultjson = "{\"books\":" + JSON.stringify(books, undefined, 4) + "}";
                // console.log(resultjson);
                //console.log(books);
                fs.writeFile('./db.json', resultjson, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
            });
            res.writeHead(200);
            res.end("Book details are added");
        };
        this.bookSearch = function (req, res, books) {
            var parts = req.url.split('?');
            var id = new URLSearchParams('?' + parts).get('/books,id');
            var author = new URLSearchParams('?' + parts).get('/books,author');
            if (id) {
                console.log("id= " + id);
                books.forEach(function (book) {
                    if (book.id === id) {
                        res.writeHead(200);
                        res.end(JSON.stringify(book, null, 1));
                    }
                });
            }
            if (author) {
                console.log("author= " + author);
                books.forEach(function (book) {
                    if (book.author === author) {
                        res.writeHead(200);
                        res.end(JSON.stringify(book, null, 1));
                    }
                });
                res.writeHead(400);
                res.end("Book not found");
            }
        };
        this.deleteBook = function (req, res, books) {
            var _a = req.url.split('?'), parts = _a[1];
            var id = new URLSearchParams('?' + parts).get('id');
            books = books.filter(function (books) { return books.id != id; });
            var resultjson = "{\"books\":" + JSON.stringify(books, undefined, 4) + "}";
            fs.writeFile('./d.json', resultjson, function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.end(resultjson);
                }
            });
        };
    }
    return handle;
}());
exports.handle = handle;
