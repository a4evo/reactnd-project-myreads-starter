import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import Search from './Search'

class BooksApp extends Component {
  state = {
  	shelves: [{
  			id: 'currentlyReading',
  			title: 'Currently Reading'
  		},

  		{
  			id: 'wantToRead',
  			title: 'Want to Read'
  		},

  		{
  			id: 'read',
  			title: 'Read'
  		}],
  	books: []
  }
	//when component mounts receive all books
	componentDidMount () {
		BooksAPI.getAll().then( (books) => {
			this.setState({ books })
		})
	}

	moveBook = (shelf, id, addNew) => {
		let books = [];
		BooksAPI.update( { id }, shelf).then( (resp) => {
			if (addNew) {
				BooksAPI.get( id ).then( resp => {
					this.setState( prev => prev.books.push(resp))
				})
			} else {
				books = this.state.books.filter( book => {
				if (book.id === id) book.shelf = shelf
				return book.shelf !== 'none'

				})
				this.setState({ books })
			}


		})
	}

  render() {
		const { shelves, books }	= this.state

    return (
      <div className="app">

       <Route path="/" exact render={ () => (

          <ListBooks {...this.state} onChange={ (shelf, id) => this.moveBook(shelf, id)} />

				)} />


        <Route path="/search" render={ ( { history } ) => (

          <Search shelves={ shelves }
          		books={{idArr: books.map( book => book.id),	shelfArr: books.map( book => book.shelf)}}
          		onChange={ (s, id, addNew ) =>
										{this.moveBook( s, id, addNew )
									 	}}
          />

        )}  />
      </div>
    )
  }
}

export default BooksApp
