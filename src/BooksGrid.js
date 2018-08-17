import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BooksGrid = ( props ) => {

	const { books, shelves } = props

	return (
		<ol className="books-grid">

			{(	books.length > 0 ) ? (
				books.map( book => (
					<Book book={ book }
								key={ book.id }
								shelves={ shelves }
								onChange={ (s, id, addNew ) => props.onChange( s, id, addNew )}
					/>

			))) : (
			<div>Nothing yet found</div>
			)}
		</ol>
	)
}

BooksGrid.propTypes = {
	books: PropTypes.array.isRequired,
	shelves: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired
}

export default BooksGrid
