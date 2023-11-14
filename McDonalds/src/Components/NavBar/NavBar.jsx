import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Locales</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">En Familia</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Nosotros</Nav.Link>
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