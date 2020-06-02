import React from 'react'

import Title from './Title'
import BookShelf from './BookShelf'
import AddBookLink from './AddBookLink'

const BookList = () => {

  return (
    <div className="list-books">
      <Title />
      <BookShelf />
      <AddBookLink />
    </div>
  )

}

export default BookList