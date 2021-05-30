//import React, { Component } from 'react'
import React, { useState, useEffect } from 'react';
import AddBook from './AddBook';
import BookList from './BookList';
import BookDetail from './BookDetail';
import { book } from './book';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import LogIn from './LogIn';
import Register from './Register';


// interface State {
//     books: book[],
//     window: boolean
// }
const BookApp = () => {
    const [books, setBook] = useState<book[]>([]);
    const [searchInput, setSearchInput] = useState("");
    const [window, setWindow] = useState<boolean>(false);
    const [deletewin, setDeleteWindow] = useState(false);
    useEffect(() => {

        let num: any = localStorage.key(localStorage.length - 1);
        // console.log(num);

        for (let i = 0; i <= num; i++) {
            if (localStorage.getItem(i + "") != null) {

                setBook(books => books.concat(JSON.parse(localStorage.getItem(i + "") + "")))
                console.log(books);
            }
        }
    }, [])

    const handleNewBook = (newbook: book) => {
        localStorage.setItem((localStorage.length + ""), JSON.stringify(newbook))
        setBook(books.concat(JSON.parse(localStorage.getItem((localStorage.length - 1) + "") + "")))
        setWindow(true);
        //console.log(window);   
    }
    const ondeleting = (title: string) => {
        //   let num: any = localStorage.key(localStorage.length - 1);
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.getItem(i + "") != null) {
                if (title === JSON.parse(localStorage.getItem(i + "") + "").title) {
                    setBook(books.filter((book: any) => book.title !== JSON.parse(localStorage.getItem(i + "") + "").title))
                    localStorage.removeItem(i + "");
                }
            }
        }
        setDeleteWindow(true);
    }
    useEffect(() => {
        setWindow(false);
    }, [window])
    useEffect(() => {
        setDeleteWindow(false);
    }, [deletewin])


    return (
        // <div className="main">
        //     {this.state.window ? this.bookListwindow() : this.bookAddwindow()}
        // </div>
        <>
            <Router>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>BMS APP</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to='/addBook'>AddBook</Nav.Link>
                        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                        <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path='/'>
                        <BookList list={books}></BookList>
                    </Route>
                    <Route exact path="/addBook">
                        <AddBook handleInput={(newbook: any) => { handleNewBook(newbook) }}></AddBook>
                        {window ? (<Redirect to='/'></Redirect>) : null}
                    </Route>
                    <Route exact path="/register">
                        <Register></Register>
                    </Route>
                    <Route exact path="/login">
                        <LogIn></LogIn>
                    </Route>
                    <Route exact path="/:title">
                        <BookDetail list={books} delete={(title) => { ondeleting(title) }}></BookDetail>
                        {deletewin ? (<Redirect to='/'></Redirect>) : null}
                    </Route>
                </Switch>
            </Router>
        </>

    )
}


export default BookApp;



// export default class BookApp extends Component<{}, State> {
//     state: State = {
//         books: [],
//          window: false
//     }


//     componentWillMount() {
//         let num: any = localStorage.key(localStorage.length - 1);
//         console.log(num);

//         for (let i = 0; i <localStorage.length; i++) {
//             if (localStorage.getItem(i + "") != null) {
//               //  this.setState({
//                     this.state.books.push(JSON.parse(localStorage.getItem(i + "") + ""))
//                // })

//             }

//             //console.log(this.state.books);
//         }
//         console.log(this.state.books);
//     }
//     changeWindow() {
//         this.setState({
//             window: false
//         })
//     }
//     handleNewBook(newbook: book) {
//         localStorage.setItem((localStorage.length + ""), JSON.stringify(newbook))
//         this.setState({
//             books:this.state.books.concat(JSON.parse(localStorage.getItem((localStorage.length-1) + "") + "")),
//             window: true
//         })
//     }
//     // bookListwindow() {
//     //     return (

//     //     )
//     // }

//     // bookAddwindow() {
//     //     return (
//     //         <AddBook handleInput={newbook => { this.handleNewBook(newbook) }}></AddBook>
//     //     )
//     // }
//     ondeleting(title: string) {
//         let num: any = localStorage.key(localStorage.length - 1);
//         for (let i = 0; i <=num; i++) {
//             if(localStorage.getItem(i+"")!=null){
//             if (title === JSON.parse(localStorage.getItem(i + "") + "").title) {
//                 this.setState(
//                     {
//                         books: this.state.books.filter((book: any) => book.title !== JSON.parse(localStorage.getItem(i + "") + "").title)
//                     })

//                 localStorage.removeItem(i + "");
//             }
//         }
//     }
//     //console.log(this.state.books);
//     this.setState({
//         window:true
//     })
// }
//     render() {
//         if(this.state.window){
//             this.setState({
//                 window:false
//             })
//         }
//         return (
//             // <div className="main">
//             //     {this.state.window ? this.bookListwindow() : this.bookAddwindow()}
//             // </div>
//             <>
//                 <Router>
//                     <Navbar bg="primary" variant="dark">
//                         <Navbar.Brand href="#home">BMS APP</Navbar.Brand>
//                         <Nav className="mr-auto">
//                             <Nav.Link as={Link} to="/">Home</Nav.Link>
//                             <Nav.Link as={Link} to='/addBook'>AddBook</Nav.Link>
//                             <Nav.Link as={Link} to='/register'>Register</Nav.Link>
//                             <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
//                         </Nav>
//                         <Form inline>
//                             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                             <Button variant="outline-light">Search</Button>
//                         </Form>
//                     </Navbar>
//                     <Switch>
//                         <Route exact path='/'>
//                             <BookList list={this.state.books}></BookList>
//                         </Route>
//                         <Route exact path="/addBook">
//                             <AddBook handleInput={(newbook: any) => { this.handleNewBook(newbook) }}></AddBook>
//                             {this.state.window?<Redirect to='/'></Redirect>:null}
//                         </Route>
//                         <Route exact path="/register">

//                         </Route>
//                         <Route exact path="/login">

//                         </Route>
//                         <Route exact path="/:title">
//                             <BookDetail list={this.state.books} delete={(title) => { this.ondeleting(title) }}></BookDetail>
//                             {this.state.window?<Redirect to='/'></Redirect>:null}
//                         </Route>
//                     </Switch>
//                 </Router>
//             </>

//         )
//     }
// }
{/* <div className="nav-bar">
                        <a title="Click to add Book" onClick={this.changeWindow.bind(this)}>AddBook</a>
                    </div> */}
{/* <div>
                    <BookList list={this.state.books}></BookList>
                </div> */}