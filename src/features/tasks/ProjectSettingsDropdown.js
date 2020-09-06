import React, { useState } from 'react'
import SettingsIcon from '../../components/icons/SettingsIcon'
import Dropdown from '../../components/molecules/Dropdown'

const ProjectSettingsDropdown = ({ onDeleteProjectClicked, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="dropdown-container ml-2 mr-auto">
      <button
        className="btn-icon btn-icon-fill-dark"
        onClick={() => setOpen(!open)}>
        <SettingsIcon />
      </button>
      {open && (
        <Dropdown setOpen={setOpen}>
          <Dropdown.Item>Edit</Dropdown.Item>
          <Dropdown.Item handleClick={onDeleteProjectClicked}>
            Delete
          </Dropdown.Item>
        </Dropdown>
      )}
    </div>
  )
}

export default ProjectSettingsDropdown
