/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { removeBook } from '../redux/books/books';
import getBooks from '../redux/slices/bookSlice';

const BookItem = () => {
  const state = useSelector((state) => state);
  const { books } = state.books;
  const booksObject = books;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const remove = (e) => {
    dispatch(removeBook(e.target.id));
  };
  const properties = Object.getOwnPropertyNames(booksObject);
  const displayBooks = [];
  properties.forEach((x) => {
    if (booksObject[x][0] !== undefined) {
      booksObject[x].map((book) => (
        displayBooks.push(
          <li id={x} key={x}>
            <p>
              Title:
              { ' ' }
              { book.title }
            </p>
            <p>
              Category:
              { ' ' }
              { book.category }
            </p>
            <button type="button" id={x} onClick={(e) => { remove(e); }}>Remove Book</button>
          </li>,
        )
      ));
    }
  });
  return (
    <div>
      { displayBooks }
    </div>
  );
};

export default BookItem;
