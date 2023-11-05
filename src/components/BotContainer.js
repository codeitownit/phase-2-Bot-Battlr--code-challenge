import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BotCard from '../BotCard';


function BotContainer({bots, botArmy, setBotArmy}) {

  return (
    <Container>
      <Row>   
        <CardGroup>
          {bots.map((bot) => (
            <BotCard key={bot.id} bot={bot} botArmy={botArmy} setBotArmy={setBotArmy}/>
            ))
          }
        </CardGroup>
      </Row>
    </Container>
  )
}

export default BotContainer