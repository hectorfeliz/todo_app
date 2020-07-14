import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Hello World {1+1}</h1>
      <input />
      <button>Add Todo</button>
      <ul>
        <li>Take the Dog out for a walk</li>
      </ul>
    </div>
  );
}

export default App;
