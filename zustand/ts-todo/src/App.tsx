
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'

const App = () => {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
       <TaskInput />
       <TaskList />
    </div>
  )
}

export default App
