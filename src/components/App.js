import React from 'react'
import '../App.css'
import { Route } from "react-router-dom";
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
    books: []
  }

  onSearch = async (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    })

    let searchedBooks = []
    const searchResponse = await BooksAPI.search(searchTerm);
    if (searchResponse && !searchResponse.error) {
      searchedBooks = searchResponse
    }


    this.setState({
      searchedBooks: this.addSheldVariablesToSearchedBooks(searchedBooks, this.state.books)
    })
  }

  addSheldVariablesToSearchedBooks = (searchedBooks, booksInShelves = []) => (
    searchedBooks.map(searchedBook => (
      {
        ...searchedBook,
        shelf: this.getShelfOfBookById(searchedBook.id, booksInShelves)
      }
    ))
  )

  getShelfOfBookById = (bookId, booksInShelves) => {
    const book = this.findBookById(bookId, booksInShelves);
    return !!book ? book.shelf : 'none';
  }

  findBookById = (bookId, booksInShelves) => (
    booksInShelves.find(book => book.id === bookId)
  )

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
        <Route path='/search' render={() => (
          <Search
            searchTerm={this.state.searchTerm}
            onSearch={this.onSearch}
            searchedBooks={this.state.searchedBooks}
            shelfNames={shelfNames}
            onChangeShelf={this.onChangeShelf}
          />
        )}
        />
        <Route exact path='/' render={() => (
          <BookShelves
            books={this.state.books}
            onChangeShelf={this.onChangeShelf}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
