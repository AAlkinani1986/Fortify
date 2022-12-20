import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from './images/logo.png'
import React from 'react'
import SignUpPage from './component/navbar/SignUp'
import SignInPage from './component/navbar/SignIn'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './contexts/user.context'

const NavBar = () => {
  const [SignUp, setSignUp] = React.useState(false)
  const [modalShow, setModalShow] = React.useState(false)

  const { user, logOutUser } = useContext(UserContext)

  // This useEffect will run only once when the component is mounted.
  // Hence this is helping us in verifying whether the user is already logged in
  // or not.

  // This function is called when the user clicks the "Logout" button.
  const logOut = async () => {
    try {
      // Calling the logOutUser function from the user context.
      const loggedOut = await logOutUser()
      // Now we will refresh the page, and the user will be logged out and
      // redirected to the login page because of the <PrivateRoute /> component.
      if (loggedOut) {
        window.location.reload()
      }
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Fortify
          </Navbar.Brand>

          <Nav className="justify-content-center ">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/organizations">
              Organizations
            </Nav.Link>
            <Nav.Link as={Link} to="/volunteers">
              Volunteers
            </Nav.Link>
            <Nav.Link as={Link} to="/VNetwork">
              Volunteer Network
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>

          <Nav className="SLNav">
            {!user && (
              <Nav.Link
                onClick={() => setModalShow(true)}
                className="NBTSignIn"
                href="#link"
              >
                Sign In
              </Nav.Link>
            )}

            {!user && (
              <Nav.Link
                onClick={() => setSignUp(true)}
                className="NBtn"
                href="#link"
              >
                Sign Up
              </Nav.Link>
            )}
            {user && (
              <Nav.Link onClick={logOut} className="logout" href="#link">
                LogOut
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      <SignUpPage show={SignUp} onHide={() => setSignUp(false)} />
      <br />
      <SignInPage show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}
export default NavBar
