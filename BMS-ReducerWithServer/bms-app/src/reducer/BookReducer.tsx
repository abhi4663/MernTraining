import { book } from "../Components/book";
import { user } from "../Components/user";

type State = {
    books: book[],
    users: any[],
    user: boolean
    search: any[]
}

type Action =
    | { type: "ADD_BOOKLIST", book: book }
    | { type: "REMOVE_BOOK", id: string }
    | { type: "BOOKLIST", books: book[] }
    | { type: "LOGIN", user: { email: string, password: string } }
    | { type: "SEARCH", searchData: any }
    | { type: "LOGOUT" }


const BookReducer = (state: State, action: Action): any => {
    switch (action.type) {
        case 'ADD_BOOKLIST':
            // console.log(action);
            // state.push(action.book);
            // return state;
            return { ...state, books: [...state.books, action.book] };
        case 'REMOVE_BOOK':
            // console.log(action.title);
            return {
                ...state, books: state.books.filter((book: any) => book._id !== action.id)
            };
        case "BOOKLIST":
            state.books = []
            return {
                ...state,
                books: [...state.books.concat(action.books)]
            }
        case "LOGIN":
            return {
                ...state,
                user: true
            };
        case "LOGOUT":
            return {
                ...state,
                user: false
            };
        case "SEARCH":
            return {
                ...state,
                search: [action.searchData]
            }
        default:
            return state;
    }
};
export default BookReducer;