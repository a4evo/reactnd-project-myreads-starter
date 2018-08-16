import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfSelector extends Component {
	static propTypes = {
		shelf: PropTypes.string.isRequired,
		shelves: PropTypes.array.isRequired,
		onChange: PropTypes.func.isRequired
	}

	render() {
		const {shelves, shelf} = this.props

		return (
			<div className="book-shelf-changer">
				<select defaultValue={shelf} onChange={e => this.props.onChange(e.target.value)}>
					<option value="move" disabled>Move to...</option>

					{shelves.map( shelf => (
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
