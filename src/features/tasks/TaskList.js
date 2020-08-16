import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTasks } from './tasksSlice'

const TaskList = () => {
  const { tasks, status } = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks())
    }
  }, [status, dispatch])

  return <div>TaskList {tasks.length}</div>
}

export default TaskList
