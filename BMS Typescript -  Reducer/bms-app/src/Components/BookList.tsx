import { Link } from 'react-router-dom';
import React, { useContext } from 'react'
import { book } from './book';
import OneBook from './OneBook';
import BookContext from '../context/BookContext';
import Searching from './Search';


interface props {
    list: book[]
}

const BookList: React.FC<props> = (props) => {
    const { booksArray } = useContext(BookContext);
    let book = booksArray.books.map((book, index) => {
        console.log(index);
        return (
            <div>
                <Link to={`/${book._id}`}>
                    <OneBook book={book}></OneBook>
                </Link>
            </div>
        )
    })
    return (
        <>
            <div>
                <Searching list={props.list}></Searching>
            </div>
            <div>
                {book}
            </div>

        </>
    )
}

export default BookList