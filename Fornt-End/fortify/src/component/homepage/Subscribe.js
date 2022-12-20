import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Subscribe = () => {
  return (
    <Form className="ESub">
      <Form.Control
        className="email"
        type="email"
        placeholder="Enter your work email"
      />

      <Button className="btn" variant="success" type="submit">
        Get in touch with us
      </Button>
    </Form>
  )
}

export default Subscribe
