import React from 'react'
import { shallow } from 'enzyme'
import Book from 'components/Book'

const dummyBook = {
    id: "jAUODAAAQBAJ",
    title: "Die praktische Einführung in React, React Router und Redux",
    authors: ["Nils Hartmann", "Oliver Zeigermann"],
    shelf: "read",
    imageLinks: {
        thumbnail: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
    }
}

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Book book={dummyBook} bookshelvesNames={[]} onChangeShelf={() => {}}/>)
})


it('shows title from props', () => {
    expect(wrapper.text()).toContain(dummyBook.title);
})

it('shows multiple authors from props', () => {
    expect(wrapper.text()).toContain("Nils Hartmann, Oliver Zeigermann");
})

it('shows empty div for authors if no authors exist for the book', () => {
    wrapper = shallow(<Book book={{...dummyBook, authors: null}} bookshelvesNames={[]} onChangeShelf={() => {}}/>);
    expect(wrapper.find('.book-authors').text()).toContain("");
})