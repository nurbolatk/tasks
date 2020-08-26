import React from 'react'
import Task from './Task'

const BoardTemplate = ({ tasks, title, onTaskTitleClicked }) => {
  return (
    <div className="card task-board">
      <h3 className="card-title m-0">{title}</h3>
      <div className="task-list">
        {tasks.map(task => (
          <Task key={task.id} task={task} onTitleClick={onTaskTitleClicked} />
        ))}
      </div>
    </div>
  )
}

export default BoardTemplate
