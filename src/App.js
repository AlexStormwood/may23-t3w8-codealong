import './App.css';
// import { useContext } from 'react';
// import { ApiContext } from './contexts/ApiProvider';
import { ApiSearchForm } from './components/ApiSearchForm';
import PokemonTeamDisplay from './components/PokemonTeamDisplay';

function App() {

  // let apiUrl = useContext(ApiContext);

  return (
    <div className="App">

      {/* <h1>{apiUrl}</h1> */}
      <ApiSearchForm />

      <PokemonTeamDisplay />
    </div>
  );
}

export default App;
