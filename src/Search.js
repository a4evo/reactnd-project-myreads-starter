import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid'
import PropTypes from 'prop-types'

class Search extends Component {

	static propTypes = {
		shelves: PropTypes.array.isRequired
	}

	state = {
		query: '',
		books: []
	}

	updateQuery = ( query ) => {
		query = query.trim()
		this.setState({ query })
	}

	componentDidUpdate(prevProp, prevState) {
		const { query } = this.state
		if ( query !== prevState.query ) {
			BooksAPI.search( query ).then( response => {

					if ( response && Array.isArray(response) ) {
						this.setState({ books: response })
					} else {
						this.setState({ books: [] })
					}

				})
		}
	}

	render () {
		const { books, query } = this.state
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
									onChange={ e => {
												this.updateQuery(e.target.value)}}
									value={ query }
						/>

					</div>
				</div>
				<div className="search-books-results">
						<div>Searcing for: {query} </div>
						<BooksGrid books={books} shelves={shelves}/>
				</div>
			</div>
		)
	}
}

export default Search
