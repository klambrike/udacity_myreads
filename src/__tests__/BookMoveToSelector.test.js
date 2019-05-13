import React from 'react'
import { shallow } from "enzyme";
import BookMoveToSelector from '../components/BookMoveToSelector';

it('shows selector with 2 options if possible options props are empty', () => {
    const wrapper = shallow(<BookMoveToSelector selectedShelfName='read' possibleShelves={[]}/>);

    expect(wrapper.find('option').length).toEqual(2);
})

it('shows selector with 3 options, 1 coming from props', () => {
    const wrapper = shallow(<BookMoveToSelector selectedShelfName='read' possibleShelves={['read']}/>);

    expect(wrapper.find('option').length).toEqual(3);
})