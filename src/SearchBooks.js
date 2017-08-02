import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './util/BooksAPI';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import Book from './Book.js'

class  SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array,
    onChangeShelf: PropTypes.func.isRequired,
  }
  state = {
    query: '',
    books: []
  }
  updateQuery = (query) => {
    if (query) {
      this.setState({ query: query.trim() });
      BooksAPI.search(query)
        .then(books => {
          if (books.error) {
            books = [];
          }
          console.log('searched books', books);
          books.map(book => (this.props.books.filter(b => b.id === book.id)
                              .map(b => book.shelf = b.shelf)))
          this.setState({ books });
      })
    } else {
      this.setState({ query: '', books: [] })
    }
  }
  render() {
    const { books, onChangeShelf } = this.props;
    const { query, queriedBooks } = this.state;
    let showingBooks;


    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              */}
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.books.sort(sortBy('title'))
                //.filter(book => book.shelf === 'none')
                  .map(book => (
                  <Book
                    key={book.id}
                    book={book}
                    onChangeShelf={onChangeShelf}
                  />
              ))}
            </ol>
          </div>
        </div>
        <div className='list-books'>
          <ol className="books-grid">
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;
