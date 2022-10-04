import './App.css';
import Navbar from './components/navbar/navbar';
import Characters from './components/characters/characters';
import Footer from './components/footer/footer';
import { useEffect, useState } from 'react';
//import characters from './services/characters';
import axios from 'axios';

function App() {
  const [character, setCharacter] = useState([])
  const [search, setSearch] = useState('')

  let api = `https://rickandmortyapi.com/api/character?page=1&name=${search}`

  useEffect(() => {
    // characters(search).then(response => {
    //   setCharacter(response.results)
    // })

    axios.get(api)
    .then(response => {
      setCharacter(response.data.results)
    })

    
  }, [api])

  return (
    <div className="App">
      <Navbar setSearch={setSearch}/>
      <Characters characters={character}/>
      <Footer />
    </div>
  );
}

export default App;