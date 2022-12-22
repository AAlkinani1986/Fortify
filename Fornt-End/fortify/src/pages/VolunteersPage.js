import '../component/volunteers/style.css'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import StarRating from '../component/Organisation/StarRating'
import { useState, useEffect } from 'react'

import { App } from 'realm-web'
import { APP_ID } from '../realm/constants'
const VolunteersPage = () => {
  const [loadVolunteers, setLoadVolunteers] = useState(false)
  const [volunteers, setVolunteers] = useState([])
  const app = new App(APP_ID)
  const loadData = async () => {
    const rests = await app.currentUser
      .mongoClient('mongodb-atlas')
      .db('Fortify')
      .collection('Volunteers')
      .find()

    return { success: true, data: rests }
  }

  useEffect(() => {
    ;(async () => {
      setLoadVolunteers(false)
      let res = await loadData()
      console.log(res)
      if (res.success) {
        setVolunteers(res.data)

        setLoadVolunteers(true)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {loadVolunteers ? (
        <Row xs={1} md={3} className="g-4">
          {volunteers.map((volunteer) => (
            <Col key={volunteer.volunteer_id}>
              <Card
                className="volunteersCard"
                border="success"
                style={{ width: 'auto' }}
              >
                <Card.Header className="volunteersHeaderCard">
                  <img
                    className="rounded-circle"
                    src={volunteer.image}
                    alt="name"
                    width="70"
                    height="70"
                  />
                  <div className="volunteerName">
                    <h6>
                      {volunteer.first_name} {volunteer.last_name}
                    </h6>
                    <p>{volunteer.skills}</p>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>About Me</Card.Title>
                  <Card.Text>{volunteer.aboutUs}</Card.Text>
                  <span className="volunteerCardBody"></span>
                </Card.Body>
                <Card.Body className="volunteersCC">
                  <Card.Title>Consultants Capability</Card.Title>

                  <div className="VCSkills">
                    <p>Configure Microsoft Office</p>
                    <StarRating
                      ratingValue={volunteer.environmentHIP.configureM365}
                      status="disabled"
                    />
                  </div>
                  <div className="VCSkills">
                    <p>Operating system</p>
                    <StarRating
                      ratingValue={volunteer.environmentHIP.PatchOS}
                      status="disabled"
                    />
                  </div>
                  <div className="VCSkills">
                    <p>Regular Backups</p>
                    <StarRating
                      ratingValue={volunteer.environmentHIP.backups}
                      status="disabled"
                    />
                  </div>

                  <div className="volunteerCardBody"></div>
                </Card.Body>
                <Card.Body className="volunteersIR">
                  <Card.Title> Incident Response </Card.Title>

                  <div className="VCSkills">
                    <p>Ransomware</p>
                    <StarRating
                      starNumber={3}
                      ratingValue={volunteer.incidentResponse.Ransomware}
                      status="disabled"
                    />
                  </div>
                  <div className="VCSkills">
                    <p>Website Compromised</p>
                    <StarRating
                      starNumber={3}
                      ratingValue={
                        volunteer.incidentResponse.WebsiteCompromised
                      }
                      status="disabled"
                    />
                  </div>
                  <div className="VCSkills">
                    <p>Data loss/theft</p>
                    <StarRating
                      starNumber={3}
                      ratingValue={volunteer.incidentResponse.dataLoss}
                      status="disabled"
                    />
                  </div>
                </Card.Body>

                <Card.Footer>
                  <a
                    href={`/volunteers/${volunteer.volunteer_id}`}
                    className="btn btn-success"
                  >
                    More Info...
                  </a>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="btnLoader">
          <Button className="loader" variant="success" disabled>
            <Spinner
              className="spinnerLoad"
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </div>
      )}
    </>
  )
}
export default VolunteersPage
