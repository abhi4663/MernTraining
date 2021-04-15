const mongose=require('mongoose');
const Book=require('./books');
const env=require('dotenv');
env.config();
console.log(process.env.mongo_user);
console.log(process.env.mongo_password)
console.log(process.env.mongo_url)
const url=`mongodb+srv://${process.env.mongo_user}:${process.env.mongo_password}:@${process.env.mongo_url}/BMS_Mern?retryWrites=true&w=majority`;

// const mongo_user='Abhishek_Mern';
// const mongo_password='Abhishek_Mern';
// const mongo_url='mern.js49d.mongodb.net';
// const url=`mongodb+srv://${mongo_user}:${mongo_password}:@${mongo_url}/BMS_Mern?retryWrites=true&w=majority`;

//const url='mongodb+srv://Abhishek_Mern:Abhishek_Mern@mern.js49d.mongodb.net/BMS_Mern?retryWrites=true&w=majority';
mongose.connect(url,
{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(res=>{
    console.log("connected");
}).catch(err=>{
    console.log("not connected");
})



// Book.find({},{"author":1,_id:0
// })
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log("Not found");
// })

// Book.remove({}).then(res=>{
//     console.log("Deleted");
// })

// Book.insertMany([
//     {
//         "isbn": "9781393495574",
//         "title": "The Accursed God",
//         "author": "Vivek Dutta Mishra",
//         "pages": "380",
//         "price": "199",
//         "rating": "4.9",
//         "votes": "49"
//     },
//     {
//         "isbn": "9781408855652",
//         "title": "Harry Potter and the Philosopher's Stone",
//         "author": "JK Rowling",
//         "pages": "352",
//         "price": "340",
//         "rating": "4.7",
//         "votes": "10192"
//     },
//     {
//         "isbn": "9781408855706",
//         "title": "Harry Potter and the Half Blood Prince",
//         "author": "JK Rowling",
//         "pages": "560",
//         "price": "400",
//         "rating": "4.7",
//         "votes": "5651"
//     },
//     {
//         "isbn": "1408894742",
//         "title": "Harry Potter and the Deathly Hallows",
//         "author": "JK Rowling",
//         "pages": "640",
//         "price": "550",
//         "rating": "4.7",
//         "votes": "7262"
//     }])
//     .then(res=>{
//         console.log("Inserted");
//     })