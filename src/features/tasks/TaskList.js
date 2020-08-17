import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTasks } from './tasksSlice'
import { nanoid } from '@reduxjs/toolkit'

const TaskList = () => {
  const { tasks, status } = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks())
    }
  }, [status, dispatch])

  return (
    <div>
      {tasks.map(task => {
        const id = nanoid()
        return (
          <div className="task">
            <div className="task-header">
              <input
                className="task-check"
                type="checkbox"
                name="completed"
                id={`task-${id}-completed`}
              />
              <label className="task-text" htmlFor={`task-${id}-completed`}>
                {task.text}
              </label>
            </div>
            <div className="task-project">
              <button className="task-project-color"></button>
              <span>Project:</span>
              <span>Payments</span>
            </div>
            <div className="task-detals">
              <div className="task-priority">
                <button className="task-priority-color"></button>
                <span>Priority:</span>
                <span>{task.priority}</span>
              </div>
              <div className="task-deadline">
                <span>Due:</span>
                <span>Today</span>
              </div>
            </div>
            <div className="task-description">{task.description}</div>
            <div className="task-comments">
              <div className="task-comments-list">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, hic.
              </div>
              <form className="task-comments-form">
                <input type="text" />
              </form>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TaskList
