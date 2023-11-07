import React from 'react'

// renders bot specs page for clicked bot
function BotSpecs({bot, botArmy, setBotArmy, setActive}) {

// enlist a bot into the bot army
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
                <h6>Class: {bot.bot_class}</h6>
            <br/>
            <div>
                <small className="text-muted"><i className="fa-solid fa-heart-pulse" style={{color:'#f20707'}}></i> {bot.health}</small>
                <small className="text-muted"><i className="fa-solid fa-bolt" style={{color:'orange'}}></i> {bot.damage}</small>
                <small className="text-muted"><i className="fa-solid fa-shield-halved" style={{color:'blue'}}></i> {bot.armor}</small> 
            </div>
            <br />
            {/* buttons for event handlers for the bot specs page  */}
            <button className="btn btn-lg btn-success"onClick={()=>setActive("firstComponent")} type="">Go Back</button>
            <br />
            <br />
            <button className="btn btn-lg btn-success"onClick={enlistBot} type="">Enlist</button>
            </div>

        </div>
  )
}

export default BotSpecs