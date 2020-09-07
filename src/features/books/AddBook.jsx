import React, { useReducer } from 'react'

const initialValues = {
  title: {
    id: 'title',
    name: 'title',
    value: '',
  },
  isbn: {
    id: 'isbn',
    name: 'isbn',
    value: '',
    type: 'password',
  },
  price: {
    id: 'price',
    name: 'price',
    value: '',
    type: 'number',
  },
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          value: action.value,
        },
      }
    default:
      return state
  }
}

const AddBook = () => {
  const [fields, setFields] = useReducer(reducer, initialValues)
  console.log('AddBook -> fields', fields)

  const handleChange = e => {
    const { name, value } = e.target
    setFields({ type: 'CHANGE_FIELD', name, value })
  }

  return (
    <div className="card">
      <h2 className="mb-4">Playing with forms...</h2>
      <form>
        <div className="mb-3">
          <label htmlFor={fields.title.id} className="form-label">
            Book title
          </label>
          <input
            type="text"
            id={fields.title.id}
            name={fields.title.name}
            value={fields.title.value}
            onChange={handleChange}
            className="form-field"
          />
        </div>
        <div className="mb-3">
          <label htmlFor={fields.isbn.id} className="form-label">
            Book ISBN
          </label>
          <input
            type={fields.isbn.type}
            name={fields.isbn.name}
            id={fields.isbn.id}
            value={fields.isbn.value}
            onChange={handleChange}
            className="form-field"
          />
        </div>
        <div className="mb-3">
          <label htmlFor={fields.price.id} className="form-label">
            Book price
          </label>
          <input
            type={fields.price.type}
            name={fields.price.name}
            id={fields.price.id}
            value={fields.price.value}
            onChange={handleChange}
            className="form-field"
          />
        </div>
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  )
}

export default AddBook
