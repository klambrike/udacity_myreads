import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import { shallow } from 'enzyme'
import { BookShelves } from '../components/BookShelves';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('renders bookshelves component', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(BookShelves).length).toEqual(1);
})


