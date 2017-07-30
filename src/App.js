import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './util/BooksAPI';
import './App.css';

class App extends Component {
  state = {
    books: [],
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }
  updateShelf = (book, shelf) => {
    console.log(book, shelf);
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }))
    })
  }
  render() {
    console.log(this.state);
    return (
      <div className='app'>
        <Route exact path='/' render={({ history }) => (
          <ListBooks
            books={this.state.books}
            onChangeShelf={this.updateShelf}
          />
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
