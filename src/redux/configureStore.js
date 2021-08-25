// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import booksReducer from './books/books';

const reducer = combineReducers({
  books: booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(ReduxThunk, logger),
);

export default store;
// https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YjNKpt0nstX4A8fNqIZ4/books
// {
//   "item_id": "item1",
//   "title": "The Great Gatsby",
//   "category": "Fiction"
// }
