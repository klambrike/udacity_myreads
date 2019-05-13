import React from 'react'
import BookMoveToSelector from 'components/BookMoveToSelector';

const Book = ({ book, bookshelvesNames }) => {
    const { title, authors, imageLinks, shelf } = book;
    const { thumbnail } = imageLinks;

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                <BookMoveToSelector selectedShelfName={shelf} possibleShelves={bookshelvesNames}/>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors.join(", ")}</div>
        </div>
    )
}

export default Book