import React from 'react'

const AddBook = () => {
  return (
    <div className="card">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Book title
          </label>
          <input type="text" id="title" className="form-field" />
        </div>
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  )
}

export default AddBook
