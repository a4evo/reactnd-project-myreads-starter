import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfSelector from './ShelfSelector'

class BooksGrid extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		shelves: PropTypes.array.isRequired
	}

	render() {

		const books = this.props.books

		return (
			<ol className="books-grid">

				{books.map( book => (
					<li key={book.id}>
						<div className="book">
							<div className="book-top">
								<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + book.imageLinks.thumbnail + '")' }}></div>

								<ShelfSelector shelf={book.shelf}
															shelves={this.props.shelves}/>
							</div>
							<div className="book-title">{ book.title }</div>
							<div className="book-authors">{ (book.authors) ? (book.authors.join(', ')):('Unknown')  }</div>
						</div>
					</li>
				))}
		</ol>)
	}

}

export default BooksGrid
