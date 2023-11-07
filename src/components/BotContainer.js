import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BotCollection from './BotCollection';

// contains and renders the bot collection and bot army components
function BotContainer({bots, botArmy, setBotArmy, setActive, setBot}) {

  return (
    <Container>
      <h1 style={{textAlign:'center'}}>Bot Collection</h1>
      <hr style={{ marginBottom:'50px'}}/>
      <Row>   
        <CardGroup>
        {/* iterate through bots collection */}
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