import { 
  Container,
  Row, 
  Col,
  Image
 } from 'react-bootstrap';
 import ListComponent from '../components/ListComponent';
 import data from '../data/data.json';
 import selfportrait from '../images/selfportrait.jpg';

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <h1>Hello, I'm Yer.</h1>
          <h2>Student, Designer, Developer</h2>
          <p>
            I am currently a senior at the University of Wisconsin-Stevens Point. 
            Coming this May 2021, I will be graduating with my Bachelors of Science 
            in Human Technology Interaction and a minor in Business.<br></br><br></br>
            Check out my work from my current/previous internships and projects from my courses.
            <br></br><br></br>
            Thank You! 
          </p>
        </Col> 
        <Col lg={6}>
          <Image src={selfportrait} rounded/>
        </Col>  
      </Row>
      <Row>
        <ListComponent
          title={"Experience"}
          description={"A few of my experiences are with"}
          items={data.experience}
        ></ListComponent>
        <ListComponent
          title={"Softwares"}
          description={"Management Tools"}
          items={data.softwares}
        ></ListComponent>
        <ListComponent
          title={"Frameworks"}
          items={data.frameworks}
        ></ListComponent>
      </Row>
    </Container>
  );
}