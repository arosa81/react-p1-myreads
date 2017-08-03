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

  /**
  * @description React lifecycle event that fetches all books from DB.
  *              A promise returns books and sets the state of books array.
  */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
    .catch(e => { console.warn('There was a problem querying the database. Please try later.'); })
  }

  /**
  * @description Updates a book's shelf value.
  *              Makes a request to DB, sets local book shelf value to new one,
  *              filters out same book in state and replaces it with updated local book.
  * @param {object} book - The book object
  * @param {string} shelf - The book shelf category
  */
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }))
    })
  }

  /**
  * @description Render App component to DOM. Composing subcomponents via Routes.
  */
  render() {
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
