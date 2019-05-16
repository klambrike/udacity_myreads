import React from 'react'
import App from 'components/App'
import { mount } from 'enzyme'
import { BookShelves } from '../components/BookShelves';
import { BrowserRouter } from 'react-router-dom'

let wrapped;

beforeEach(() => {
  wrapped = mount(<BrowserRouter><App /></BrowserRouter>)
}) 

it('renders bookshelves component', () => {
  expect(wrapped.find(BookShelves).length).toEqual(1);
  wrapped.unmount();
})

