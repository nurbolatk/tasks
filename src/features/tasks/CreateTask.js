import React, { useReducer } from 'react'
import { addNewTask } from './tasksSlice'
import { useDispatch } from 'react-redux'
import api from '../../api'
import { useState } from 'react'
import Alert from '../../components/atoms/Alert'

const initialState = {
  text: '',
  description: '',
  priority: 'low', // medium | high
}

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return { ...state, [action.payload.name]: action.payload.value }
    case 'CLEAR_FIELDS':
      return initialState
    default:
      return state
  }
}

const clearFields = { type: 'CLEAR_FIELDS' }

const CreateTask = () => {
  const [task, setTask] = useReducer(taskReducer, initialState)
  const [status, setStatus] = useState({ status: 'idle', message: null })
  const dispatch = useDispatch()

  const changeField = e => {
    const { name, value } = e.target
    setTask({
      type: 'CHANGE_FIELD',
      payload: {
        name,
        value,
      },
    })
  }

  const submitNewTask = async e => {
    e.preventDefault()
    setStatus({ message: null, status: 'loading' })
    try {
      const { data: newTask } = await api.post('/tasks', task)
      // stop loading
      setStatus({ message: 'Successfully added', status: 'succeeded' })
      //dispatch an action to redux
      dispatch(addNewTask(newTask))
      //clear fields
      setTask(clearFields)
    } catch ({ message }) {
      // stop loading and set error
      setStatus({ message, status: 'failed' })
    }
  }

  const loading = status.status === 'loading'
  const failed = status.status === 'failed'
  const succeeded = status.status === 'succeeded'

  return (
    <div className="card">
      <h3 className="card-title">Create a new task</h3>
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

      <form onSubmit={submitNewTask}>
        <div className="mb-4">
          <label className="form-label" htmlFor="text">
            Task text
          </label>
          <input
            disabled={loading}
            type="text"
            className="form-field"
            id="text"
            name="text"
            value={task.text}
            onChange={changeField}
          />
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="description">
            Task description
          </label>
          <input
            disabled={loading}
            type="text"
            className="form-field"
            id="description"
            name="description"
            value={task.description}
            onChange={changeField}
          />
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="priority">
            Task priority
          </label>

          <select
            disabled={loading}
            name="priority"
            id="priority"
            onChange={changeField}
            value={task.priority}
            className="form-field">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button disabled={loading} className="btn btn-primary">
          {loading ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  )
}

export default CreateTask
