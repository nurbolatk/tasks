import React from 'react'

import CreateProjectForm from './CreateProjectForm'

const Projects = () => {
  return (
    <>
      <div className="menu">
        <div className="p-4">
          <button className="btn btn-primary w-100">Add Project</button>
        </div>
        <div className="menu-nav">
          <div className="menu-nav-header p-4">Layout</div>
          <div className="menu-nav-list">
            <button className="menu-nav-list-item">
              <div className="menu-nav-list-item-text">All projects</div>
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="card">
          <CreateProjectForm />
        </div>
      </div>
    </>
  )
}

export default Projects
