import React from 'react'
import SearchResult from '../SearchResult';
import SearchBar from './SearchBar';

const Search = ({ searchTerm, onSearch, searchedBooks, shelfNames, onChangeShelf, onCloseSearch }) => {
    return (
        <div className="search-books">
            <SearchBar
                searchTerm={searchTerm}
                onSearch={onSearch}
                onCloseSearch={onCloseSearch}
            />
            <SearchResult
                searchedBooks={searchedBooks}
                shelfNames={shelfNames}
                onChangeShelf={onChangeShelf}
            />
        </div>
    )
}

export default Search