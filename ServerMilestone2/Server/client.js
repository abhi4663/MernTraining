// var MongoClient = require('mongodb').MongoClient;
// const Book=require('./books');
// var url = 'mongodb://localhost/EmployeeDB';

// MongoClient.connect(url, function(err, db) {
// console.log("connected");
// db.close();
// });

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url, function(err, db) {

    db.collection('Employee').insertOne({
        Employeeid: 4,
        EmployeeName: "NewEmployee"
    });
}); 