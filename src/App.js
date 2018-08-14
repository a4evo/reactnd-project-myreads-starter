import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import BooksGrid from './BooksGrid'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
		shelves: [	{id: 'currentlyReading',
								title: 'Currently Reading'},

								{id: 'wantToRead',
								title: 'Want to Read'},

								{id: 'read',
								title: 'Read'}],
		books: []
  }

	//when component mounts receive all books
	componentDidMount () {
		BooksAPI.getAll().then( (books) => {
			this.setState({ books })
		})
	}

  render() {
		const { shelves, books }	= this.state

    return (
      <div className="app">

       <Route path="/" exact render={ () => (

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
														<BooksGrid shelves={ shelves } books={ books.filter( book => book.shelf === shelf.id) }/>
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
				)} />


        <Route path="/search" render={ () => (
          <Search shelves={ shelves }/>
        )}  />
      </div>
    )
  }
}

export default BooksApp
