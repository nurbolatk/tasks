import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classnames from 'classnames'
import {
  updateTaskByAddingStep,
  selectCurrentTask,
  resetCurrentTask,
  removeTask,
} from '../tasks/tasksSlice'
import api from '../../api'
import Step from './Step'
import SendIcon from '../../components/icons/SendIcon'
import CloseIcon from '../../components/icons/CloseIcon'
import DeleteIcon from '../../components/icons/DeleteIcon'

const TaskFull = () => {
  const task = useSelector(selectCurrentTask)
  const [newStepText, setNewStepText] = useState('')
  const dispatch = useDispatch()

  if (!task) {
    alert('Attempted to open TaskSideBar without the task')
    return null
  }

  const numCompleted = task.steps.reduce(
    (count, step) => (step.completed ? count + 1 : count),
    0
  )
  const progress = Math.round((numCompleted / task.steps.length) * 100)

  const deleteTask = async e => {
    // what is the plan?
    // call to api to delete the task
    // receive the id back
    try {
      const { data: deletedId } = await api.delete('/tasks/id', task.id)
      // remove the task from redux by id
      dispatch(resetCurrentTask())
      dispatch(removeTask(deletedId))
    } catch (error) {
      alert(error.message)
    }
  }

  const closeTaskSideBar = () => {
    // dispatch an action that sets currentTask to null
    dispatch(resetCurrentTask())
  }

  const addStep = async e => {
    e.preventDefault()
    if (newStepText.length) {
      // what to do?
      // we need to push new item to the steps array of the task
      // variant 1. I would push it to locally and remotely at the same time.
      // local data will update almost immidiately and show the results in UI
      // and this will be very responsive. When the api call finishes, if it
      // was success, do nothing, if it was failure, retract the local updates
      // and show error message and try again msg
      // variant 2. I would call backend to update the task and show the loading
      // status and when backend responds, update the UI
      try {
        const res = await api.post('/tasks/:id/steps', {
          text: newStepText,
          id: task.id,
        })
        dispatch(updateTaskByAddingStep(res.data))
        setNewStepText('')
      } catch (error) {
        console.log('TaskFull -> error', error)
        alert(error.message)
      }
    }
  }

  return (
    <div
      className={classnames('full-task', {
        'full-task-open': task,
      })}>
      <div className="full-task-header align-center mb-5">
        <div className="full-task-progress align-center mr-auto">
          <progress max="100" value={progress}></progress>
          <span>{progress}% completed</span>
        </div>
        {/* <div className="full-task-completed">
          <span className="task-priority-color-box"></span>
          Completed
        </div> */}
        <button
          className="btn-icon btn-icon-fill-dark mr-2"
          onClick={deleteTask}>
          <DeleteIcon />
        </button>
        <button
          onClick={closeTaskSideBar}
          className="btn-icon btn-icon-fill-dark">
          <CloseIcon />
        </button>
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
        {task.steps.map(step => {
          return <Step key={step.id} step={step} taskId={task.id} />
        })}
        <form onSubmit={addStep} className="task-step-add-form">
          <input
            type="text"
            className="form-field"
            value={newStepText}
            placeholder="Add new step"
            onChange={e => setNewStepText(e.target.value)}
          />
          <button className="btn-icon">
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  )
}

export default TaskFull
