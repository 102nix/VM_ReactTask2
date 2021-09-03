import React, { useState } from 'react'

const Counter = ({id, value, name, onIncrement, onDecrement, onDelete}) => {

  const formValue= () => {
    return value === 0 ? 'Ноль' : value
  }

  const getBageclasses = () => {
    let classes = 'badge m-2 bg-'
    classes += value=== 0 ? 'danger' : 'primary'
    return classes
  }

  return (
    <> 
      <h4>{name}</h4>
      <span className={getBageclasses()}>{formValue()}</span> 
      <button 
        className='btn btn-secondary btn-sm'
        onClick={() => onIncrement(id)}
      >
        Increment
      </button> 
      <button 
        className='btn btn-secondary btn-sm m-2'
        onClick={() => onDecrement(id)}
      >
        Decrement
      </button>
      <button 
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(id)}
      >
        Delete
      </button> 
    </>
  );
}
 
export default Counter;
