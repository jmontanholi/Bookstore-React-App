import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categories';

const App = () => (
  <Router>
    <Link to="/books">Books</Link>
    <Link to="/categories">Categories</Link>
    <Switch>
      <Route path="/books">
        <Books />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
  </Router>
);

export default App;
