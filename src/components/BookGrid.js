import React from 'react'
import Book from 'components/Book';
import PropTypes from 'prop-types'

const BookGrid = ({ books, bookshelvesNames }) => {

    return (
        <ol className="books-grid">
            {books && books.map(book => (
                <li key={book.id}>
                    <Book book={book} bookshelvesNames={bookshelvesNames}/>
                </li>
            ))}
        </ol>
    )
}

BookGrid.propTypes = {
    books: PropTypes.array
}

export default BookGrid