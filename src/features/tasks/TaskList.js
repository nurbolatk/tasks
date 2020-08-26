// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchTasks } from './tasksSlice'
// import avatarPlaceholder from '../../assets/avatar-placeholder.svg'

// const TaskList = () => {
//   const { tasks, status } = useSelector(state => state.tasks)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchTasks())
//     }
//   }, [status, dispatch])

//   return (
//     <div className="task-list">
//       {tasks.map(task => {
//         return (
//           <div className="task" key={`task-${task.id}-completed`}>
//             <div className="task-header">
//               <input
//                 className="task-check"
//                 type="checkbox"
//                 name="completed"
//                 id={`task-${task.id}-completed`}
//               />
//               <label
//                 className="task-text"
//                 htmlFor={`task-${task.id}-completed`}>
//                 {task.text}
//               </label>
//             </div>
//             <div className="task-project">
//               <button className="task-project-color"></button>
//               <span className="task-project-label">Project:</span>
//               <span className="task-project-text">{task.project.name}</span>
//             </div>
//             <div className="task-details">
//               <div className="task-priority">
//                 <button className="task-project-color"></button>
//                 <span className="task-project-label">Priority:</span>
//                 <span>{task.priority}</span>
//               </div>
//               <div className="task-deadline">
//                 <span className="task-project-label">Due:</span>
//                 <span>Today</span>
//               </div>
//             </div>
//             <div className="task-description">{task.description}</div>
//             <div className="task-comments">
//               <div className="task-comments-list">
//                 <div className="task-comment">
//                   <div className="task-comment-author-avatar">
//                     <img src={avatarPlaceholder} alt="John Doe" />
//                   </div>
//                   <div className="task-comment-author-name">John doe</div>
//                   <p className="task-comment-text">
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                     Praesentium, hic.
//                   </p>
//                 </div>
//               </div>
//               <form className="task-comments-form">
//                 <input
//                   type="text"
//                   className="form-field"
//                   placeholder="Add comment..."
//                 />
//               </form>
//             </div>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default TaskList
