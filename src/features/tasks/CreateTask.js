import React, { useReducer } from 'react'

const initialState = {
  text: '',
  description: '',
  priority: 'low', // medium | high
}

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}

const CreateTask = () => {
  const [task, setTask] = useReducer(taskReducer, initialState)

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

  const submitNewTask = e => {
    e.preventDefault()
    //dispatch an action to redux
    console.log(task)
  }

  return (
    <div className="card">
      <h3 className="card-title">Create a new task</h3>
      <form onSubmit={submitNewTask}>
        <div className="mb-4">
          <label className="form-label" htmlFor="text">
            Task text
          </label>
          <input
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
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  )
}

export default CreateTask
