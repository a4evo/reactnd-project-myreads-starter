import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksGrid from './BooksGrid'

class Search extends Component {

	static propTypes = {
		shelves: PropTypes.array.isRequired,
		books: PropTypes.object.isRequired,
		onChange: PropTypes.func.isRequired
	}

	state = {
		query: '',
		books: []
	}

	updateQuery = ( query ) => {
		query = query.trim()
		this.setState({ query })
	}

	newSearchRequest ( query ) {

		BooksAPI.search( query ).then( response => {
			const { idArr, shelfArr } = this.props.books

			if ( response && Array.isArray(response) && query !== '') {
				this.setState({ books: response.map( book => {

					if ( !book.shelf ) book.shelf = "none"

					if ( idArr.length > 0 ) {
						const i = idArr.indexOf( book.id )
						if ( i !== -1) book.shelf = shelfArr[i]
					}
					return book;
				})	})
			} else {
				this.setState({ books: [] })
			}
		})
	}

	componentDidUpdate ( p, s ) {
		if (s.query !== this.state.query) {
			this.newSearchRequest( this.state.query )
		}

		if (this.state.query === '' && this.state.books.length > 0 ) {
			this.setState({ books: [] })
		}
	}

	render () {
		const { books } = this.state
		const { shelves } = this.props

		return (

			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						{/*
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input type="text"
									placeholder="Search by title or author"
									onChange={ e => {this.updateQuery(e.target.value)}}
						/>

					</div>
				</div>
				<div className="search-books-results">

							<BooksGrid books={books}
										shelves={shelves}
										onChange={ (s, id, addNew ) => this.props.onChange( s, id, addNew )}
							/>

				</div>
			</div>
		)
	}
}

export default Search
