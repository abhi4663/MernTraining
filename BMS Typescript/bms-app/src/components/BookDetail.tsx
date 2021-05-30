
import { useParams } from 'react-router';
import { book } from './book'
import React from 'react'


interface Props {
    list: book[],
    delete: (title: any) => void
}

const BookDetail: React.FC<Props> = (props: Props) => {
    const { title }: any = useParams();

    let detailbook = props.list.map((book, index) => {
        if (book.title === title) {
            return (
                <>
                    <div className="details">
                        <img src={book.cover} title={book.title}></img>
                        <h4>Title:{book.title}</h4>
                        <h4>Author:{book.author}</h4>
                        <h4>Rating:{book.rating}</h4> 
                        <h4>Price:{book.price}</h4>
                        <h4>Description:{book.description}</h4>
                        <button type="button" className="btn btn-outline-danger" onClick={() => props.delete(book.title)}>Delete</button>
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
