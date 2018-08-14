import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid'

class Search extends Component {

	state = {
		query: ''
	}

	updateQuery = ( query ) => {
		this.setState({ query })
	}

	render () {

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
											if (e.target.value.length > 2) {
												this.updateQuery(e.target.value)}
											}


																																								}/>

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">

						{/*THIS IS TEMPORARY START*/}
						{this.state.query}
						{/*THIS IS TEMPORARY END*/}

					</ol>
				</div>
			</div>
		)
	}
}

export default Search
