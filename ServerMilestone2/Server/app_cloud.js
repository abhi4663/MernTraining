const mongose = require('mongoose');
const Book = require('./books');

const url = 'mongodb+srv://Abhishek_Mern:Abhishek_Mern@mern.js49d.mongodb.net/BMS_Mern?retryWrites=true&w=majority';

mongose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(res => {
        console.log("MongoDb Connected");
    })


//INSERTION
/*
const data = new Book(
    {
        "isbn": "8129135728",
        "title": "Half Girl Friend",
        "author": "Chetan Bhagat",
        "pages": "280",
        "price": "180",
        "rating": "3.2",
        "votes": "8300"
    }
)
data.save().then((result) => {
    console.log(result);
})
*/

//FIND OR SEARCH
/*
Book.find({ title: "The Accursed God" })

    .then(res => {
        console.log(res);
    })
*/


//REMOVE OR DELETE
/*
Book.remove({
    title
        :
        "The Accursed God"
}).then(res => {
    console.log("Delete");
})
    .catch(err => {
        console.log("Not found");
    })

Book.remove({}).then(res => {
    console.log("Deleted");
})
*/

//UPDATE
/*
Book.updateOne({"votes":"49"},{$set:{"votes":"500"}})
.then(res=>{
    console.log("Updated");
})
*/

//Insertion
/*
Book.insertMany([
    {
        "isbn": "9781393495574",
        "title": "The Accursed God",
        "author": "Vivek Dutta Mishra",
        "pages": "380",
        "price": "199",
        "rating": "4.9",
        "votes": "49"
    },
    {
        "isbn": "9781408855652",
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "JK Rowling",
        "pages": "352",
        "price": "340",
        "rating": "4.7",
        "votes": "10192"
    },
    {
        "isbn": "9781408855706",
        "title": "Harry Potter and the Half Blood Prince",
        "author": "JK Rowling",
        "pages": "560",
        "price": "400",
        "rating": "4.7",
        "votes": "5651"
    },
    {
        "isbn": "1408894742",
        "title": "Harry Potter and the Deathly Hallows",
        "author": "JK Rowling",
        "pages": "640",
        "price": "550",
        "rating": "4.7",
        "votes": "7262"
    }])
    .then(res => {
        console.log("Inserted");
    })
*/