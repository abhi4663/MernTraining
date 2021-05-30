import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react'
import { book } from './book';
import OneBook from './OneBook';
import BookContext from '../context/BookContext';
import Searching from './Search';
import { BookManager } from '../BookManager';
import Slider from './Slider';
import Footer from './Footer';
import './book.css';
import Team from './Team';
interface props {
    list: book[]
}
let bookManager = new BookManager

const BookList: React.FC<props> = (props) => {
    const { booksArray, dispatch } = useContext(BookContext);

    useEffect(() => {
        bookManager.getAllBooks(dispatch);
    }, [])


    let book = booksArray.books.map((book, index) => {
        console.log(index);
        return (
            <>
                <div>
                    <Link to={`/${book._id}`}>
                        <OneBook book={book}></OneBook>
                    </Link>
                </div>
            </>
        )
    })
    return (
        <>
            <div>
                {/* <Team /> */}
                <Slider />
                <Searching list={props.list}></Searching>
            </div>

            <div className="bookList1">
                {book}
            </div>

            <div className="bookList-Footer">

                <Footer />

            </div>
        </>

    )
}

export default BookList