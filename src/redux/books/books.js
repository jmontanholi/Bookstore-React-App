import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_ERR } from '../slices/bookSlice';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const appUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YjNKpt0nstX4A8fNqIZ4/books';

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
      fetch(appUrl, {
        method: 'POST',
        body: JSON.stringify({
          item_id: action.payload.id,
          title: action.payload.title,
          category: action.payload.category,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return state;
    case REMOVE_BOOK: {
      fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YjNKpt0nstX4A8fNqIZ4/books/${action.payload}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return state;
    }
    case GET_BOOKS:
      return { ...state, loading: true };
    case GET_BOOKS_SUCCESS:
      return { ...state, loading: false, books: action.data };
    case GET_BOOKS_ERR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export { reducer as default, addBook, removeBook };
