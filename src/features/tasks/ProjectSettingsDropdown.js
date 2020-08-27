import React, { useState } from 'react'
import SettingsIcon from '../../components/icons/SettingsIcon'

const ProjectSettingsDropdown = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="dropdown-container ml-2 mr-auto">
      <button
        className="btn-icon btn-icon-fill-dark"
        onClick={() => setOpen(!open)}>
        <SettingsIcon />
      </button>
      {open && children}
    </div>
  )
}

export default ProjectSettingsDropdown
