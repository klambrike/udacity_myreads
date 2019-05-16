import React from 'react'
import '../App.css'
import * as BooksAPI from 'service/BooksAPI'
import { BookShelves, shelfNames } from 'components/BookShelves';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    searchedBooks: [],
    books: [],
    showSearchPage: false
  }

  onSearch = async (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    })

    const searchedBooks = await BooksAPI.search(searchTerm);

    this.setState({
      searchedBooks: searchedBooks
    })
  }

  onChangeShelf = async (bookId, targetShelf) => {
    await BooksAPI.update({ id: bookId }, targetShelf);
    this.loadBooks();
  }

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks = async () => {
    const books = await BooksAPI.getAll()

    this.setState({
      books: books
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search
            searchTerm={this.state.searchTerm}
            onSearch={this.onSearch}
            searchedBooks={this.state.searchedBooks}
            shelfNames={shelfNames}
            onChangeShelf={this.onChangeShelf}
            />
        ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelves
                    books={this.state.books}
                    onChangeShelf={this.onChangeShelf}
                  />
                </div>
              </div>
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default BooksApp
