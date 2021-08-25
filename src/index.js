import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Books from './components/books';
import Categories from './components/categories';
import NavBar from './components/navBar';
import getBooks from './redux/slices/bookSlice';

getBooks();
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
