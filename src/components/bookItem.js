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
            <div className={style.bookDiv}>
              <p className={`${style.category} ${style.font1Bold}`}>
                { book.category }
              </p>
              <p className={`${style.title} ${style.font2Bold}`}>
                { book.title }
              </p>
              <button className={style.remove} type="button" id={x} onClick={(e) => { remove(e); }}>Remove Book</button>
            </div>
            <div className={style.graphicDiv}>
              <div className={style.graphic} />
              <div>
                <p className={`${style.percentage} ${style.font1Reg}`}>0%</p>
                <p className={`${style.completed} ${style.font1Reg}`}>Completed</p>
              </div>
            </div>
            <div className={style.updateDiv}>
              <h3 className={`${style.current} ${style.font2Light}`}>Current Chapter</h3>
              <p className={`${style.chapter} ${style.font2Light}`}>Introduction</p>
              <button type="button" className={style.update}>UPDATE PROGRESS</button>
            </div>
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
