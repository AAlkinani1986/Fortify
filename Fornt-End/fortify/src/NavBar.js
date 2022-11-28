import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Fortify
          </Navbar.Brand>

          <Nav className="justify-content-center ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Organizations</Nav.Link>
            <Nav.Link href="#link">Volunteer</Nav.Link>
            <Nav.Link href="#link">Search</Nav.Link>
          </Nav>
          <Nav className="SLNav">
            <Nav.Link href="#link">Login</Nav.Link>

            <Nav.Link className="NBtn" href="#link">
              Sign Up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
export default NavBar
