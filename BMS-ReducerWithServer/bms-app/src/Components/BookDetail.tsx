
import { useParams, useHistory } from 'react-router';
import { book } from './book'
import React, { useContext } from 'react'
import BookContext from '../context/BookContext';
import StarRating from './StarRating';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Footer from './Footer';
import { BookManager } from '../BookManager';

// interface Props {
//     list: book[]
// }

const BookDetail = (props: any) => {
    const { _id }: any = useParams();
    // console.log(_id);
    const bookManager = new BookManager;
    const history = useHistory();
    const { booksArray, dispatch } = useContext(BookContext);
    let detailbook = booksArray.books.map((book, index) => {
        if (book._id === _id) {
            console.log(_id);
            return (
                <>
                    <div className="details">
                        <div className="details-img">

                            <img className="abc" src={book.cover} title={book.title}></img>


                            <h4>{book.title}<StarRating value={book.rating} /></h4>
                        </div>

                        <div className="details-book">
                            <h4>Title:{book.title}</h4>
                            <h4>Author:{book.author}</h4>
                            <h4>Rating:</h4>
                            <StarRating value={book.rating} />
                            <h4>Price:{book.price}</h4>
                            <div><h3>Description:{book.description}</h3></div>

                        </div>
                        {/* <button type="button" className="btn btn-outline-danger details-btn" onClick={() => { dispatch({ type: "REMOVE_BOOK", id: book._id }); props.delete() }}>Delete</button> */}
                        {localStorage.getItem("login") ? <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                            className="details-btn"
                            onClick={() => { bookManager.deleteBook(dispatch, _id); history.push("/") }}
                        >
                            Delete
      </Button> : null}


                    </div>
                    <div className="detail-footer">
                        <Footer />
                    </div>
                </>



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
