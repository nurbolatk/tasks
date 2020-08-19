import React from 'react'
import TaskList from './TaskList'
import TasksMenu from './TasksMenu'

/* task {
  id
  text
  description
  author
  project
  priority
  deadline
  completed
  archived
}*/

const Tasks = () => {
  return (
    <>
      <TasksMenu />
      <div className="content">
        <TaskList />
      </div>
    </>
  )
}

export default Tasks
