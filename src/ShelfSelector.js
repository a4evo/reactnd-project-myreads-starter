import React from 'react'
import PropTypes from 'prop-types'

const ShelfSelector = ( props ) => {

		const {shelves, shelf} = props

		return (
			<div className="book-shelf-changer">
				<select defaultValue={shelf} onChange={e => props.onChange(e.target.value)}>
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

ShelfSelector.propTypes = {
		shelf: PropTypes.string.isRequired,
		shelves: PropTypes.array.isRequired,
		onChange: PropTypes.func.isRequired
	}

export default ShelfSelector;
