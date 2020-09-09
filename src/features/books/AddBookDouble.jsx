import React from 'react'
import Menu from '../../components/organisms/Menu'
import useFormReducer from '../../components/organisms/Form/useFormReducer'
import Form from '../../components/organisms/Form/'

const fieldsData = {
  title: {
    id: 'title',
    name: 'title',
    label: 'Book title',
  },
  isbn: {
    id: 'isbn',
    name: 'isbn',
    label: 'Book ISBN',
    type: 'password',
  },
  price: {
    id: 'price',
    name: 'price',
    label: 'Book price',
    type: 'number',
  },
}

const initialValuesHook = {
  title: '',
  isbn: '',
  price: '',
}

const WithHook = () => {
  const [fields, handleChange] = useFormReducer(initialValuesHook)
  const handleSubmit = e => {
    e.preventDefault()
    console.log(fields)
  }
  return (
    <div className="card">
      <h2 className="mb-4">With hook</h2>
      <Form handleSubmit={handleSubmit}>
        <Form.Entry
          mb
          fieldData={fieldsData.title}
          field={fields.title}
          handleChange={handleChange}
        />
        <Form.Entry
          mb
          fieldData={fieldsData.isbn}
          field={fields.isbn}
          handleChange={handleChange}
        />
        <Form.Entry
          mb
          fieldData={fieldsData.price}
          field={fields.price}
          handleChange={handleChange}
        />
        <button className="btn btn-primary">Save</button>
      </Form>
    </div>
  )
}

const AddBookDouble = () => {
  return (
    <>
      <Menu />
      <div className="content">
        <WithHook />
      </div>
    </>
  )
}

export default AddBookDouble
