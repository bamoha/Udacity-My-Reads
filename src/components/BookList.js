import React, { Component } from 'react'

import Title from './Title'
import BookShelf from './BookShelf'
import AddBookLink from './AddBookLink'

class BookList extends Component {
    render() {
        return(
            <div className="list-books">
                <Title />
                <BookShelf /> 
                <AddBookLink />
            </div>
        )
    }
}

export default BookList