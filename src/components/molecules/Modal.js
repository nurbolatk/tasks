import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ show, closeModal, children }) => {
  const handleOutsideClick = e => {
    const isOutside = !e.target.closest('.modal-inner')
    if (isOutside) {
      closeModal()
    }
  }
  return (
    show &&
    ReactDOM.createPortal(
      <div className="modal-outer" onClick={handleOutsideClick}>
        <div className="modal-inner">{children}</div>
      </div>,
      document.getElementById('modal')
    )
  )
}

export default Modal
