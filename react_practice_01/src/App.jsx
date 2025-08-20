import { useState } from 'react'
import './App.css'

function App(){
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count +1);

  const handleDecrement = () => setCount(count -1);

  return (
    <>
    <div className='container'>
    <h1>Counter App</h1>
     
     <button onClick={handleIncrement}>+</button>
     <span>{count}</span>
     <button onClick={handleDecrement}>-</button>
     </div>
    </>
    
  );
}

export default App



