import React from 'react'
import SearchResult from '../SearchResult';
import SearchBar from './SearchBar';

const Search = ({ searchTerm, onSearch, searchedBooks, shelfNames, onChangeShelf }) => {
    console.log(`--- SEARCH ---`);
    console.log(`searchTerm: ${searchTerm}`);
    console.log(`searchedBooks: ${JSON.stringify(searchedBooks)}, shelfNames: ${JSON.stringify(shelfNames)}`);
    return (
        <div className="search-books">
            <SearchBar
                searchTerm={searchTerm}
                onSearch={onSearch}
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