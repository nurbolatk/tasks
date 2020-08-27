import React from 'react'

const DropdownItem = props => {
  return <button className="dropdown-item">{props.children}</button>
}

const Dropdown = ({ children }) => {
  return <div className="dropdown">{children}</div>
}

Dropdown.Item = DropdownItem

export default Dropdown
