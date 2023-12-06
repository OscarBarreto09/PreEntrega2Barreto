import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Link to="/">Automoviles</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/category/BMW'eventKey="link-1">BMW</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/category/Ford' eventKey="link-2">Ford</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/category/Audi' eventKey="link-3">Audi</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/category/Range Rover' eventKey="link-3">Range Rover</Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled">
          <CartWidget/>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;