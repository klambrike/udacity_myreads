import React, { Fragment } from 'react'
import BookShelf from 'components/BookShelf';

export const BookShelves = ({ bookshelvesNames, books }) => (
    <Fragment>
        {bookshelvesNames && bookshelvesNames.map(shelfName => (
            <BookShelf
                key={shelfName}
                books={books.filter(book => book.shelf === shelfName)}
                shelfName={shelfName}
                bookshelvesNames={bookshelvesNames} />
        ))}
    </Fragment>
)

export const shelfNames = [
    {
        literalName: "Currently reading",
        id: "currentlyReading"
    },
    {
        literalName: "Want to read",
        id: "wantToRead"
    },
    {
        literalName: "Read",
        id: "read"
    },
    {
        literalName: "None",
        id: "none"
    }
]

export const getShelfNameFromId = (shelfNameId) => {
    return shelfNames.filter(shelf => shelf.id === shelfNameId)[0].literalName
}