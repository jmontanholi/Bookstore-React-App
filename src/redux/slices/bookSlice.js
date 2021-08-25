const GET_BOOKS = 'books/bookslice/GET_BOOKS';
const GET_BOOKS_SUCCESS = 'books/bookslice/GET_BOOKS_SUCCESS';
const GET_BOOKS_ERR = 'books/bookslice/GET_BOOKS_ERR';
const appUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YjNKpt0nstX4A8fNqIZ4/books';

const getBooks = () => async (dispatch) => {
  dispatch({ type: GET_BOOKS });
  const response = await fetch(appUrl);
  const data = await response.json();
  return dispatch({ type: GET_BOOKS_SUCCESS, data });
};

export {
  getBooks as default,
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERR,
};
