import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfSelector from './ShelfSelector'

class BooksGrid extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		shelves: PropTypes.array.isRequired
	}

	render() {

		const { books, shelves } = this.props

		return (
			<ol className="books-grid">

				{(	books.length > 0 ) ? (
					books.map( book => (
						<Book book={ book } key={ book.id } shelves={ shelves }>

					</Book>
				))) : (
				<div>Nothing found</div>
				)}
			</ol>
		)
	}

}

class Book extends Component {
	static propTypes = {
			book: PropTypes.object.isRequired,
			shelves: PropTypes.array.isRequired
		}

	render () {
		const { book, shelves } = this.props
		const { id, imageLinks, title, authors, shelf } = book


		const imgURL = ( imageLinks !== undefined && imageLinks.thumbnail !== undefined) ? ('url("' + imageLinks.thumbnail + '")') : ('none')

		const author = (authors) ? (authors.join(', ')):('Unknown')

		return(
			<li key={id}>
						<div className="book">
							<div className="book-top">
								<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imgURL }}></div>

								<ShelfSelector shelf={shelf}
															shelves={shelves}/>

							</div>
							<div className="book-title">{ title }</div>
							<div className="book-authors">{ author }</div>
						</div>
					</li>
		)
	}
}

export default BooksGrid
