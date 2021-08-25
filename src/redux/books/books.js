import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_ERR } from '../slices/bookSlice';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK: {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    }
    case GET_BOOKS:
      console.log(action.payload);
      return { ...state, loading: true };
    case GET_BOOKS_SUCCESS:
      console.log(action.payload);
      return { ...state, loading: false, books: action.payload };
    case GET_BOOKS_ERR:
      console.log(action.payload);
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { reducer as default, addBook, removeBook };
