import { book } from "../Components/book";
import { user } from "../Components/user";

type State = {
    books: book[],
    users: any[],
    loginUser: boolean
    search: any[]
}

type Action =
    | { type: "ADD_BOOKLIST", book: book }
    | { type: "REMOVE_BOOK", id: string }
    | { type: "BOOKLIST" }
    | { type: "LOGIN", user: { email: string, password: string } }
    | { type: "SEARCH", searchData: any }


const BookReducer = (state: State, action: Action): any => {
    switch (action.type) {
        case 'ADD_BOOKLIST':
            // console.log(action);
            // state.push(action.book);
            // return state;
            return { ...state, books: state.books.concat(action.book) };
        case 'REMOVE_BOOK':
            // console.log(action.title);
            return {
                ...state, books: state.books.filter((book: any) => book._id !== action.id)
            };
        case "BOOKLIST":
            return state.books = [];
        case "LOGIN":
            state.users.map((user: any) => {
                if (user.email === action.user.email && user.password === action.user.password) {
                    state.loginUser = true;
                }
            })
            return state;
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