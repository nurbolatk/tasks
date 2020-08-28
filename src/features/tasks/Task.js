import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleStatus } from './tasksSlice'
import api from '../../api'

const Task = ({ task, onTitleClick }) => {
  const dispatch = useDispatch()
  console.log(task.text, task.completed)
  const numCompleted = task.steps.reduce(
    (count, step) => (step.completed ? count + 1 : count),
    0
  )
  const progress = Math.round((numCompleted / task.steps.length) * 100)

  const handleTaskStatusChange = async () => {
    dispatch(toggleStatus(task.id))
    try {
      await api.post('/updateTaskState/:id', task.id)
    } catch (error) {
      alert(error.message)
      dispatch(toggleStatus(task.id))
    }
  }

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
        {task.steps.length ? (
          <div className="gx-1 task-progress">
            <p className="task-progress-label text-tertiary">Progress</p>
            <progress
              className="task-progress-bar"
              max="100"
              value={progress}></progress>
            <span className="task-progress-value">{progress}%</span>
          </div>
        ) : (
          <div className="task-status">
            <p className="text-tertiary mb-1">Status</p>
            <div className="d-flex align-center">
              <input
                type="checkbox"
                id={`status-${task.id}`}
                className="form-check"
                value={task.completed}
                onChange={handleTaskStatusChange}
              />
              <label htmlFor={`status-${task.id}`} className="form-label-check">
                {task.completed ? 'Completed' : 'Not done'}
              </label>
            </div>
          </div>
        )}
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
