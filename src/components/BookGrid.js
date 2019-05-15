import React from 'react'
import Book from 'components/Book';
import PropTypes from 'prop-types'

const BookGrid = ({ books, bookshelvesNames, onChangeShelf }) => {

    return (
        <ol className="books-grid">
            {books && books.map(book => (
                <li key={book.id}>
                    <Book
                        book={book}
                        bookshelvesNames={bookshelvesNames}
                        onChangeShelf={onChangeShelf}
                    />
                </li>
            ))}
        </ol>
    )
}

BookGrid.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object),
    bookshelvesNames: PropTypes.arrayOf(PropTypes.object),
    onChangeShelf: PropTypes.func.isRequired
}

export default BookGrid