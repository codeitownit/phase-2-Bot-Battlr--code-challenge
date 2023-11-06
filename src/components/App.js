import React, {useState, useEffect} from 'react';
import BotContainer from './BotContainer';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';


function App() {
  const baseUrl = "http://localhost:3000/bots";
  const[bots, setBots]=useState([]);
  const[bot, setBot]=useState([]);
  const[botArmy, setBotArmy] = useState([])
  const[active, setActive] = useState("firstComponent");


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
      {active==="firstComponent"&&<YourBotArmy bots={bots} botArmy={botArmy} setBotArmy={setBotArmy} deleteBot={deleteBot}/>}
      {active==="secondComponent"&&<YourBotArmy bots={bots} botArmy={botArmy} setBotArmy={setBotArmy} deleteBot={deleteBot}/>}
     {active==="firstComponent"&& <BotContainer bots={bots} botArmy={botArmy} setBotArmy={setBotArmy} setActive={setActive} setBot={setBot}/>}
     {active==="secondComponent"&& <BotSpecs bot={bot} botArmy={botArmy} setBotArmy={setBotArmy} setActive={setActive} /> }
    </div>
  );
}

export default App;