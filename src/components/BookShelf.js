import React from "react";
import BookGrid from "components/BookGrid";
import { getShelfNameFromId } from "components/BookShelves";

const BookShelf = ({books, shelfName, bookshelvesNames}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{getShelfNameFromId(shelfName)}</h2>
            <div className="bookshelf-books">
                <BookGrid books={books} bookshelvesNames={bookshelvesNames} />
            </div>
        </div>
    );
}

export default BookShelf