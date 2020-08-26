import React from 'react'
import ReactDOM from 'react-dom'
import CloseIcon from '../icons/CloseIcon'

const Header = ({ closeModal, children }) => {
  return (
    <div className="modal-header">
      <h3>{children}</h3>
      <button onClick={closeModal} className="btn-icon btn-icon-fill-dark">
        <CloseIcon />
      </button>
    </div>
  )
}

const Modal = ({ show = false, closeModal, children }) => {
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

Modal.Header = Header
export default Modal
