import React from 'react';
import Button from './Button.js';

function Counter({ label, count, onIncrement, onDecrement }) {
  return (
    <div className='counter'>
      <label>{label}</label>
      <div>
        <Button onClick={onDecrement} text="-"></Button>
        <span>{count}</span>
        <Button onClick={onIncrement} text = "+"></Button>
      </div>
    </div>
  );
}

export default Counter;