import { 
  Container,
  Row,
  Col
 } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import ListComponent from './components/ListComponent';

function App() {
  return (
    <Container fluid>
      <Row>
        <ListComponent
          title={"title-1"}
          description={"My description"}
          items="[1,2,3,4]"
        ></ListComponent>
      </Row>
      <Row>
        <ListComponent
          title={"title-12"}
          description={"My description 2"}
          items="[a,b,c,d]"
        ></ListComponent>
      </Row>
    </Container>
  );
}

export default App;
