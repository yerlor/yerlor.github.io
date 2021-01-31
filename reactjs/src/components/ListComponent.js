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
        <Card.Title>
          {props.description}
          <br></br><br></br>
          {props.description2}
        </Card.Title>
        <Card.Text>
          {props.description3}
          {list}
          <br></br>
          {props.description4}
          <br></br>
          {props.description5}
          <br></br>
          {props.description6}
          <br></br>
          {props.description7}
          <br></br>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}