import * as fs from 'fs';
import { parse } from 'querystring';
import { bookDetails } from './books';

let books: bookDetails[];

export class handle {
    editBook = function (req: any, res: any, books: bookDetails[]) {
        let body = '';
        req.on('data', (chunk: any) => {
            body += chunk.toString();
        });
        console.log(body);
        req.on('end', () => {
            let add: any = parse(body);
            let i: number;
            for (i = 0; i < books.length; i++) {
                if (books[i].id == add.id) {
                    books[i] = add;
                }
            }
            let resultjson = `{"books":${JSON.stringify(books, undefined, 4)}}`;
            console.log(add);
            console.log(books);
            fs.writeFile('./db.json', resultjson, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
        res.writeHead(200);
        res.end("Book details are Modified");
    }

    addBook = function (req: any, res: any, books: bookDetails[]) {
        let body = '';
        req.on('data', (chunk: any) => {
            body += chunk.toString();
        });
        console.log(body);
        req.on('end', () => {
            let add: any = parse(body);
            console.log(add);

            let book = new bookDetails(add.id, add.title, add.author, add.rating, add.price);
            console.log("book is " + book.id);
            books.push(book);

            let resultjson = `{"books":${JSON.stringify(books, undefined, 4)}}`;
            // console.log(resultjson);
            //console.log(books);
            fs.writeFile('./db.json', resultjson, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
        res.writeHead(200);
        res.end("Book details are added");
    }

    bookSearch = function (req: any, res: any, books: bookDetails[]) {
        let parts = req.url.split('?');
        const id: string | null = new URLSearchParams('?' + parts).get('/books,id');
        const author: string | null = new URLSearchParams('?' + parts).get('/books,author');
        if (id) {
            console.log("id= " + id);
            books.forEach(book => {
                if (book.id === id) {
                    res.writeHead(200);
                    res.end(JSON.stringify(book, null, 1));
                }
            })
        }
        if (author) {
            console.log("author= " + author);
            books.forEach(book => {
                if (book.author === author) {
                    res.writeHead(200);
                    res.end(JSON.stringify(book, null, 1));
                }
            })
            res.writeHead(400);
            res.end("Book not found");
        }
    }

    deleteBook=function(req:any,res:any,books:bookDetails[]){
        let [,parts] = req.url.split('?');
        const id = new URLSearchParams('?'+parts).get('id');
        books=books.filter(books=>books.id!=id);
      let  resultjson = `{"books":${JSON.stringify(books, undefined, 4)}}`;
            fs.writeFile('./d.json', resultjson, (err) => {
                if (err) {
                    console.log(err);
                }else{
                    res.end(resultjson);
                }
            });
    }

}