import React from 'react'
import classnames from 'classnames'

const FormEntry = ({ mb, handleChange, fieldData, field }) => {
  return (
    <div className={classnames({ 'mb-3': mb })}>
      <label htmlFor={fieldData.id} className="form-label">
        {fieldData.label}
      </label>
      <input
        type={fieldData.type || 'text'}
        name={fieldData.name}
        id={fieldData.id || fieldData.name}
        value={field}
        onChange={handleChange}
        className="form-field"
      />
    </div>
  )
}

export default FormEntry
