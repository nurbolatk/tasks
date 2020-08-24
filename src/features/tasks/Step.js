import React from 'react'
import DragIcon from '../../components/icons/DragIcon'
import MoreHorizontalIcon from '../../components/icons/MoreHorizontalIcon'

const Step = ({ step }) => {
  const handleCompleteStep = e => {
    // update redux
    // send request to api
    // if request failed, revert changes
    console.log('aa')
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