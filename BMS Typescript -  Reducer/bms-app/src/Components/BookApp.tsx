//import React, { Component } from 'react'
import React, { useState, useEffect } from 'react';
import AddBook from './AddBook';
import BookList from './BookList';
import BookDetail from './BookDetail';
import { book } from './book';
import { user } from './user';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import LogIn from './LogIn';
import Register from './Register';
import ShowDetails from './ShowDetails';
import axios from 'axios';
import './book.css'
import { BookContextProvider } from '../context/BookContext';



const BookApp = () => {
    const [books, setBook] = useState<book[]>([]);
    //   const [searchInput, setSearchInput] = useState("");
    const [window, setWindow] = useState<boolean>(false);
    const [deleteWindow, setDeleteWindow] = useState(false);
    const [loginFailed, setLoginFailed] = useState<string>("");
    const [regSuccessful, setSuccessful] = useState("");
    const [loginUser, setLoginUser] = useState(false);


    const handleNewUser = async (newUser: user) => {
        setSuccessful("done");
        setWindow(true);
    }

    const handleUserNamePassword = async () => {

        setLoginUser(true);
        setWindow(true);
        // setLoginFailed("Correct")


    }
    const handleNewBook = async () => {
        setWindow(true);
    }
    const onDeleting = async () => {
        setDeleteWindow(true);
    }
    useEffect(() => {
        setWindow(false);
    }, [window])
    useEffect(() => {
        setDeleteWindow(false);
    }, [deleteWindow])

    const logOut = async () => {
        setLoginUser(false);

    }
    return (

        <>
            <BookContextProvider>
                <div>
                    <Router>
                        <Navbar bg="primary" variant="dark">
                            <Navbar.Brand>BMS APP</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                {loginUser ? <Nav.Link as={Link} to='/addBook'>AddBook</Nav.Link> : null}
                                {loginUser ? null : <Nav.Link as={Link} to='/register'>Register</Nav.Link>}
                                {loginUser ? null : <Nav.Link as={Link} to="/login">LogIn</Nav.Link>}
                                {loginUser ? <Nav.Link as={Link} to="/" onClick={() => logOut()}>LogOut</Nav.Link> : null}

                            </Nav>
                        </Navbar>

                        <Switch>
                            <Route exact path='/'>
                                <BookList list={books}></BookList>

                            </Route>
                            <Route exact path="/addBook">
                                <AddBook handleBookInput={() => { handleNewBook() }}></AddBook>
                                {window ? (<Redirect to='/'></Redirect>) : null}
                            </Route>
                            <Route exact path="/register">
                                <Register success={regSuccessful} handleUserInput={(newUser: any) => { handleNewUser(newUser) }}></Register>
                            </Route>
                            <Route exact path="/login">
                                <LogIn valid={loginFailed} handleUserNamePasswordInput={() => { handleUserNamePassword() }}></LogIn>
                                {window ? (<Redirect to='/'></Redirect>) : null}
                            </Route>
                            <Route exact path="/:_id">
                                {loginUser ? <BookDetail list={books} delete={() => { onDeleting() }}></BookDetail> : <ShowDetails></ShowDetails>}
                                {deleteWindow ? (<Redirect to='/'></Redirect>) : null}
                            </Route>
                        </Switch>
                    </Router>

                </div>
            </BookContextProvider>

        </>

    )
}


export default BookApp;


