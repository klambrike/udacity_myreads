import React from 'react'
import PropTypes from 'prop-types'
import { getShelfNameFromId } from "components/BookShelves";

const BookMoveToSelector = ({ selectedShelfName, possibleShelves, onOptionSelected }) => {

    const optionSelected = (element) => {
        onOptionSelected(element.target.value);
    }

    return (
        <div className="book-shelf-changer">
            <select>
                <option value="move" disabled>Move to...</option>
                {possibleShelves.map( (shelf, index) => (
                    <option
                        value={shelf}
                        key={index}
                        selected={shelf === selectedShelfName}
                        onSelect={optionSelected}
                    >{getShelfNameFromId(shelf)}</option>
                ))}
                <option value="none">None</option>
            </select>
        </div>
    )
}

BookMoveToSelector.propTypes = {
    selectedShelfName: PropTypes.string.isRequired,
    possibleShelves: PropTypes.array.isRequired,
    onOptionSelected: PropTypes.func.isRequired
}

export default BookMoveToSelector