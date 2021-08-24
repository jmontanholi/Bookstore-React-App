import React from 'react';
import AddBooks from './addBooks';
import BookItem from './bookItem';

const Books = () => (
  <div>
    <div>
      <h2>Books</h2>
      <ul>
        <BookItem />
      </ul>
    </div>
    <div>
      <AddBooks />
    </div>
  </div>
);

export default Books;
