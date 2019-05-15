import React from "react";
import BookGrid from "components/BookGrid";
import PropTypes from 'prop-types'

const BookShelf = ({ books, shelfName, bookshelves, onChangeShelf }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <BookGrid
                    books={books}
                    bookshelvesNames={bookshelves}
                    onChangeShelf={onChangeShelf}
                />
            </div>
        </div>
    );
}

BookShelf.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object),
    shelfName: PropTypes.string,
    bookshelvesNames: PropTypes.arrayOf(PropTypes.object),
    onChangeShelf: PropTypes.func.isRequired
}

export default BookShelf