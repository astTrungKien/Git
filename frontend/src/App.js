import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  const handleClick = (e) => {
    setCount(count++)
    console.log(count)
    console.log("Count function: ")
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello from React
          <HomePage />

          <p>{count}</p>
          <button onClick={handleClick}>Click to Count</button>
        </a>
      </header>
    </div>
  );
}

export default App;
