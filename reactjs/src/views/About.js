import { 
  Container,
  Row, 
  Col,
  Image
 } from 'react-bootstrap';
 import selfportrait from '../images/selfportrait.jpg';
 import Resume from '../PDFs/Resume.pdf';

export default function About() {
  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <h1>About</h1>
          <p>
          Hi, my name is Nkau Yer Lor but you can simply call me Yer. I will be graduating 
          this Spring 2021 with my Bachelor of Science in Human Technology Interaction, minor 
          in Business at the University of Wisconsin-Stevens Point. I began my journey with my 
          first internship right on campus June 2019, then transitioned to accepting an intern 
          position at Herrschners a year later. I've enjoyed all the work that I've done whether 
          it was building wireframes, maintaining sites, creating graphics, digging into the codes 
          and modifying them, etc. 
          <br></br><br></br>
          Positions that I am interested in can range from UX/UI Designer to Web Design/Developer.
          <br></br><br></br>
          I'm quietly confident and always working to improve on my designs and codes.
          <br></br><br></br>
          Resume: <a href = {Resume} target = "_blank">Resume_Nkau Yer Lor.pdf</a>
          </p>
        </Col> 
        <Col lg={6}>
          <Image src={selfportrait} rounded/>
        </Col>  
      </Row>
    </Container>
  );
}
