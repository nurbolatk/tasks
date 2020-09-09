import React from 'react'
import classnames from 'classnames'

const FormSelect = ({ mb, handleChange, value, fieldData, options }) => {
  const id = fieldData.id || fieldData.name
  return (
    <div className={classnames({ 'mb-3': mb })}>
      <label className="form-label" htmlFor={id}>
        {fieldData.label}
      </label>
      <select
        name={fieldData.name}
        id={id}
        onChange={handleChange}
        value={value}
        className="form-field">
        {options.map(option => (
          // option.key && option.value ?
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default FormSelect
