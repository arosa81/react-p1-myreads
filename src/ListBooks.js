import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CurrentlyReadingShelf from './CurrentlyReadingShelf';
import WantToReadShelf from './WantToReadShelf';
import ReadShelf from './ReadShelf';

class  ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  }
  render() {
    const { books, onChangeShelf } = this.props;
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <CurrentlyReadingShelf
                books={ this.props.books }
                onChangeShelf={ onChangeShelf }
              />
              <WantToReadShelf
                books={ this.props.books }
                onChangeShelf={ onChangeShelf }
              />
              <ReadShelf
                books={ this.props.books }
                onChangeShelf={ onChangeShelf }
              />
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;
