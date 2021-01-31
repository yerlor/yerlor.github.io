import { 
  Container,
  Row, 
  Col,
  Image,
  ListGroup
 } from 'react-bootstrap';
 import ListComponent from '../components/ListComponent';
 import data from '../data/data.json';

export default function Work() {
  return (
    <Container fluid>
      <Row>
        <h1>Internship Experience</h1>
      </Row> 
      <Row>
       <ListComponent
          title={"Herrschners"}
          description={"At Herrschners, I work with the Marketing Team on their email and website design. I utilize HTML, CSS, JavaScript, and the Bootstrap framework to create and make updates to the Herrschners, Willow Yarns, and the PuzzleShoppe sites when needed. A few projects I was given working here so far are:"}
          description2={"Website"}
          description3={"FAQs Landing Page"}
          items={data.faqs}
          description4={"Retail Store"}
          description5={"Menu Bar"}
          description6={"Privacy and Security Landing Page"}
          description7={"Other"}
          
        ></ListComponent>
        <ListComponent
          title={"Continuing Education and Outreach Program (University of Wisconsin-Stevens Point"}
          items={data.experience}
        ></ListComponent>
      </Row>
    </Container>
  );
} 