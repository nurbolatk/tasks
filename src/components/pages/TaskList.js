import React from 'react'
import { useSelector } from 'react-redux'

const TaskList = () => {
    const tasks = useSelector(state => state.tasks.tasks)
    return <div>TaskList {tasks.length}</div>
}

export default TaskList
