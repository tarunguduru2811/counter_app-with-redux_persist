import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment,reset } from './features/counterSlice';
import { fetchJoke } from './features/jokeSlice';

function App() {
  const {count} = useSelector((state)=>state.counter)
  const {status,text,error} = useSelector((state)=>state.joke);
  const dispatch = useDispatch();
  return (
   <div>
      <p>Counter</p>
        <button onClick={()=>dispatch(increment())}>+</button>
        <p>{count}</p>
        <button onClick={()=>dispatch(decrement())} disabled={count<=0}>-</button>

        <button onClick={()=>dispatch(reset())}>Reset</button>


        <div>
            <h2>Random Jokes</h2>
            {status === "loading" && <p>loading...</p>}
            {status === "failed" && <p>Error : {error}..</p>}
            {status === "succeeded" && <p>{text}</p>}

            <button onClick={()=>dispatch(fetchJoke("dev"))}>Get Dev Joke</button>
            <button onClick={()=>dispatch(fetchJoke("animal"))}>Get Animal Joke</button>
            <button onClick={()=>dispatch(fetchJoke("dev"))}>Get Random Joke</button>
        </div>
   </div>
  );
}

export default App;
