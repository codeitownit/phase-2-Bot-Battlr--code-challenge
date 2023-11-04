// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// function BotContainer({bots}) {
//   return (
//     <Container fluid>
//     <Row md={4}>
//         {bots.map((bot) => (
//             <Col xs={6} sm={4} key={bot.id}>
//             <div>
//             <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={bot.avatar_url} />
//             <Card.Body>
//                 <Card.Title>{bot.name}</Card.Title>
//                 <Card.Text>
//                 {bot.catchphrase}
//                 </Card.Text>
//                 <button variant="primary" className="btn btn-danger">Go somewhere</button>
//             </Card.Body>
//         </Card>
        
//             </div>
//           </Col>
//         ))
//         }
      
//     </Row>
//   </Container>
//   )
// }

// export default BotContainer














import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function BotContainer({bots}) {
  return (
    <Container>
        <Row  >   
    <CardGroup>
        {bots.map((bot) => (
            <Col xs={6} md={4} key={bot.id}>
            <Card style={{ width: '25rem', margin:'0'}}>
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
           
        ))
        }
      
    </CardGroup>
    
    </Row>
    </Container>
  )
}

export default BotContainer