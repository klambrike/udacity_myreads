import React from 'react'
import BookGrid from './components/BookGrid';
import PropTypes from 'prop-types'

const SearchResult = ({searchedBooks, shelfNames, onChangeShelf}) => (
    <div className="search-books-results">
        <BookGrid
            books={searchedBooks}
            bookshelvesNames={shelfNames}
            onChangeShelf={onChangeShelf}
        />
    </div>
)

SearchResult.propTypes = {
    searchedBooks: PropTypes.arrayOf(PropTypes.object),
    shelfNames: PropTypes.arrayOf(PropTypes.object),
    onChangeShelf: PropTypes.func.isRequired
}

export default SearchResult