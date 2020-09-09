import React from 'react'
import FormEntry from './FormEntry'
import FormSelect from './FormSelect'

const Form = ({ handleSubmit, children }) => {
  return <form onSubmit={handleSubmit}>{children}</form>
}

Form.Entry = FormEntry
Form.Select = FormSelect

export default Form
