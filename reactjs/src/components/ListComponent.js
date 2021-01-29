import {
  Card,
  ListGroup
} from 'react-bootstrap';

export default function ListComponent(props) {
  const list = props.items.map((item, idx) => 
    <ListGroup key={idx}>
      <ListGroup.Item>{item}</ListGroup.Item>
    </ListGroup>
  );

  return (
    <Card>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Title>{props.description}</Card.Title>
        <Card.Text>
          {list}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}