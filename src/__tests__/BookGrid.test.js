import React from 'react'
import { shallow } from 'enzyme'
import BookGrid from '../components/BookGrid';
import Book from '../components/Book';

const dummyBooks = [
    {
        id: "nggnmAEACAAJ",
        title: "The Linux Command Line",
        authors: ["William E. Shotts, Jr."],
        cover: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
    },
    {
        id: "jAUODAAAQBAJ",
        title: "Die praktische Einführung in React, React Router und Redux",
        authors: ["Nils Hartmann", "Oliver Zeigermann"],
        cover: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
    },
    {
        id: "1wy49i-gQjIC",
        title: "The Bankers Who Broke the World",
        authors: ["Liaquat Ahamed"],
        cover: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
    }
]

it('shows empty grid of books', () => {
    const wrapped = shallow(<BookGrid bookshelvesNames={[]}/>);

    expect(wrapped.find(Book).length).toEqual(0);
})

it('shows 3 books in grid based on props', () => {
    const wrapped = shallow(<BookGrid books={dummyBooks}  bookshelvesNames={[]}/>)

    expect(wrapped.find(Book).length).toEqual(3);
})