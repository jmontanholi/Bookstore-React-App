/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { removeBook } from '../redux/books/books';
import getBooks from '../redux/slices/bookSlice';
import style from './bookItem.module.css';

const BookItem = () => {
  const state = useSelector((state) => state);
  const { books } = state.books;
  const booksObject = books;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const remove = async (e) => {
    dispatch(removeBook(e.target.id));
    await dispatch(getBooks());
    document.location.reload(true);
  };
  const properties = Object.getOwnPropertyNames(booksObject);
  const displayBooks = [];
  properties.forEach((x) => {
    if (booksObject[x][0] !== undefined) {
      booksObject[x].map((book) => (
        displayBooks.push(
          <li id={x} key={x} className={style.li}>
            <p className={`${style.category} ${style.font1Bold}`}>
              { book.category }
            </p>
            <p className={`${style.title} ${style.font2Bold}`}>
              { book.title }
            </p>
            <button className={style.button} type="button" id={x} onClick={(e) => { remove(e); }}>Remove Book</button>
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
