import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categories';
import NavBar from './components/navBar';

ReactDOM.render(
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
  </Router>,

  document.getElementById('root'),
);
