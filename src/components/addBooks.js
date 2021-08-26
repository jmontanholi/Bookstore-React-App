import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as generateId } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import getBooks from '../redux/slices/bookSlice';
import style from './addBooks.module.css';

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
    <div className={style.div}>
      <h2 className={`${style.title} ${style.font1Bold}`}>ADD NEW BOOK</h2>
      <form className={style.form}>
        <input className={`${style.input1} ${style.input} ${style.font1Reg}`} type="text" id="title" placeholder="Book title" value={title} onChange={(e) => { handleChange(e); }} />
        <input className={`${style.input2} ${style.input} ${style.font1Reg}`} type="text" id="category" placeholder="Category" value={category} onChange={(e) => { handleChange(e); }} />
        <button className={style.button} type="button" onClick={() => { add(); }}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBooks;
