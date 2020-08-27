import React, { useState } from 'react'
import MoreHorizontalIcon from '../../components/icons/MoreHorizontalIcon'
import Dropdown from '../../components/molecules/Dropdown'

const EditStepDropdown = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="dropdown-container task-step-more">
      <button className="btn-icon" onClick={() => setOpen(!open)}>
        <MoreHorizontalIcon />
      </button>
      {open && (
        <Dropdown>
          <Dropdown.Item>Edit</Dropdown.Item>
          <Dropdown.Item>Delete</Dropdown.Item>
        </Dropdown>
      )}
    </div>
  )
}

export default EditStepDropdown
