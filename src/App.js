import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [poki,setPoki] = useState([])
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then(res=>{setPoki(res.data.results)
      })
    .catch(err=>{console.log(err)})
  },[])

  const [showPoki, setshowPoki] = useState(false)


  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokeapi</h1>
        <button onClick={()=>setshowPoki(true)}>Fetch Pokemon</button>
      </header>
      <br></br>
      <ul>
        {showPoki && poki.map((pokemon)=>{
          return <li>{pokemon.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
