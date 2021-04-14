var http = require('http')
var fs = require('fs');
const { parse } = require('querystring');


let books;

fs.readFile('./db.json', (err, data) => {
    if (err) {
        console.log("error");
    }
    else {
        db = JSON.parse(data);
        books = db.books;
    }
});

var server = http.createServer((req, res) => {
    if (req.url === '/books' && req.method === "GET") {
        console.log(req.method);
        res.end(JSON.stringify(books, null, 1));
    }

    if (req.url.indexOf('/books?') == 0) {
        console.log(req.method);
        bookSearch(req, res);
    }

    if (req.url === '/books/add') {
        console.log(req.method);
        if (req.method === 'POST') {
            addBook(req, res);
        }
        else {
            addDetails(req, res);
        }
    }

    if (req.url === '/books/edit') {
        if (req.method === 'PUT') {
            //    console.log(req.method);
            editBook(req, res);
        }
        else {
            editDetails(req, res);
        }
    }
    if(req.url.indexOf("/books/delete?")===0&&req.method==='DELETE'){
        console.log(req.method);
        deleteBook(req,res);
    }

});

var deleteBook=function(req,res){
    let [,parts] = req.url.split('?');
    const id = new URLSearchParams('?'+parts).get('id');
    books=books.filter(books=>books.id!=id);
    resultjson = `{"books":${JSON.stringify(books, undefined, 4)}}`;
        fs.writeFile('./d.json', resultjson, (err) => {
            if (err) {
                console.log(err);
            }else{
                res.end(resultjson);
            }
        });
}

var editDetails = function (req, res) {
    res.end(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documen</title>
</head>
<body>
    <form action="/books/edit" method="PUT">
        <input type="text" id="id" name="id" placeholder="Enter Id" /><br/><br/>
        <input type="text" id="title" name="title" placeholder="Enter title" /><br/><br/>
        <input type="text" id="author" name="author" placeholder="Enter author" /><br/><br/>
        <input type="text" id="rating" name="rating" placeholder="Enter rating"/><br/><br/>
        <input type="text" id="price" name="price" placeholder="Enter price"/><br/><br/>
        <button type="submit">Save</button>
    </form>
</body>
</html>
`);
}

var editBook = function (req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    console.log(body);
    req.on('end', () => {
        let add = parse(body);
        for (let i = 0; i < books.length; i++) {
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


var addDetails = (req, res) => {
    res.end(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/books/add" method="POST">
        <input type="text" id="title" name="title" placeholder="Enter title" /><br/><br/>
        <input type="text" id="author" name="author" placeholder="Enter author"  /><br/><br/>
        <input type="text" id="rating" name="rating" placeholder="Enter rating" /><br/><br/>
        <input type="text" id="price" name="price" placeholder="Enter price" /><br/><br/>
        <button type="submit">Save</button>
    </form>
</body>
</html>
`);
}

var addBook = function (req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    console.log(body);
    req.on('end', () => {
        let add = parse(body);
        console.log(add);
        class bookDetails {
            constructor(title, author, rating, price) {
                this.id = books[books.length - 1].id + 1;
                this.title = title;
                this.author = author;
                this.rating = rating;
                this.price = price;
            }
        }
        let book = new bookDetails(add.title, add.author, add.rating, add.price);
        console.log("book is " + book.id);
        books.push(book);

        resultjson = `{"books":${JSON.stringify(books, undefined, 4)}}`;
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

var bookSearch = function (req, res) {
    let parts = req.url.split('?');
    const id = new URLSearchParams('?' + parts).get('/books,id');
    if (id) {
        console.log("id= " +id);
        books.forEach(book => {
            if (book.id === id) {
                res.writeHead(200);
                res.end(JSON.stringify(book, null, 1));
            }
        })
        res.writeHead(400);
        res.end("Id not found");
    }


}

var port = 3000;
server.listen(port, (err) => {
    if (err) {
        console.log("error");
    }
    else
        console.log("port", port);
})