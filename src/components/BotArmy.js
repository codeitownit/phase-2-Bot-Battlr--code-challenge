import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function BotArmy({botArmy, setBotArmy, deleteBot}) {
  

  let updated;
  function dischargeBot(bot) {
  setBotArmy(updated=botArmy.filter((armyBot) => armyBot.id === bot.id ? updated : bot));
  }

  return (
    <div className='bot-army'>
    <Container>
      <Row>   
        <CardGroup>
          {botArmy.map((armyBot) => (
            <Col onClick={()=>dischargeBot(armyBot)} xs={6} md={3}>
              <Card className='bot-card-army' style={{ width: '15rem', margin:'20px'}}>
                <Card.Img variant="top" src={armyBot.avatar_url} alt="bot" />
                <Card.Body>
                  <Card.Title>{armyBot.name}</Card.Title>
                  <Card.Text>
                    {armyBot.catchphrase}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted"><i class="fa-solid fa-heart-pulse"></i> {armyBot.health}</small>
                  <small className="text-muted"><i class="fa-solid fa-bolt"></i> {armyBot.damage}</small>
                  <small className="text-muted"><i class="fa-solid fa-shield-halved"></i> {armyBot.armor}</small>
                  <small className="text-muted"><button onClick={()=>deleteBot(armyBot.id)}><i class="fa-solid fa-xmark" style={{color:'#f20707'}}></i></button></small>
                </Card.Footer>
              </Card>
            </Col>
            ))
          }
      
        </CardGroup>
    
      </Row>
    </Container>
    </div>
  )
}

export default BotArmy