import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function BotArmy({botArmy}) {

  return (
    <div className='bot-army'>
    <Container>
        <Row>   
    <CardGroup>
        {botArmy.map((armyBot) => (
            <Col xs={6} md={3}>
            <Card className='bot-card-army' style={{ width: '15rem', margin:'20px'}}>
            <Card.Img variant="top" src={armyBot.avatar_url} alt="bot" />
            <Card.Body>
              <Card.Title>{armyBot.name}</Card.Title>
              <Card.Text>
                {armyBot.catchphrase}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
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