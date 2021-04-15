const mongoose=require('mongoose');

let bookSchema=mongoose.Schema({   //defining schema
            isbn: String,
            title: String,
            author: String,
            pages: String,
            price: String,
            rating: String,
            votes: String
})

module.exports=mongoose.model('books',bookSchema);  //exporting model