import React from 'react'

const Alert = ({ variant, className, children }) => {
  return <div className={`alert alert-${variant} ${className}`}>{children}</div>
}

export default Alert
