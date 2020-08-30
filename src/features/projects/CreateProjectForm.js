import React, { useReducer } from 'react'
import api from '../../api'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addProject } from './projectsSlice'

const initialState = {
  name: '',
  color: '#00Af00',
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

const CreateProjectForm = ({ setShowProjectModal }) => {
  const [project, setProject] = useReducer(reducer, initialState)
  const dispatch = useDispatch()

  const handleChange = e => {
    const { name, value } = e.target
    setProject({ type: 'CHANGE_FIELDS', payload: { name, value } })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!project.id) project.id = nanoid()
    try {
      const res = await api.post('/projects', project)
      dispatch(addProject(res.data), { hoho: 'haha' })
      setShowProjectModal(false)
    } catch (error) {
      alert(error.message)
    }
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
