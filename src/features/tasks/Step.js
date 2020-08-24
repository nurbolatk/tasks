import React from 'react'

const Step = ({ step }) => {
  const handleCompleteStep = e => {
    // update redux
    // send request to api
    // if request failed, revert changes
    console.log('aa')
  }
  return (
    <div className="task-step">
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
    </div>
  )
}

export default Step
