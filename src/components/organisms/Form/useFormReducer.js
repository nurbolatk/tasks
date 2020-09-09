import React from 'react'

const clearFields = { type: 'CLEAR_FIELDS' }

export default function useFormReducer(initialValues) {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_FIELD':
        return {
          ...state,
          [action.name]: action.value,
        }
      case 'CLEAR_FIELDS':
        return initialValues
      default:
        return state
    }
  }
  const [fields, setFields] = React.useReducer(reducer, initialValues)
  const handleChange = e => {
    const { name, value } = e.target
    setFields({ type: 'CHANGE_FIELD', name, value })
  }

  const actions = {
    clearFields: () => setFields(clearFields),
  }
  return [fields, handleChange, actions]
}
