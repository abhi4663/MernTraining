
import { useParams } from 'react-router';
import { book } from './book'
import React, { useContext } from 'react'
import BookContext from '../context/BookContext';
import StarRating from './StarRating';

interface Props {
    list: book[],
    delete: () => void
}

const BookDetail: React.FC<Props> = (props: Props) => {
    const { _id }: any = useParams();
    // console.log(_id);

    const { booksArray, dispatch } = useContext(BookContext);
    let detailbook = booksArray.books.map((book, index) => {
        if (book._id === _id) {
            console.log(_id);
            return (

                <div className="details">
                    <img src={book.cover} title={book.title}></img>
                    <h4>Title:{book.title}</h4>
                    <h4>Author:{book.author}</h4>
                    <h4>Rating:<StarRating value={book.rating}></StarRating></h4>
                    <h4>Price:{book.price}</h4>
                    <h4>Description:{book.description}</h4>
                    <button type="button" className="btn btn-outline-danger" onClick={() => { dispatch({ type: "REMOVE_BOOK", id: book._id }); props.delete() }}>Delete</button>

                    {/* {props.usercheck?} */}
                </div>



            )
        }
    })
    return (
        <div>
            {detailbook}
        </div>
    )
}

export default BookDetail
