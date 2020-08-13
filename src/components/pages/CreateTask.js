import React from 'react'

const CreateTask = () => {
  return (
    <div className="card">
      <form>
        <div className="mb-4">
          <label className="form-label" htmlFor="taskText">
            Task text
          </label>
          <input
            type="text"
            className="form-field"
            id="taskText"
            name="taskText"
          />
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="taskDescription">
            Task description
          </label>
          <input
            type="text"
            className="form-field"
            id="taskDescription"
            name="taskDescription"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="taskPriority">
            Task priority
          </label>
          <input
            type="text"
            className="form-field"
            id="taskPriority"
            name="taskPriority"
          />
        </div>
      </form>
    </div>
  )
}

export default CreateTask
