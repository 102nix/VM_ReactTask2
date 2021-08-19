import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)

  const formCount = () => {
    return count === 0 ? 'Ноль' : count
  }

  const getBageclasses = () => {
    let classes = 'badge m-2 bg-'
    classes += count === 0 ? 'danger' : 'primary'
    return classes
  }

  const handleDecrement = () => {
    if (count === 0) return
    setCount(prevCount => prevCount - 1)
  }

  return (
    <> 
      <span className={getBageclasses()}>{formCount()}</span> 
      <button 
        className='btn btn-secondary btn-sm'
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        Increment
      </button> 
      <button 
        className='btn btn-secondary btn-sm m-2'
        onClick={handleDecrement}
      >
        Decrement
      </button> 
    </>
  );
}
 
export default Counter;
