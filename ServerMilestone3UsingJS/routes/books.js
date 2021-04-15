const express=require('express');
const book = require('../models/book');
const router=express.Router();
const Book=require('../models/book')

router.get('/',async(req,res)=>{
  try{
      const books=await Book.find();
      res.json(books);
  }catch(err){
    res.send('get request');
  }
})
router.get('/:id',async(req,res)=>{
  try{
      const book=await Book.findById(req.params.id);
      res.json(book)
  }catch(err){
    res.send('get request');
  }
})

router.delete('/:id',async(req,res)=>{
  try{
    const book=await Book.findById(req.params.id);
    const a1=await book.remove();
    res.send('Deleted');
  }catch(err){
    res.send('Error');
  }
})

router.post('/add',async(req,res)=>{
  const book=new Book({
      'isbn':req.body.isbn,
      'title':req.body.title,
      'author':req.body.author,
      'pages':req.body.pages,
      'price':req.body.price,
      'rating':req.body.rating,
      'votes':req.body.votes
   })
  try{
    const a1=await book.save();
    res.send(a1);
  }catch(err){
    res.send('error')
  }
})

router.put('/:id',async(req,res)=>{
  try{
      const book=await Book.findById(req.params.id);
      book.isbn=req.body.isbn;
      book.title=req.body.title;
      book.author=req.body.author;
      book.pages=req.body.pages;
      book.price=req.body.price;
      book.rating=req.body.rating;
      book.votes=req.body.votes;
      const a1=await book.save()
      res.json(a1);
  }catch{
    res.send('Error')
  }
})





module.exports=router;