import React from 'react'
import { shallow } from 'enzyme'
import BookShelf from 'components/BookShelf';

it('rendes shelf with name from props', () => {
    const wrapper = shallow(<BookShelf shelfName="Currently reading" onChangeShelf={() => {}}/>);

    expect(wrapper.text()).toContain("Currently reading");
})
