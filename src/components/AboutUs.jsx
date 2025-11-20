import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { increament, decrement, reset } from '../redux/reducerSlice' 

const AboutUs = () => {

  const count= useSelector((state)=> state.counter.value)
  const dispatch= useDispatch();



  console.log(count)
  return (
    <div >
      <p className='text-center'>{count}</p>
      <div className='flex justify-between mt-5'>

      <button className='border bg-blue-300 p-2 rounded-2xl' onClick={()=> dispatch(increament())} >Increment</button>
      <button className='border bg-blue-300 p-2 rounded-2xl' onClick={()=> dispatch(decrement())} >decrement</button>
      <button className='border bg-blue-300 p-2 rounded-2xl' onClick={()=> dispatch(reset())} >reset</button>
      </div>

    </div>
  )
}
export default AboutUs
