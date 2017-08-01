import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import Book from './Book.js'

class  BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  }
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
    const { books, onChangeShelf } = this.props;
    return (
      <div>
        <div className="list-books">
          <div className="list-books-content">
            {shelfs.map((shelf, i) => (
              <div key={i} className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
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
