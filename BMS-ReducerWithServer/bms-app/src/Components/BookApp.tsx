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
import Footer from './Footer';





const BookApp = () => {
    const [books, setBook] = useState<book[]>([]);
    //   const [searchInput, setSearchInput] = useState("");
    const [window, setWindow] = useState<boolean>(false);
    const [deleteWindow, setDeleteWindow] = useState(false);
    const [loginFailed, setLoginFailed] = useState<string>("");
    const [regSuccessful, setSuccessful] = useState("");
    const [loginUser, setLoginUser] = useState(false);

    const handleNewUser = async (newUser: user) => {
        await axios.post('http://localhost:5000/userdetails/add', newUser)
        setSuccessful("done");
        setWindow(true);
    }
    useEffect(() => {

        if (localStorage.getItem("login")) {
            setLoginUser(true);
        }

    }, [window, deleteWindow]);

    const authentication = async (loginDetails: any) => {
        let auth = await fetch(`http://localhost:5000/userDetails/login`, {
            method: "POST",
            body: JSON.stringify({ email: loginDetails.email, password: loginDetails.password }),
            headers: { "Content-Type": "application/json" }
        });
        let valid = await auth.json();
        console.log(valid);
        if (valid == "Invalid") {
            setLoginUser(false);
            setLoginFailed("error");
        } else {
            localStorage.setItem("login", valid)
            setLoginUser(true);
            setWindow(true);
            setLoginFailed("Correct");
        }
    }
    const handleNewBook = async () => {
        setWindow(true);
    }
    useEffect(() => {
        setWindow(false);
    }, [window])
    useEffect(() => {
        setDeleteWindow(false);
    }, [deleteWindow])

    const logOut = async () => {
        setLoginUser(false);
        alert("LogedOut Successfully")
        localStorage.clear();
    }
    return (

        <>

            <BookContextProvider>
                <div>

                    <Router>
                        <Navbar className="fixed-top" bg="primary" variant="dark" >
                            <Navbar.Brand><i>BOOK MANAGEMENT SYSTEM</i></Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                {loginUser ? <Nav.Link as={Link} to='/addBook'>AddBook</Nav.Link> : null}
                                {loginUser ? null : <Nav.Link as={Link} to='/register'>SignUp</Nav.Link>}
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
                                <LogIn valid={loginFailed} handleUserNamePasswordInput={(loginDetails: any) => authentication(loginDetails)}></LogIn>
                                {window ? (<Redirect to='/'></Redirect>) : null}
                            </Route>
                            <Route exact path="/:_id">
                                <BookDetail list={books}></BookDetail>
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


