import React from 'react'
import classnames from 'classnames'

const FormEntry = ({ mb, handleChange, fieldData, field }) => {
  const id = fieldData.id || fieldData.name
  return (
    <div className={classnames({ 'mb-3': mb })}>
      <label htmlFor={id} className="form-label">
        {fieldData.label}
      </label>
      <input
        type={fieldData.type || 'text'}
        name={fieldData.name}
        id={id}
        value={field}
        onChange={handleChange}
        className="form-field"
      />
    </div>
  )
}

export default FormEntry
