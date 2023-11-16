import s from './Counter.module.scss'
import React, {useState} from 'react';

export const Counter = () => {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
      <div className={s.btn}>
        <div>Count: {count}</div>
        <button onClick={increment}>Increment</button>
      </div>
  );
};