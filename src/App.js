import logo from './logo.svg';
import './App.css';
// import { useContext } from 'react';
// import { ApiContext } from './contexts/ApiProvider';
import { ApiSearchForm } from './components/ApiSearchForm';

function App() {

  // let apiUrl = useContext(ApiContext);

  return (
    <div className="App">

      {/* <h1>{apiUrl}</h1> */}
      <ApiSearchForm />

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
      </header>
    </div>
  );
}

export default App;
