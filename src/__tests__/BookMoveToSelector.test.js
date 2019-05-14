import React from 'react'
import { shallow } from "enzyme";
import BookMoveToSelector from '../components/BookMoveToSelector';

const onOptionSelected = () => { }

it('shows selector with 2 options if possible options props are empty', () => {
    const wrapper = shallow(<BookMoveToSelector
        selectedShelfName='read'
        possibleShelves={[]}
        onOptionSelected={onOptionSelected} />);

    expect(wrapper.find('option').length).toEqual(2);
})

it('shows selector with 3 options, 1 coming from props', () => {
    const wrapper = shallow(<BookMoveToSelector
        selectedShelfName='read'
        possibleShelves={['read']}
        onOptionSelected={onOptionSelected} />);

    expect(wrapper.find('option').length).toEqual(3);
})

it('selector coming from props is selected', () => {
    const wrapper = shallow(<BookMoveToSelector
        selectedShelfName='read'
        possibleShelves={['read']}
        onOptionSelected={onOptionSelected} />);

    expect(wrapper.find('option').getElements().filter(option => option.props.selected)[0].props.value).toEqual('read');
})