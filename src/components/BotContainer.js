import React from 'react';
// import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BotCard from '../BotCard';


function BotContainer({bots, botArmy, setBotArmy}) {
//     const[botArmy, setBotArmy] = useState([])

// const checkEnlisted = (botArmy)=>{
//     botArmy.includes()
// }


//     function enlistBot(e) {
        
//     }


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