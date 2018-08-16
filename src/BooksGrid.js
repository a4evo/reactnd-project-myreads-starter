import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfSelector from './ShelfSelector'
import * as BooksAPI from './BooksAPI'

class BooksGrid extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		shelves: PropTypes.array.isRequired
	}


	onShelfChange = (newShelf, id) => {
		console.log(this.props + " -> " + newShelf)
		BooksAPI.update( { id }, newShelf).then( console.log('updated') )
	}

	render() {

		const { books, shelves } = this.props

		return (
			<ol className="books-grid">

				{(	books.length > 0 ) ? (
					books.map( book => (
						<Book book={ book } key={ book.id } shelves={ shelves }>
							<ShelfSelector shelf={ book.shelf }
															shelves={ shelves }
															onChange={s => this.onShelfChange(s, book.id)}
															/>
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
		const { book } = this.props
		const { id, imageLinks, title, authors } = book


		const imgURL = ( imageLinks !== undefined && imageLinks.thumbnail !== undefined) ? ('url("' + imageLinks.thumbnail + '")') : ('none')

		const author = (authors) ? (authors.join(', ')):('Unknown')

		return(
			<li key={id}>
						<div className="book">
							<div className="book-top">
								<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imgURL }}></div>

								{this.props.children}

							</div>
							<div className="book-title">{ title }</div>
							<div className="book-authors">{ author }</div>
						</div>
					</li>
		)
	}
}

export default BooksGrid
