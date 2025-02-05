
import { useCounterStore } from '../../zustand/useCounter.store'

export const Counter = () => {

    const {count, increment, decrement} = useCounterStore()

  return (
    <div className='flex items-center gap-4'>
<button className='bg-red-500 text-white p-2 rounded-md' onClick={decrement}>-</button>
    <h1 className='text-2xl font-bold'>{count}</h1>      
    <button className='bg-blue-500 text-white p-2 rounded-md' onClick={increment}>+</button>
    </div>
  )
}
