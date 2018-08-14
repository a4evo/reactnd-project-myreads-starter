import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfSelector extends Component {
	static propTypes = {
		shelf: PropTypes.string.isRequired,
		shelves: PropTypes.array.isRequired
	}


	render() {
		const allShelves = this.props.shelves
		const chosenShelf = this.props.shelf

		return (
			<div className="book-shelf-changer">
				<select defaultValue={chosenShelf}>
					<option value="move" disabled>Move to...</option>

					{allShelves.map( shelf => (
						<option value={shelf.id}
										key={shelf.id}>{shelf.title}</option>
					))}
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default ShelfSelector;