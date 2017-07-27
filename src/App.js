import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class App extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false,
    books: [],
    bookshelves: ''
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }
  render() {
    console.log(this.state);
    return (
      <div className='app'>
        <Route exact path='/' render={({ history }) => (
          <ListBooks />
        )}/>
      <Route path='/search' render={({ history }) => (
          <SearchBooks />
        )}
      />
      </div>
    )
  }
}

export default App;
