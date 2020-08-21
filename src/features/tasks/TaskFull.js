import React from 'react'

const TaskFull = ({ task }) => {
  task = {
    text: 'Ya lublu tebya',
    description: 'vse blya',
    priority: 'Low',
    id: 'UpesmgEEl9cvVsmXWZTnZ',
    project: { name: 'Inbox', color: '#00Af00', id: 'b7FIyFx9CFtLEuDJpTkhP' },
    steps: [],
  }

  return (
    <div className="full-task">
      <div className="full-task-header align-center mb-5">
        <div className="full-task-progress align-center">
          <progress max="100" value="55"></progress>
          <span>55% completed</span>
        </div>
        {/* <div className="full-task-completed">
          <span className="task-priority-color-box"></span>
          Completed
        </div> */}
        <button>close</button>
      </div>
      <div className="full-task-main-info">
        <h2 className="full-task-main-info-text mb-2">{task.text}</h2>
        <div className="full-task-description text-secondary mb-4">
          {task.description}
        </div>
        <div className="d-flex">
          <div className="task-author mr-5">
            <p className="text-tertiary mb-1">Author</p>
            <p>Nurba K.</p>
          </div>
          <div className="task-priority mr-5">
            <p className="text-tertiary mb-1">Priority:</p>
            <div className="d-flex align-center">
              <span
                className={`task-priority-color-box task-priority-color-box-${task.priority.toLowerCase()}`}></span>
              <span>{task.priority}</span>
            </div>
          </div>
          <div className=" task-deadline">
            <p className="text-tertiary mb-1">Due:</p>
            <span>Today</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="full-task-steps">
        <p className="menu-nav-header mt-4 mb-2">Steps to complete</p>
        <form>
          {task.steps.map(step => {
            return (
              <input type="text" className="form-field" value={step.text} />
            )
          })}
          <input type="text" className="form-field" />
          <button className="btn btn-primary ">Add step</button>
        </form>
      </div>
    </div>
  )
}

export default TaskFull