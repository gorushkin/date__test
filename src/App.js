import logo from './logo.svg';
import './App.css';
import preval from 'preval.macro'

const dateTimeStamp = preval`module.exports = new Date().toLocaleString();`
console.log('dateTimeStamp: ', dateTimeStamp);

function App() {
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
          Learn React
        </a>
        <p>Builad at {dateTimeStamp}</p>
      </header>
    </div>
  );
}

export default App;
