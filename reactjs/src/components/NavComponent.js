import { Nav } from 'react-bootstrap';

export default function NavComponent(props) {
  const navList = props.data.navConfig.map((item, idx) => 
    <Nav.Item key={idx}>
      <Nav.Link href={item.link}>{item.name}</Nav.Link>
    </Nav.Item>
  );

  return (
    <Nav>
      {navList}
    </Nav>
  );
}