import { 
  Container,
  Row
 } from 'react-bootstrap';
 import ListComponent from '../components/ListComponent';
 import data from '../data/data.json';

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <ListComponent
          title={"Experience"}
          description={"A few of my experiences are with"}
          items={data.experience}
        ></ListComponent>
        <ListComponent
          title={"Sofwares"}
          description={"Management Tools"}
          items={data.softwares}
        ></ListComponent>
      </Row>
    </Container>
  );
}