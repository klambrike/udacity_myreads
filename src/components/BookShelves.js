import React, { Fragment } from 'react'
import BookShelf from 'components/BookShelf';
import PropTypes from 'prop-types'


export const shelfNames = [
    {
        literalName: "Currently reading",
        id: "currentlyReading",
        isVisible: true
    },
    {
        literalName: "Want to read",
        id: "wantToRead",
        isVisible: true
    },
    {
        literalName: "Read",
        id: "read",
        isVisible: true
    },
    {
        literalName: "None",
        id: "none",
        isVisible: false
    }
]

export const BookShelves = ({ books, onChangeShelf }) => {

    return (
    <Fragment>
        {shelfNames.map(shelfName => (
            shelfName.isVisible &&
            <BookShelf
                key={shelfName.id}
                books={books.filter(book => book.shelf === shelfName.id)}
                shelfName={shelfName.literalName}
                bookshelves={shelfNames}
                onChangeShelf={onChangeShelf}
            />
        ))}
    </Fragment>
)}

BookShelves.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object),
    onChangeShelf: PropTypes.func.isRequired
}