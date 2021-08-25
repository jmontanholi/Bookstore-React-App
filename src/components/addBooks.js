import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as generateId } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import getBooks from '../redux/slices/bookSlice';

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const newBook = {
    id: generateId(),
    title,
    category,
  };
  const dispatch = useDispatch();

  const add = async () => {
    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
    await dispatch(getBooks());
    document.location.reload(true);
  };

  const handleChange = (event) => {
    if (event.target.id === 'title') {
      setTitle(event.target.value);
    } else if (event.target.id === 'category') {
      setCategory(event.target.value);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="title">
          Title:
          <input type="text" id="title" value={title} onChange={(e) => { handleChange(e); }} />
        </label>
        <label htmlFor="category">
          Category:
          <input type="text" id="category" value={category} onChange={(e) => { handleChange(e); }} />
        </label>
      </form>
      <button type="button" onClick={() => { add(); }}>Add Book</button>
    </div>
  );
};

export default AddBooks;
