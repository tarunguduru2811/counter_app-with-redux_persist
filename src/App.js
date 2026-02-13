import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment,reset } from './features/counterSlice';

function App() {
  const {count} = useSelector((state)=>state.counter)
  const dispatch = useDispatch();
  return (
   <div>
      <p>Counter</p>
        <button onClick={()=>dispatch(increment())}>+</button>
        <p>{count}</p>
        <button onClick={()=>dispatch(decrement())} disabled={count<=0}>-</button>

        <button onClick={()=>dispatch(reset())}>Reset</button>
   </div>
  );
}

export default App;
