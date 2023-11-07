import React, {useState, useEffect} from 'react';
import BotContainer from './BotContainer';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';

function App() {

  // initializing state variables 
  const baseUrl = "http://localhost:3000/bots";
  const[bots, setBots]=useState([]);
  const[bot, setBot]=useState([]);
  const[botArmy, setBotArmy] = useState([])
  const[active, setActive] = useState("firstComponent");

  // fetching json data
  useEffect(() =>{
    fetch(baseUrl)
    .then((response) =>response.json())
    .then((data) =>setBots(data))
  },[])

// function that handles delete requests 
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
  
// renders app component
  return (
    
    <div className="App">
      <nav>
        Bot Battlr- Make your own Bot Army</nav>
      {active==="firstComponent"&&<YourBotArmy bots={bots} botArmy={botArmy} setBotArmy={setBotArmy} deleteBot={deleteBot}/>}
      {active==="secondComponent"&&<YourBotArmy bots={bots} botArmy={botArmy} setBotArmy={setBotArmy} deleteBot={deleteBot}/>}
     {active==="firstComponent"&& <BotContainer bots={bots} botArmy={botArmy} setBotArmy={setBotArmy} setActive={setActive} setBot={setBot}/>}
     {active==="secondComponent"&& <BotSpecs bot={bot} botArmy={botArmy} setBotArmy={setBotArmy} setActive={setActive} /> }
    </div>
  );
}

export default App;