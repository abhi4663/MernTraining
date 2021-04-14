export class form {
    editDetails = function (req: any, res: any) {
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

    addDetails = (req: any, res: any) => {
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
}