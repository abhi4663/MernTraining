import React from 'react'
import { book } from './book';
import { Card } from 'react-bootstrap';
import StarRating from './StarRating';
import Footer from './Slider';

interface Prop {
    book: book;
}

//function OneBook(props:Props)
const OneBook: React.FC<Prop> = (props: Prop) => {
    //  console.log(props);

    return (
        <>
            {/* <div className='container' style={{ textDecoration: 'none' }}>
                <div className='row'>
                    <div className="col">
                        <img src={props.book.cover} title={props.book.title}></img>
                    </div>
                    <div className="col top">
                        <h4>Title:{props.book.title}</h4>
                        <h4>Author:{props.book.author}</h4>
                        <h4>Rating:{props.book.rating}</h4>
                        <h4>Price:{props.book.price}</h4>
                        <hr />
                    </div>
                </div>
            </div> */}
            <div>
                <Card style={{ width: '18rem' }} className="box">
                    {/* <img src={props.book.cover} title={props.book.title}></img> */}
                    <Card.Img className="box-image" src={props.book.cover} title={props.book.title} />
                    <Card.Body className="box-body">
                        <Card.Text>
                            <h4>{props.book.title}</h4>
                            {/* <h4>Author:{props.book.author}</h4> */}
                            <StarRating value={props.book.rating}></StarRating>
                            {/* <h4>Price:{props.book.price}</h4> */}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            {/* <div className='list'>
            <img src={props.book.cover} title={props.book.title}></img>
            <span className='side-list'>
                <h2>Title:{props.book.title}</h2>
                <h2>Author:{props.book.author}</h2>
                <h2>Rating:{props.book.rating}</h2>
                <h2>Price:{props.book.price}</h2>
            </span>
        </div> */}
        </>
    )
}

export default OneBook

