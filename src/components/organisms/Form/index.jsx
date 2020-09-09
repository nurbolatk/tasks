import React from 'react'
import FormEntry from './FormEntry'

const Form = ({ handleSubmit, children }) => {
  return <form onSubmit={handleSubmit}>{children}</form>
}

Form.Entry = FormEntry

export default Form
