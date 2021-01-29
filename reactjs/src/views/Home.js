import { 
  Container,
  Row,
  Col
 } from 'react-bootstrap';
 import ListComponent from '../components/ListComponent';
 import data from '../data/data.json';

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col sm={7}>
        <ListComponent
          title={"Experience"}
          description={"A few of my experiences are with"}
          items={data.experience}
        ></ListComponent>
        </Col>
        <Col sm={5}>
        <ListComponent
          title={"Sofwares"}
          description={"Management Tools"}
          items={data.softwares}
        ></ListComponent>
        </Col>
      </Row>
    </Container>
  );
}