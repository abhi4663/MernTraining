import React, { useState, useContext, useEffect } from 'react'
import { book } from './book';
import OneBook from './OneBook';
import './book.css'
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
            <div>
                <h4>{book.title}</h4>
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
                        <span className="input-group-text" id="basic-addon1" >
                            <select className="Select" onChange={handleSelect}>
                                <option selected>Select AnyOne</option>
                                <option value="1">ID</option>
                                <option value="2">title</option>
                                <option value="3">AUTHOR</option>
                            </select></span>

                        <input type="text" className="form-control input1" placeholder="Search" aria-describedby="basic-addon1" onChange={handleChange} />
                        <button className="btn btn-success" onClick={() => { onSearch(searchInput, selected) }}>Search</button>
                    </div>
                    {/* </form> */}
                </nav>
                {searchedBook}
            </div>
        </>
    )
}


export default Searching
