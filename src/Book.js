import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  /*
    Validating for correct data types that is passed to component
  */
  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  }

  /**
  * @description Render Book component to DOM.
  */
  render() {
    // object destructuring
    const { book, onChangeShelf } = this.props;
    return (
      <div>
        <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: 'http://via.placeholder.com/128x192'})` }}></div>
            <div className="book-shelf-changer">
              /*
                On event change invoke the updateShelf function from App component.
              */
              <select value={book.shelf} onChange={(event) => onChangeShelf(book, event.target.value)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
        </li>
      </div>
    )
  }
}

export default Book;
