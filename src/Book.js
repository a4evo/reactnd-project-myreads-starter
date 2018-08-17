import React from 'react'
import PropTypes from 'prop-types'
import ShelfSelector from './ShelfSelector'

const Book = ( props ) => {

	const { book, shelves } = props
	const { id, imageLinks, title, authors, shelf } = book

	const imgURL = ( imageLinks !== undefined && imageLinks.thumbnail !== undefined) ? ('url("' + imageLinks.thumbnail + '")') : ('none')

	const author = (authors) ? (authors.join(', ')):('Unknown')

	return (
		<li key={id}>
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imgURL }}></div>

					<ShelfSelector shelf={ shelf }
							shelves={ shelves }
							onChange={ s => props.onChange(s, id, shelf === 'none' && shelf !== s)}
					/>

				</div>
				<div className="book-title">{ title }</div>
				<div className="book-authors">{ author }</div>
			</div>
		</li>
	)

}

Book.propTypes = {
	book: PropTypes.object.isRequired,
	shelves: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired
}

export default Book
