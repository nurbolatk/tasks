import React from 'react'

const Task = ({ task, onTitleClick }) => {
  return (
    <div className="task py-5">
      <button
        data-task-id={task.id}
        className="task-text mb-1"
        onClick={onTitleClick}>
        {task.text}
      </button>
      <p className="task-description text-secondary mb-3 ">
        {task.description}
      </p>
      <div className="task-footer">
        <div className="gx-1  task-progress">
          <p className="task-progress-label text-tertiary">Progress</p>
          <progress
            className="task-progress-bar"
            max="100"
            value="70"></progress>
          <span className="task-progress-value">0%</span>
        </div>
        <div className="task-priority">
          <p className="text-tertiary mb-1">Priority:</p>
          <div className="d-flex align-center">
            <span
              className={`task-priority-color-box task-priority-color-box-${task.priority.toLowerCase()}`}></span>
            <span>{task.priority}</span>
          </div>
        </div>
        <div className=" task-deadline">
          <p className="text-tertiary mb-1">Due:</p>
          <span>Tomorrow</span>
        </div>
      </div>
    </div>
  )
}

export default Task
