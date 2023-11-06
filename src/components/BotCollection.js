import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function BotCollection({bot, botArmy, setBotArmy}) {

  let checkEnlisted;
  checkEnlisted = botArmy.find((armyBot) => armyBot.id === bot.id);
    
  function enlistBot() {
    setBotArmy (checkEnlisted ? botArmy.filter((armyBot)=> armyBot.id !== bot.id): [...botArmy, bot])

      }

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
        <Card.Footer className='card-footer'>
          <small className="text-muted"><i class="fa-solid fa-heart-pulse"></i> {bot.health}</small>
          <small className="text-muted"><i class="fa-solid fa-bolt"></i> {bot.damage}</small>
          <small className="text-muted"><i class="fa-solid fa-shield-halved"></i> {bot.armor}</small>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default BotCollection