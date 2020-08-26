import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleStep } from './tasksSlice'
import DragIcon from '../../components/icons/DragIcon'
import MoreHorizontalIcon from '../../components/icons/MoreHorizontalIcon'
import api from '../../api'

const Step = ({ step, taskId }) => {
  const dispatch = useDispatch()
  const handleCompleteStep = async () => {
    // update redux
    // send request to api
    // if request failed, revert changes
    dispatch(toggleStep(step.id))
    try {
      await api.put('/tasks/id/steps/id', {
        taskId,
        updatedStep: { ...step, completed: !step.completed },
      })
    } catch (error) {
      console.error(error.message)
      dispatch(toggleStep(step.id))
    }
  }

  return (
    <div className="task-step">
      <button className="btn-icon task-step-drag">
        <DragIcon />
      </button>
      <input
        className="task-step-check"
        type="checkbox"
        checked={step.completed}
        id={`step-${step.id}`}
        onChange={handleCompleteStep}
      />
      <label className="task-step-label" htmlFor={`step-${step.id}`}>
        {step.text}
      </label>
      <button className="btn-icon task-step-more">
        <MoreHorizontalIcon />
      </button>
    </div>
  )
}

export default Step
