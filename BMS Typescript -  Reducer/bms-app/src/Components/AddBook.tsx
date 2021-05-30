import React, { useState, useEffect, useContext } from 'react';
import { book } from './book'
import BookContext from '../context/BookContext';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    handleBookInput: () => void
}

const AddBook: React.FC<Props> = (Props: any) => {
    const { dispatch } = useContext(BookContext);
    const [_id, setId] = useState("");
    const [cover, setCover] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState(0);
    const [price, setPrice] = useState(0);
    const [description, setDesc] = useState("");

    function inputCover(e: any) {
        setCover(e.target.value);
    }
    function inputtitle(e: any) {
        setTitle(e.target.value);
    }
    function inputauthor(e: any) {
        setAuthor(e.target.value);
    }
    function inputrating(e: any) {
        setRating(e.target.value);
    }
    function inputPrice(e: any) {
        setPrice(e.target.value);
    }
    function inputdescription(e: any) {
        setDesc(e.target.value);
    }





    return (
        // <div className="add">
        <form>
            <div className="group">
                <div className="form-group">
                    <u><h4>Enter Book Details</h4></u>
                    <label htmlFor="exampleFormControlTextarea1">Cover</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Cover of the Book" onChange={inputCover} required />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Title</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Title of the Book" onChange={inputtitle} required />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Author</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Author of the Book" onChange={inputauthor} required />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Rating</label>
                    <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Rating of the Book" onChange={inputrating} required />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Price</label>
                    <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Price of the Book" onChange={inputPrice} required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} onChange={inputdescription} placeholder="Description of the Book" required></textarea>
                </div>


                {/* <input type="text" onChange={inputimage}/><br/><br/>
                      Enter the Title:<input type="text" onChange={inputtitle}/><br/><br/>
                      Enter the Author:<input type="text" onChange={inputtitle}/><br/><br/>
                      Enter the Rating:<input type="number" onChange={inputrating}/><br/><br/>
                      Enter the Price:<input type="number" onChange={inputPrice}/><br/><br/> */}
                {/* <textarea cols={100} rows={5} onChange={inputdescription} placeholder=" Write Description of Book"></textarea><br/><br/><br/> */}
                <button type="button" className="btn btn-primary btn1" onClick={() => {
                    dispatch({ type: "ADD_BOOKLIST", book: { cover: cover, title: title, author: author, rating: rating, price: price, description: description, _id: uuidv4() } }
                    ); Props.handleBookInput();
                }}>Submit</button>

            </div>
        </form>

        // </div>
    )
}
export default AddBook