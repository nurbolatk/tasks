import tasksReducer from '../features/tasks/tasksSlice'
import projectsReducer from '../features/projects/projectsSlice'
import appReducer from '../features/app/appSlice'
export default {
  tasks: tasksReducer,
  app: appReducer,
  projects: projectsReducer,
}
