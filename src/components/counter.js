import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [initial, setInitial] = useState(0);
  return (
    <div>
      <h1>
        {count}
      </h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>

      <input
        type="number"
        value={initial}
        onChange={(e) => setInitial(parseInt(e.target.value))}
      ></input>
      <button
        onClick={() => {
            setCount(initial);
        }}
      >set</button>
    </div>
  )
}

export default Counter
