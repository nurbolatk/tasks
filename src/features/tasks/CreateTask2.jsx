import React from 'react'
import { addNewTask } from './tasksSlice'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api'
import { useState } from 'react'
import Alert from '../../components/atoms/Alert'
import { nanoid } from '@reduxjs/toolkit'
import Form from '../../components/organisms/Form'
import useFormReducer from '../../components/organisms/Form/useFormReducer'

const initialState = {
  text: '',
  description: '',
  priority: 'Low', // Medium | High
}

const CreateTask = ({ projectId }) => {
  const [values, handleChange, actions] = useFormReducer(initialState)
  const [status, setStatus] = useState({ status: 'idle', message: null })
  const project = useSelector(state =>
    state.projects.projects.find(project => project.id === projectId)
  )
  const dispatch = useDispatch()

  const submitNewTask = async e => {
    e.preventDefault()
    if (!project.id) return alert('No project selected!')
    setStatus({ message: null, status: 'loading' })
    try {
      if (!values.id) values.id = nanoid()
      values.project = project
      const { data: newTask } = await api.post('/tasks', values)
      // stop loading
      setStatus({ message: 'Successfully added', status: 'succeeded' })
      //dispatch an action to redux
      dispatch(addNewTask(newTask))
      //clear fields
      actions.clearFields()
    } catch ({ message }) {
      // stop loading and set error
      setStatus({ message, status: 'failed' })
    }
  }

  const loading = status.status === 'loading'
  const failed = status.status === 'failed'
  const succeeded = status.status === 'succeeded'

  return (
    <>
      {failed && (
        <Alert variant="error" className="mb-4">
          {status.message}
        </Alert>
      )}
      {succeeded && (
        <Alert variant="success" className="mb-4">
          {status.message}
        </Alert>
      )}
      <Form handleSubmit={submitNewTask}>
        <Form.Entry
          mb
          field={values.text}
          fieldData={{
            label: 'Task text',
            name: 'text',
          }}
          handleChange={handleChange}
        />
        <Form.Entry
          mb
          field={values.description}
          fieldData={{
            label: 'Task description',
            name: 'description',
          }}
          handleChange={handleChange}
        />
        <div className="mb-4 grid grid-2">
          <div>
            <label className="form-label" htmlFor="priority">
              Task priority
            </label>
            <select
              disabled={loading}
              name="priority"
              id="priority"
              onChange={handleChange}
              value={values.priority}
              className="form-field">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <Form.Entry
            fieldData={{
              type: 'datetime',
              name: 'deadline',
              label: 'Deadline',
            }}
            field={values.deadline}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tag" className="form-label">
            Tags
          </label>
          <button type="button">dancing</button>
          <button type="button">tatatara</button>
          <button type="button">like</button>
          <button type="button">ifyouknowwhatimean</button>
        </div>
        <button type="submit" disabled={loading} className="btn btn-primary">
          {loading ? 'Saving...' : 'Save'}
        </button>
      </Form>
    </>
  )
}

export default CreateTask
