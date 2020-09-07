import React, { useReducer } from 'react'
import Menu from '../../components/organisms/Menu'

const initialValues = {
  title: '',
  isbn: '',
  price: '',
}

const fieldsData = {
  title: {
    id: 'title',
    name: 'title',
  },
  isbn: {
    id: 'isbn',
    name: 'isbn',

    type: 'password',
  },
  price: {
    id: 'price',
    name: 'price',

    type: 'number',
  },
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return {
        ...state,
        [action.name]: action.value,
      }
    default:
      return state
  }
}

const AddBookDouble = () => {
  const [fields, setFields] = useReducer(reducer, initialValues)
  console.log('AddBookDouble -> fields', fields)

  const handleChange = e => {
    const { name, value } = e.target
    setFields({ type: 'CHANGE_FIELD', name, value })
  }

  return (
    <>
      <Menu />
      <div className="content">
        <div className="card">
          <h2 className="mb-4">Another one</h2>
          <form>
            <div className="mb-3">
              <label htmlFor={fieldsData.title.id} className="form-label">
                Book title
              </label>
              <input
                type="text"
                id={fieldsData.title.id}
                name={fieldsData.title.name}
                value={fields.title.value}
                onChange={handleChange}
                className="form-field"
              />
            </div>
            <div className="mb-3">
              <label htmlFor={fieldsData.isbn.id} className="form-label">
                Book ISBN
              </label>
              <input
                type={fieldsData.isbn.type}
                name={fieldsData.isbn.name}
                id={fieldsData.isbn.id}
                value={fields.isbn.value}
                onChange={handleChange}
                className="form-field"
              />
            </div>
            <div className="mb-3">
              <label htmlFor={fieldsData.price.id} className="form-label">
                Book price
              </label>
              <input
                type={fieldsData.price.type}
                name={fieldsData.price.name}
                id={fieldsData.price.id}
                value={fields.price.value}
                onChange={handleChange}
                className="form-field"
              />
            </div>
            <button className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddBookDouble
