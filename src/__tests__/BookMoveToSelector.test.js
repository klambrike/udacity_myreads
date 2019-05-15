import React from 'react'
import { shallow } from "enzyme";
import BookMoveToSelector from '../components/BookMoveToSelector';

const onOptionSelected = () => { }

it('shows selector with 1 default options if possible options props are empty', () => {
    const wrapper = shallow(<BookMoveToSelector
        selectedShelfName='read'
        possibleShelves={[]}
        onOptionSelected={onOptionSelected} />);

    expect(wrapper.find('option').length).toEqual(1);
})

it('shows selector with 3 options, 1 coming from props', () => {
    const wrapper = shallow(<BookMoveToSelector
        selectedShelfName='read'
        possibleShelves={[{id: 'read', literalName: 'Read'}]}
        onOptionSelected={onOptionSelected} />);

    expect(wrapper.find('option').length).toEqual(2);
})

it('selector coming from props is selected', () => {
    const wrapper = shallow(<BookMoveToSelector
        selectedShelfName='read'
        possibleShelves={[{id: 'read', literalName: 'Read'}]}
        onOptionSelected={onOptionSelected} />);
    
    expect(wrapper.find('select').getElements()[0].props.defaultValue).toEqual('read');
})