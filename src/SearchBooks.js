import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './util/BooksAPI';
import sortBy from 'sort-by';
import Book from './Book.js'

class  SearchBooks extends Component {
  /*
    Validating for correct data types that is passed to component
  */
  static propTypes = {
    books: PropTypes.array,
    onChangeShelf: PropTypes.func.isRequired,
  }

  state = {
    query: '',
    books: []
  }

  /**
  * @description Updates search query and fetches books based on search term.
  * @param {string} query - Inputted search query
  */
  updateQuery = (query) => {
    if (query) {
      this.setState({ query: query.trim() });
      BooksAPI.search(query)
        .then(books => {
          /*
            for each book in search response:
              1. filter for matching book ids in book shelf elements
              2. assign it's shelf state to queried books array
          */
          books.map(book => (this.props.books.filter(b => b.id === book.id)
                              .map(b => book.shelf = b.shelf)))
          this.setState({ books });
        })
        .catch(e => {
          console.warn('query returned no books: ', e.response);
          this.setState({ books: [] })
        })
    } else {
      this.setState({ query: '', books: [] })
    }
  }
  render() {
    // object destructuring
    const { onChangeShelf } = this.props;
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
