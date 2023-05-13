import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Nav className="justify-content-evenly bg-dark py-3">
        <Link to="/">
          <img src="https://img.icons8.com/?size=512&id=123471&format=png" alt="Logo" height="40" width="auto" />
        </Link>
        <Nav.Item>
          <Link to="/" class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">DashBoard</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/form" class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">Form</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">About</Link>
        </Nav.Item>
        <Nav.Item>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar;