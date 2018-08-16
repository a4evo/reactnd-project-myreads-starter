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

  render() {
		const { shelves }	= this.state

    return (
      <div className="app">

       <Route path="/" exact render={ () => (

          <ListBooks {...this.state}/>

				)} />


        <Route path="/search" render={ () => (

          <Search shelves={ shelves }/>

        )}  />
      </div>
    )
  }
}

export default BooksApp
