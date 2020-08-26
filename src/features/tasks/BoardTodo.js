import React from 'react'
import Task from './Task'

const BoardTodo = ({ tasks, openTaskSideBar }) => {
  return (
    <div className="card task-board task-dashboard-board-todo">
      <h3 className="card-title m-0">Todo</h3>
      <div className="task-list">
        {tasks.map(task => (
          <Task key={task.id} task={task} onTitleClick={openTaskSideBar} />
        ))}
      </div>
    </div>
  )
}

export default BoardTodo
