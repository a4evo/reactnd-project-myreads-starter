import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid'

const ListBooks = ( props ) => {
	const { shelves, books }	= props

	return (
		<Container>
			{shelves.map( (shelf) => (
				<Shelf shelf={ shelf } key={ shelf.id }>
					<BooksGrid
							shelves={ shelves }
							books={ books.filter( book => book.shelf === shelf.id) }
							onChange={ (s, id) => props.onChange(s, id)}
					/>
				</Shelf>
			))}
		</Container>
	)
}

ListBooks.propTypes = {
		books: PropTypes.array.isRequired,
		shelves: PropTypes.array.isRequired,
		onChange: PropTypes.func.isRequired
}

export default ListBooks

const Container = ( props ) => (
	<div className="list-books">
		<div className="list-books-title">
			<h1>MyReads</h1>
		</div>
		<div className="list-books-content">
			<div>

			 {props.children}

			</div>
		</div>
		<div className="open-search">
			<Link to="/search">Add a book</Link>
		</div>
	</div>
)

const Shelf = ( props ) => {
	const { shelf } = props
	return(
		<div className="bookshelf" key={shelf.id}>
			<h2 className="bookshelf-title">{shelf.title}</h2>
			<div className="bookshelf-books">

				{props.children}

			</div>
	</div>
	)
}

Shelf.propTypes = {
		shelf: PropTypes.object.isRequired
}
