import React from 'react'
import PropTypes from 'prop-types'

const BookMoveToSelector = ({ selectedShelfName, possibleShelves, onOptionSelected }) => {

    const optionSelected = (element) => {
        onOptionSelected(element.target.value);
    }

    return (
        <div className="book-shelf-changer">
            <select defaultValue={selectedShelfName} onChange={optionSelected}>
                <option value="move" disabled>Move to...</option>
                {possibleShelves.map((shelf, index) => (
                    <option
                        value={shelf.id}
                        key={index}
                    >{shelf.literalName}</option>
                ))}
            </select>
        </div>
    )
}

BookMoveToSelector.propTypes = {
    selectedShelfName: PropTypes.string.isRequired,
    possibleShelves: PropTypes.arrayOf(PropTypes.object),
    onOptionSelected: PropTypes.func.isRequired
}

export default BookMoveToSelector