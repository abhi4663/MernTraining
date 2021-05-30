import axios from 'axios';
import { book } from './Components/book';

export class BookManager {
    getAllBooks(dispatch: any) {
        axios.get("http://localhost:5000/books")
            .then((res) => {
                dispatch({ type: "BOOKLIST", books: res.data })
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    addBooks = async (dispatch: any, book: any, token: any) => {
        let check = await axios.post("http://localhost:5000/books/add", book, {
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            }
        })
        if (check.status === 200) {
            console.log("add")
            dispatch({ type: "ADD_BOOKLIST", book: book })
        } else {
            console.log(Error);
        }
    }
    deleteBook = async (dispatch: any, id: any) => {
        let token = "Bearer " + localStorage.getItem("login");
        let check = await axios.delete(`http://localhost:5000/books/` + id, {
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            }
        })
        if (check.status === 200) {
            dispatch({ type: "REMOVE_BOOK", deleteBook: id })
        } else {
            console.log(Error);
        }
    }
}
