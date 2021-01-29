import {
  Card
} from 'react-bootstrap';

export default function ListComponent(props) {
  return (
    <Card>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Title>{props.description}</Card.Title>
        <Card.Text>
          {props.items}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}