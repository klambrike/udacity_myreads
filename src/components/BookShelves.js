import React from 'react'
import BookShelf from 'components/BookShelf';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


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
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
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
                </div>
            </div>
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
    )
}

BookShelves.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object),
    onChangeShelf: PropTypes.func.isRequired
}