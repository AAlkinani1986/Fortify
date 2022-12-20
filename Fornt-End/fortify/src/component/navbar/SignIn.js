//Page done by David Wang
//Arthur is Ali Al-kinani
// date 15/DEC 2022
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useContext, useEffect, useState } from 'react'
import './style.css'
import { UserContext } from '../../contexts/user.context'
import { useLocation, useNavigate } from 'react-router-dom'

const SignInPage = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  // We are consuming our user-management context to
  // get & set the user details here
  const { user, fetchUser, emailPasswordLogin } = useContext(UserContext)

  // We are using React's "useState" hook to keep track
  //  of the form values.
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  // This function will be called whenever the user edits the form.
  const onFormInputChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }
  // This function will redirect the user to the
  // appropriate page once the authentication is done.
  const redirectNow = () => {
    const redirectTo = location.search.replace('?redirectTo=', '')
    navigate(redirectTo ? redirectTo : '/')
  }
  // Once a user logs in to our app, we don’t want to ask them for their
  // credentials again every time the user refreshes or revisits our app,
  // so we are checking if the user is already logged in and
  // if so we are redirecting the user to the home page.
  // Otherwise we will do nothing and let the user to login.
  const loadUser = async () => {
    if (!user) {
      const fetchedUser = await fetchUser()
      if (fetchedUser) {
        // Redirecting them once fetched.
        // redirectNow()
      }
    }
  }
  // This useEffect will run only once when the component is mounted.
  // Hence this is helping us in verifying whether the user is already logged in
  // or not.
  useEffect(() => {
    loadUser() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // This function gets fired when the user clicks on the "Login" button.
  const onSubmit = async (event) => {
    try {
      // Here we are passing user details to our emailPasswordLogin
      // function that we imported from our realm/authentication.js
      // to validate the user credentials and log in the user into our App.
      const user = await emailPasswordLogin(form.email, form.password)
      if (user) {
        props.onHide()

        redirectNow()
      }
    } catch (error) {
      if (error.statusCode === 401) {
        alert('Invalid username/password. Try again!')
      } else {
        alert(error)
      }
    }
  }
  return (
    <Modal
      className="modalSignIn"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="name@example.com"
              value={form.email}
              onChange={onFormInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>

            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={onFormInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="success" onClick={onSubmit}>
          Sign In
        </Button>
        <Button variant="danger" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default SignInPage
