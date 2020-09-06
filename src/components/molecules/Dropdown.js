import React from 'react'

function useOutsideClick(elRef, callback) {
  const callbackRef = React.useRef()
  callbackRef.current = callback

  React.useEffect(() => {
    const handleClick = e => {
      if (!elRef?.current?.contains(e.target) && callbackRef.current) {
        callbackRef.current(e)
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [elRef])
}

const DropdownItem = props => {
  return (
    <button className="dropdown-item" onClick={props.handleClick}>
      {props.children}
    </button>
  )
}

const Dropdown = ({ setOpen, children }) => {
  const ref = React.useRef()

  const handleClickOutside = () => {
    console.log('clicked outside')
    setOpen(false)
  }

  useOutsideClick(ref, handleClickOutside)
  return (
    <div ref={ref} className="dropdown">
      {children}
    </div>
  )
}

Dropdown.Item = DropdownItem

export default Dropdown
