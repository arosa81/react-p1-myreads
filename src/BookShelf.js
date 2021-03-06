import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import Book from './Book.js'

class  BookShelf extends Component {
  /*
    Validating for correct data types that is passed to component
  */
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  }

  /**
  * @description Render Shelf component to DOM. Composing Book component via Book element.
  */
  render() {
    const shelfs=[
      {
        name: 'currentlyReading',
        title: 'Currently Reading',
      },
      {
        name: 'wantToRead',
        title: 'Want to Read',
      },
      {
        name: 'read',
        title: 'Read',
      }
    ];
    // object destructuring
    const { books, onChangeShelf } = this.props;
    return (
      <div>
        <div className="list-books">
          <div className="list-books-content">
            {/*
              Mapping through shelf array to create shelf DOM structures.
            */}
            {shelfs.map((shelf, i) => (
              <div key={i} className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {/*
                      Mapping through books prop, filtering based on the shelf
                      that they belong to, and adding Book element to DOM.
                    */}
                    {books.sort(sortBy('title'))
                      .filter(book => book.shelf === shelf.name)
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
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf;
