//import React, { Component } from 'react'
import React, { useState } from 'react';
import { book } from './book'

interface Props {
    handleInput: (newbook: book) => void
}

const AddBook: React.FC<Props> = (Props: any) => {
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
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Cover</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Cover of the Book" onChange={inputCover} />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Title</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Title of the Book" onChange={inputtitle} />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Author</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Author of the Book" onChange={inputauthor} />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Rating</label>
                <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Rating of the Book" onChange={inputrating} />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Price</label>
                <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Price of the Book" onChange={inputPrice} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} onChange={inputdescription} placeholder="Descriptiopn of the Book"></textarea>
            </div>


            {/* <input type="text" onChange={inputimage}/><br/><br/>
                      Enter the Title:<input type="text" onChange={inputtitle}/><br/><br/>
                      Enter the Author:<input type="text" onChange={inputtitle}/><br/><br/>
                      Enter the Rating:<input type="number" onChange={inputrating}/><br/><br/>
                      Enter the Price:<input type="number" onChange={inputPrice}/><br/><br/> */}
            {/* <textarea cols={100} rows={5} onChange={inputdescription} placeholder=" Write Description of Book"></textarea><br/><br/><br/> */}
            <button type="button" className="btn btn-primary" onClick={() => Props.handleInput({ cover: cover, title: title, author: author, rating: rating, price: price, description: description })}>Submit</button>
        </form>

        // </div>
    )
}
export default AddBook

// export default class AddBook extends Component<Props, book> {
//     state: book = {
//         cover: "",
//         title: "",
//         author: "",
//         rating: 0,
//         price: 0,
//         description: ""

//     }

//     render() {
//         // const inputimage = (e: any) => {
//         //     this.setState({
//         //         cover: e.taget.value
//         //     })
//         // }
//         const inputtitle = (e: any) => {
//             this.setState({
//                 title: e.target.value
//             })
//         }
//         const inputauthor = (e: any) => {
//             this.setState({
//                 author: e.target.value
//             })
//         }
//         const inputrating = (e: any) => {
//             this.setState({
//                 rating: e.target.value
//             })
//         }
//         const inputPrice = (e: any) => {
//             this.setState({
//                 price: e.target.value
//             })
//         }
//         const inputdescription = (e: any) => {
//             this.setState({
//                 description: e.target.value
//             })
//         }
//         return (
//             // <div className="add">
//             <form>
//                 <div className="form-group">
//                     <label htmlFor="formGroupExampleInput">Title</label>
//                     <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Title of the Book" onChange={inputtitle} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="formGroupExampleInput2">Author</label>
//                     <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Author of the Book" onChange={inputauthor} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="formGroupExampleInput2">Rating</label>
//                     <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Rating of the Book" onChange={inputrating} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="formGroupExampleInput2">Price</label>
//                     <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Price of the Book" onChange={inputPrice} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="exampleFormControlTextarea1">Description</label>
//                     <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} onChange={inputdescription} placeholder="Descriptiopn of the Book"></textarea>
//                 </div>


//                 {/* <input type="text" onChange={inputimage}/><br/><br/>
//                       Enter the Title:<input type="text" onChange={inputtitle}/><br/><br/>
//                       Enter the Author:<input type="text" onChange={inputtitle}/><br/><br/>
//                       Enter the Rating:<input type="number" onChange={inputrating}/><br/><br/>
//                       Enter the Price:<input type="number" onChange={inputPrice}/><br/><br/> */}
//                 {/* <textarea cols={100} rows={5} onChange={inputdescription} placeholder=" Write Description of Book"></textarea><br/><br/><br/> */}
//                 <button type="button" className="btn btn-primary" onClick={() => this.props.handleInput(this.state)}>Submit</button>
//             </form>

//             // </div>
//         )
//     }
// }
