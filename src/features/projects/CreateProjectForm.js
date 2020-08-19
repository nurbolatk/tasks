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

const CreateProjectForm = () => {
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
  )
}

export default CreateProjectForm
