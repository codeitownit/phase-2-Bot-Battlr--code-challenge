import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function BotCard({bot, botArmy, setBotArmy}) {
   
    const checkEnlisted = botArmy.find((armyBot) => armyBot.id === bot.id);
    
        function enlistBot() {
            if(checkEnlisted){
                const updateBotArmy = botArmy.filter((armyBot)=> armyBot.id !== bot.id)
                setBotArmy(updateBotArmy)
            }else{
                const updateBotArmy = [...botArmy, bot]
                setBotArmy(updateBotArmy)
            }
            
        }
console.log(botArmy)

  return (
        <Col onClick={enlistBot} xs={6} md={3}>
            <Card className="bot-card"style={{ width: '15rem', margin:'0'}}>
            <Card.Img variant="top" src={bot.avatar_url} alt="bot" />
            <Card.Body>
              <Card.Title>{bot.name}</Card.Title>
              <Card.Text>
                {bot.catchphrase}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            </Card>
        </Col>
  )
}

export default BotCard