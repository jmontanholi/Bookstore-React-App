import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBooks from './addBooks';
import { removeBook } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state);
  const dispatch = useDispatch();
  const displayBooks = [];

  const remove = (e) => {
    dispatch(removeBook(e.target.id));
  };

  books.books.forEach((book) => {
    displayBooks.push(
      <li key={book.id}>
        <p>
          Title:
          { book.title }
        </p>
        <p>
          Author:
          { book.author }
        </p>
        <button type="button" id={books.books.indexOf(book)} onClick={(e) => { remove(e); }}>Remove Book</button>
      </li>,
    );
  });

  return (
    <div>
      <div>
        <h2>Books</h2>
        <ul>
          {displayBooks}
        </ul>
      </div>
      <div>
        <AddBooks />
      </div>
    </div>
  );
};

export default Books;
