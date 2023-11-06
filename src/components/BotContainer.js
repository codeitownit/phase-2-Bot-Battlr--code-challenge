import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BotCollection from './BotCollection';


function BotContainer({bots, botArmy, setBotArmy, setActive, setBot}) {

  return (
    <Container>
      <Row>   
        <CardGroup>
          {bots.map((bot) => (
            <BotCollection key={bot.id} bot={bot} botArmy={botArmy} setBotArmy={setBotArmy} setActive={setActive} setBot={setBot}/>
            ))
          }
        </CardGroup>
      </Row>
    </Container>
  )
}

export default BotContainer