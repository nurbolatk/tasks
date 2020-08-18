import React, { useReducer } from 'react'
import api from '../../api'

const initialState = {
  name: '',
  color: '#FFAA00',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FIELDS':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    default:
      return state
  }
}

const Projects = () => {
  const [project, setProject] = useReducer(reducer, initialState)

  const handleChange = e => {
    const { name, value } = e.target
    setProject({ type: 'CHANGE_FIELDS', payload: { name, value } })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await api.post('/projects', project)
    console.log('Projects -> res', res)
  }

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
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label" htmlFor="name">
                Project name
              </label>
              <input
                name="name"
                id="name"
                value={project.name}
                onChange={handleChange}
                type="text"
                className="form-field"
              />
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="color">
                Project color
              </label>
              <input
                name="color"
                id="color"
                value={project.color}
                onChange={handleChange}
                type="color"
              />
            </div>
            <button className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Projects
