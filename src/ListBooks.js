import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid'

class ListBooks extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		shelves: PropTypes.array.isRequired
	}

		render() {
			const { shelves, books }	= this.props
				return (
				<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

              <div>
          	 	{/*Bookshelfs starts here*/}

							 {shelves.map( (shelf) => (
											<div className="bookshelf" key={shelf.id}>
													<h2 className="bookshelf-title">{shelf.title}</h2>
													<div className="bookshelf-books">
														<BooksGrid
															shelves={ shelves }
															books={ books.filter( book => book.shelf === shelf.id) }/>
													</div>
											</div>
								))}

							{/*And ends here*/}
					 </div>

            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
		)}
}

export default ListBooks
