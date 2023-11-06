import React from 'react'

function BotSpecs({bot, botArmy, setBotArmy, setActive}) {

      
        let checkEnlisted;
  checkEnlisted = botArmy.find((armyBot) => armyBot.id === bot.id);
    
  function enlistBot() {
    setBotArmy (checkEnlisted ? botArmy.filter((armyBot)=> armyBot.id !== bot.id): [...botArmy, bot])
    setActive("firstComponent")
    
      }

     
      
  return (
    <div className='bot-details'>
        <div className='bot-image'>
            <img src={bot.avatar_url} alt='bot'/>
        </div>
        <div>
            <h1>{bot.name}</h1>
            <p>{bot.catchphrase}</p>
            <h6>{bot.bot_class}</h6>
            <div>
                <small className="text-muted"><i className="fa-solid fa-heart-pulse" style={{color:'#f20707'}}></i> {bot.health}</small>
                <small className="text-muted"><i className="fa-solid fa-bolt" style={{color:'orange'}}></i> {bot.damage}</small>
                <small className="text-muted"><i className="fa-solid fa-shield-halved" style={{color:'blue'}}></i> {bot.armor}</small> 
            </div>
            <button onClick={()=>setActive("firstComponent")} type="">Go Back</button>
            <button onClick={enlistBot} type="">Enlist</button>
        </div>

    </div>
  )
}

export default BotSpecs