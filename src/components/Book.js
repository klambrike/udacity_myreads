import React from 'react'
import BookMoveToSelector from 'components/BookMoveToSelector';
import PropTypes from 'prop-types'

const Book = ({ book, bookshelvesNames, onChangeShelf }) => {
    const { title, authors, imageLinks = {}, shelf = 'none' } = book;
    const { thumbnail = '' } = imageLinks;

    const optionSelected = (targetShelf) => {
        onChangeShelf(book.id, targetShelf);
    }

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                <BookMoveToSelector selectedShelfName={shelf}
                                    possibleShelves={bookshelvesNames}
                                    onOptionSelected={optionSelected}
                                    />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors && authors.join(", ")}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    bookshelvesNames: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default Book