import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (e) => {
    setCount(count++)
    console.log("Count function: ")
    console.log(count)
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
          <p>Only use for branch: new-change</p>

          <button onClick={handleClick}>Click to Count</button>
          <p>{count}</p>
        </a>
      </header>
    </div>
  );
}

export default App;
