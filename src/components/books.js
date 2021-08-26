import React from 'react';
import AddBooks from './addBooks';
import BookItem from './bookItem';
import style from './books.module.css';

const Books = () => (
  <div className={style.div}>
    <div className={style.bookDiv}>
      <AddBooks />
    </div>
    <div>
      <ul className={style.ul}>
        <BookItem />
      </ul>
    </div>
  </div>
);

export default Books;
