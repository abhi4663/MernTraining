import React, { useState, useContext, useEffect } from 'react'
import { book } from './book';
import OneBook from './OneBook';
import './book.css';
import StarRating from './StarRating';
import BookContext from '../context/BookContext'
interface Props {
    list: book[]
}

const Searching: React.FC<Props> = (props) => {
    const [searchInput, setSearchInput] = useState<string>("");
    // const [searchArray, setSearchArray] = useState<book[]>([])
    const initialState = useContext(BookContext);

    const [selected, setSelected] = useState("");

    const searchedBook = initialState.booksArray.search.map((book: any) => {
        return (
            <div className="search-details">
                <img className="abc" src={book.cover} title={book.title}></img>
                <h4>Title:{book.title}</h4>
                <h4>Author:{book.author}</h4>
                <h4>Rating:</h4>
                <StarRating value={book.rating} />
                <h4>Price:{book.price}</h4>

                <hr /><br />
            </div>
        )
    })


    const handleChange = (e: any) => {
        setSearchInput(e.target.value);
    }
    const handleSelect = (e: any) => {
        setSelected(e.target.value);
    }
    const onSearch = (searchInput: any, selected: any) => {
        // console.log("hiiii");

        if (selected === "2") {
            // console.log('hiii');

            initialState.booksArray.books.map((book: any) => {
                if (searchInput === book.title) {
                    console.log(book);

                    initialState.dispatch({ type: "SEARCH", searchData: book })
                }

            })
        }
    }
    return (
        <>
            <div className="Search">
                <nav className="navbar">
                    {/* <form className="container-fluid"> */}
                    <div className="input-group">
                        <span className="input-group-text search-left" id="basic-addon1" >
                            <select className="Select" onChange={handleSelect}>
                                <option selected>Select AnyOne</option>
                                <option value="1">id</option>
                                <option value="2">title</option>
                                <option value="3">author</option>
                            </select></span>

                        <input type="text" className="form-control" id="inputsearch" placeholder="Search" aria-describedby="basic-addon1" onChange={handleChange} />
                        <button className="btn btn-success btn-search" onClick={() => { onSearch(searchInput, selected) }}>Search</button>
                    </div>
                    {/* </form> */}
                </nav>
                {searchedBook}
            </div>
        </>
    )
}


export default Searching
