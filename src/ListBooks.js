import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid'

class ListBooks extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		shelves: PropTypes.array.isRequired,
		onChange: PropTypes.func.isRequired
	}

	state = {
		books: []
	}

	render() {
		const { shelves, books }	= this.props

		return (
			<Container>
				{shelves.map( (shelf) => (
							<Shelf shelf={ shelf } key={ shelf.id }>
									<BooksGrid
											shelves={ shelves }
											books={ books.filter( book => book.shelf === shelf.id) }
											onChange={ (s, id) => this.props.onChange(s, id)}
									/>
							</Shelf>
				))}
			</Container>
	)}
}

export default ListBooks

class Container extends Component {

	render() {
		return (
			<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<div>

						 {this.props.children}

				 		</div>
					</div>
					<div className="open-search">
						<Link to="/search">Add a book</Link>
					</div>
				</div>
		)
	}
}

class Shelf extends Component {
	static propTypes = {
		shelf: PropTypes.object.isRequired
	}

render () {
	const { shelf } = this.props
	return(
		<div className="bookshelf" key={shelf.id}>
			<h2 className="bookshelf-title">{shelf.title}</h2>
			<div className="bookshelf-books">

				{this.props.children}

			</div>
	</div>
	)
}
}
