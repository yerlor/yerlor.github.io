import { 
  Container,
  Row, 
  Col,
  Image
 } from 'react-bootstrap';
 import ListComponent from '../components/ListComponent';
 import data from '../data/data.json';
 import selfportrait from '../images/selfportrait.jpg';

export default function Work() {
  return (
    <Container fluid>
      <Row>
        <h1>Internship Experience</h1>
      </Row>
      <Row>
       <ListComponent
          title={"Herrschners"}
          items={data.experience}
        ></ListComponent>
        
        <ListComponent
          title={"Continuing Education and Outreach Program (University of Wisconsin-Stevens Point"}
          items={data.experience}
        ></ListComponent>
      </Row>
    </Container>


  );
}