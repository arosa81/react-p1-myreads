import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import BookShelf from './BookShelf';
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
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Route exact path='/' render={({ history }) => (
          <BookShelf
            books={this.state.books}
            onChangeShelf={this.updateShelf}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
            <SearchBooks
              books={this.state.books}
              onChangeShelf={this.updateShelf}
            />
          )}
        />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default App;
