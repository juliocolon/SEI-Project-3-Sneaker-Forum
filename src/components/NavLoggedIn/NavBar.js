import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'



export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Sneaker Forum</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/threads/new">Post</Nav.Link>
        <NavDropdown title="Threads" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/threads">Nike</NavDropdown.Item>
          <NavDropdown.Item href="/threads">Jordan</NavDropdown.Item>
          <NavDropdown.Item href="/threads">Adidas</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/threads">All</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="/signout">Sign Out</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}