import React from 'react'
import PropTypes from 'prop-types'
import { getShelfNameFromId } from "components/BookShelves";

const BookMoveToSelector = ({ selectedShelfName, possibleShelves }) => {

    return (
        <div className="book-shelf-changer">
            <select>
                <option value="move" disabled>Move to...</option>
                {possibleShelves.map( (shelf, index) => (
                    <option
                        value={shelf}
                        key={index}
                    >{getShelfNameFromId(shelf)}</option>
                ))}
                <option value="none">None</option>
            </select>
        </div>
    )
}

BookMoveToSelector.propTypes = {
    selectedShelfName: PropTypes.string.isRequired,
    possibleShelves: PropTypes.array.isRequired
}

export default BookMoveToSelector