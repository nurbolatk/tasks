import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <p>
          <Link to="/books">Books</Link>
        </p>
        <p>
          <Link to="/booksdouble">Taet led</Link>
        </p>
        <p>
          <Link to="/projects">Projects</Link>
        </p>
        <Link to="/tasks">Tasks</Link>
      </nav>
    </div>
  )
}

export default Sidebar
