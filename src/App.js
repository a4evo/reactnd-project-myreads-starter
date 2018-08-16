import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import Search from './Search'

class BooksApp extends Component {
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

	moveBook = (shelf, id) => {
		const books = this.state.books.filter( book => {
				if (book.id === id) book.shelf = shelf
				return book.shelf !== 'none'
			})

		this.setState({ books })
	}

  render() {
		const { shelves, books }	= this.state

    return (
      <div className="app">

       <Route path="/" exact render={ () => (

          <ListBooks {...this.state} onChange={ (shelf, id) => this.moveBook(shelf, id)} />

				)} />


        <Route path="/search" render={ () => (

          <Search shelves={ shelves }
          		books={{idArr: books.map( book => book.id),
          		shelfArr: books.map( book => book.shelf)}}/>

        )}  />
      </div>
    )
  }
}

export default BooksApp
