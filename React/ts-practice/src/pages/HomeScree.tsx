
import { Link } from 'react-router-dom'

const data = [
    {
        title: "todo_redux",
        path: "/todo-redux"
    },
    {
        title: "todo_zustand",
        path: "/todo-zustand"
    },
    {
        title: "counter_zustand",
        path: "/counter-zustand"
    }
]

const HomeScree = () => {



  return (
    <div className='grid grid-cols-4 gap-4 p-4 justify-center items-center'>
            {data.map((item) => (
                <Link to={item.path} className='bg-gray-200 p-4 rounded-md capitalize  duration-300 shadow-md hover:shadow-lg border border-gray-300'>{item.title}</Link>
            ))}
    </div>
  )
}

export default HomeScree
