import React from 'react'
import Task from './Task'

const BoardDone = ({ tasks, onTitleClick }) => {
  return (
    <div className="card task-board task-board-done">
      <h3 className="card-title m-0">Done</h3>
      <div className="task-list">
        {tasks.map(task => (
          <Task key={task.id} task={task} onTitleClick={onTitleClick} />
        ))}
      </div>
    </div>
  )
}

export default BoardDone
