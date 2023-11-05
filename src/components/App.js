// import './App.css';
import React, {useState, useEffect} from 'react';
import BotContainer from './BotContainer';
import YourBotArmy from './YourBotArmy';


function App() {
  const baseUrl = "http://localhost:3000/bots";
  const[bots, setBots]=useState([]);
  const[botArmy, setBotArmy] = useState([])


  useEffect(() =>{
    fetch(baseUrl)
    .then((response) =>response.json())
    .then((data) =>setBots(data))
  },[])

  function deleteBot(id) {
    console.log(id)
    fetch(`${baseUrl}/${id}`,
    {
      method: 'DELETE',
    })
    .then((response) =>response.json())
    .then(() =>{
    const updateBots = bots.filter((bot)=>bot.id !== id)
    setBots(updateBots)
  })
  }
  

  return (
    <div className="App">
      <YourBotArmy bots={bots} botArmy={botArmy} setBotArmy={setBotArmy} deleteBot={deleteBot}/>
      <BotContainer bots={bots} botArmy={botArmy} setBotArmy={setBotArmy}/>
    </div>
  );
}

export default App;
