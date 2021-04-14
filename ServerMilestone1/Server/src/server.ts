import * as http from 'http';
import * as fs from 'fs';
import { bookDetails } from './books';
import { handle } from './fileHandle'; //All methods or functions
import { form } from './files';


let books: bookDetails[] = [];

let f = new form();
let h = new handle();

fs.readFile('./db.json', (err: any, data: any) => {
    if (err) {
        console.log("error");
    }
    else {
        let db = JSON.parse(data);
        books = db.books;
    }
})


var server = http.createServer((req: any, res: any) => {
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

    if(req.url.indexOf("/books/delete?")===0&&req.method==='DELETE'){
        console.log(req.method);
        h.deleteBook(req,res,books);
    }

});

let port = 3000;
server.on('error', (err) => {
    console.log(err.message);

})
server.listen(port, () => {
    console.log("port", port);
})