import React from 'react'
import Menu from '../organisms/Menu'
import AddBook from '../../features/books/AddBook'

const Books = () => {
  return (
    <>
      <Menu />
      <div className="content">
        <AddBook />
      </div>
    </>
  )
}

export default Books
