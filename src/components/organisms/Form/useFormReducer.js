import React from 'react'

export default function useFormReducer(initialValues) {
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
  const [fields, setFields] = React.useReducer(reducer, initialValues)
  const handleChange = e => {
    const { name, value } = e.target
    setFields({ type: 'CHANGE_FIELD', name, value })
  }
  return [fields, handleChange]
}
