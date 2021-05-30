import React, { useReducer } from "react";
import BookReducer from "../reducer/BookReducer";
import { book } from '../Components/book';
// import * as actions from '../reducer/ReducerAction';

interface bookContext {
  booksArray: {
    books: book[],
    users: any[],
    user: boolean,
    search: any[]
  },
  // actions: {
  //   addingBooks: (dispatch: any, book: book) => void,
  //   gettingBooks: (dispatch: any) => void,
  // },
  dispatch: React.Dispatch<any>
}

const initialState = {
  books: [
  ],
  users: [
    {
      name: "Abhi",
      email: "abhi@gmail.com",
      password: "qwert"
    },
    {
      name: "Abhi...",
      email: "abhi123@gmail.com",
      password: "qwert123"
    }
  ],
  loginUser: false,
  search: []
}




const BookContext = React.createContext<bookContext>({} as bookContext);


const BookContextProvider = (props: any) => {
  const [booksArray, dispatch] = useReducer(BookReducer, initialState, () => {
    return initialState;
  });
  console.log(booksArray);

  return (
    <BookContext.Provider value={{ booksArray, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};



const BookConsumer = BookContext.Consumer

export { BookContextProvider, BookConsumer }
export default BookContext;
