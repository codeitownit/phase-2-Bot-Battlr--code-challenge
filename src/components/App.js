// import './App.css';
import React, {useState, useEffect} from 'react';
import BotContainer from './BotContainer';
import BotArmy from './BotArmy';


function App() {
  const baseUrl = "http://localhost:3000/bots";
  const[bots, setBots]=useState([]);

  useEffect(() =>{
    fetch(baseUrl)
    .then((response) =>response.json())
    .then((data) =>setBots(data))
  },[])

  return (
    <div className="App">
      <BotArmy />
      <BotContainer bots={bots}/>
    </div>
  );
}

export default App;
