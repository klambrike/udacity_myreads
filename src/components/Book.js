import React from 'react'
import BookMoveToSelector from 'components/BookMoveToSelector';
import PropTypes from 'prop-types'

const Book = ({ book, bookshelvesNames }) => {
    const { title, authors, imageLinks, shelf } = book;
    const { thumbnail } = imageLinks;

    const optionSelected = () => {

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
            <div className="book-authors">{authors.join(", ")}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    bookshelvesNames: PropTypes.array.isRequired
}

export default Book